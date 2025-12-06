import {
    formattedDate,
    formattedName,
    generateRandomColor,
    generateRandomId,
    getCurrentDateTime,
    renderElement
} from "../utils/helper.js";
import {data} from "../assets/data/data.js";
import {comentarService} from "../services/comentarService.js";

export const wishas = () => {
    const wishasContainer = document.querySelector('.wishas');
    if (!wishasContainer) {
        console.error('Wishas container not found!');
        return;
    }
    
    const form = document.querySelector('#commentForm');
    const buttonForm = form ? form.querySelector('button[type="submit"]') : null;
    const containerComentar = wishasContainer.querySelector('ul[aria-label="list comentar"]');
    const commentSection = wishasContainer.querySelector('div[data-aos="zoom-in"]');
    const peopleComentar = commentSection ? commentSection.querySelector('p') : null;
    const pageNumber = wishasContainer.querySelector('.page-number');
    const prevButton = wishasContainer.querySelector('#prevBtn');
    const nextButton = wishasContainer.querySelector('#nextBtn');

    const listItemComentar = (data) => {
        const name = formattedName(data.name);
        const newDate = formattedDate(data.date);
        let date = "";

        if (newDate.days < 1) {
            if (newDate.hours < 1) {
                date = `${newDate.minutes} menit yang lalu`;
            } else {
                date = `${newDate.hours} jam, ${newDate.minutes} menit yang lalu`;
            }
        } else {
            date = `${newDate.days} hari, ${newDate.hours} jam yang lalu`;
        }

        return ` <li data-aos="zoom-in" data-aos-duration="1000">
                     <div style="background-color: ${data.color}">${data.name.charAt(0).toUpperCase()}</div>
                     <div>
                         <h4>${name}</h4>
                         <p>${date} <br>${data.status}</p>
                         <p>${data.message}</p>
                     </div>
                 </li>`;
    };

    let lengthComentar;

    const initialComentar = async () => {
        if (containerComentar) {
            containerComentar.innerHTML = `<h1 style="font-size: 1rem; margin: auto">Loading...</h1>`;
        }
        if (peopleComentar) {
            peopleComentar.textContent = '...';
        }
        if (pageNumber) {
            pageNumber.textContent = '..';
        }

        try {
            const response = await comentarService.getComentar();
            const {comentar} = response;

            lengthComentar = comentar.length;
            comentar.reverse();

            if (peopleComentar) {
                if (comentar.length > 0) {
                    peopleComentar.textContent = `${comentar.length} Orang telah mengucapkan`;
                } else {
                    peopleComentar.textContent = `Belum ada yang mengucapkan`;
                }
            }

            if (pageNumber) {
                pageNumber.textContent = '1';
            }
            if (containerComentar) {
                renderElement(comentar.slice(startIndex, endIndex), containerComentar, listItemComentar);
            }
        } catch (error) {
            console.error('Error loading comments:', error);
            if (containerComentar) {
                containerComentar.innerHTML = `<h1 style="font-size: 1rem; margin: auto; color: red;">Error loading comments</h1>`;
            }
        }
    };

    // Setup form submit
    if (form && buttonForm) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            buttonForm.textContent = 'Loading...';
            buttonForm.disabled = true;

            const nameInput = form.querySelector('[name="nama"]');
            const statusInput = form.querySelector('[name="kehadiran"]');
            const commentInput = form.querySelector('[name="comment"]');

            const nameValue = nameInput ? nameInput.value.trim() : '';
            const statusValue = statusInput ? statusInput.value : '';
            const messageValue = commentInput ? commentInput.value.trim() : '';

            if (!nameValue || !statusValue || !messageValue) {
                alert('Mohon lengkapi semua field!');
                buttonForm.textContent = 'Kirim';
                buttonForm.disabled = false;
                return;
            }

            const comentar = {
                id: generateRandomId(),
                name: nameValue,
                status: statusValue === 'hadir' ? 'Hadir' : 'Tidak Hadir',
                message: messageValue,
                date: getCurrentDateTime(),
                color: generateRandomColor(),
            };

            try {
                const response = await comentarService.getComentar();
                await comentarService.addComentar(comentar);

                lengthComentar = response.comentar.length;

                if (peopleComentar) {
                    peopleComentar.textContent = `${++response.comentar.length} Orang telah mengucapkan`;
                }
                if (containerComentar) {
                    containerComentar.insertAdjacentHTML('afterbegin', listItemComentar(comentar));
                }
            } catch (error) {
                alert(`Error: ${error.message}`);
                console.error('Error submitting comment:', error);
            } finally {
                buttonForm.textContent = 'Kirim';
                buttonForm.disabled = false;
                form.reset();
            }
        });
    } else {
        console.error('Form or button not found!', { form, buttonForm });
    }

    // click prev & next
    let currentPage = 1;
    let itemsPerPage = 4;
    let startIndex = 0;
    let endIndex = itemsPerPage;

    const updatePageContent = async () => {
        if (containerComentar) {
            containerComentar.innerHTML = '<h1 style="font-size: 1rem; margin: auto">Loading...</h1>';
        }
        if (pageNumber) {
            pageNumber.textContent = '..';
        }
        if (prevButton) prevButton.disabled = true;
        if (nextButton) nextButton.disabled = true;

        try {
            const response = await comentarService.getComentar();
            const {comentar} = response;

            comentar.reverse();

            if (containerComentar) {
                renderElement(comentar.slice(startIndex, endIndex), containerComentar, listItemComentar);
            }
            if (pageNumber) {
                pageNumber.textContent = currentPage.toString();
            }
        } catch (error) {
            console.log(error);
        } finally {
            if (prevButton) prevButton.disabled = false;
            if (nextButton) nextButton.disabled = false;
        }
    }

    if (nextButton) {
        nextButton.addEventListener('click', async () => {
            if (endIndex <= lengthComentar) {
                currentPage++;
                startIndex = (currentPage - 1) * itemsPerPage;
                endIndex = startIndex + itemsPerPage;
                await updatePageContent();
            }
        });
    }

    if (prevButton) {
        prevButton.addEventListener('click', async () => {
            if (currentPage > 1) {
                currentPage--;
                startIndex = (currentPage - 1) * itemsPerPage;
                endIndex = startIndex + itemsPerPage;
                await updatePageContent();
            }
        });
    }

    initialComentar().then();
};

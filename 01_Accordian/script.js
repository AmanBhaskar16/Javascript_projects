const data = [
  {
    id: '1',
    question: 'What is an accordion component?',
    answer:
      'An accordion is a UI element that allows users to expand and collapse sections of content.',
  },
  {
    id: '2',
    question: 'Why use an accordion?',
    answer:
      'Accordions help organize large amounts of information into manageable sections, improving readability and UX.',
  },
  {
    id: '3',
    question: 'Where are accordions commonly used?',
    answer:
      'You’ll often see accordions in FAQs, settings pages, and any layout where space is limited.',
  },
  {
    id: '4',
    question: 'Are accordions good for accessibility?',
    answer:
      'Yes — when implemented with proper ARIA attributes and keyboard support, accordions can be fully accessible.',
  },
];

const accordionWrapper = document.querySelector('.accordion');

const createAccordion = () => {
  accordionWrapper.innerHTML = data.map((DataItem) => `
    <div class="accordion-item">
      <div class="accordion-title">
      <h3>${DataItem.question}</h3>
      <i class="fa-solid fa-arrow-up"></i>
      </div>
      <div class="accordion-content">
      <p>${DataItem.answer}</p>
      </div>
    </div>
    `).join(" ")
}

createAccordion();

const getAccordionTitles = document.querySelectorAll('.accordion-title');

getAccordionTitles.forEach(currentItem => {
  currentItem.addEventListener('click',(e) => {
    if(currentItem.classList.contains('active')){
      currentItem.classList.remove('active');
    }else{
      let getAlreadyAddedActiveClasses = document.querySelectorAll('.active');
      getAlreadyAddedActiveClasses.forEach(curr => {
        curr.classList.remove('active');
      });
      currentItem.classList.add('active');
    }
  })
})
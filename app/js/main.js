var elementOld = document.querySelector(".Accordion__tab--open");
var openClass = "Accordion__tab--open";

function toggleAccordion(element) {
  content = element.querySelector(".Accordion__tab__content");

  if (elementOld != null) {
    elementOld.classList.remove(openClass);
    contentOld = elementOld.querySelector(".Accordion__tab__content");
    contentOld.style.maxHeight = "0px";
  }

  if (elementOld !== element) {
    element.classList.add(openClass);
    content.style.maxHeight = content.scrollHeight + "px";
    elementOld = element;
  } else {
    elementOld = null;
  }
}

///////////////////////////
document.querySelectorAll('.btn-acordion').forEach(button => {
  button.addEventListener('click', function() {
    const accordion = document.querySelector('.Accordion');
    accordion.classList.toggle('open');
  });
});

///////////////
document.querySelectorAll('.gradient-border').forEach((listItem) => {
  listItem.querySelectorAll('.tab-link').forEach((tab) => {
    tab.addEventListener('click', function(e) {
      e.preventDefault();

      // Remove active class from all tab buttons in the current list item
      listItem.querySelectorAll('.tab-link').forEach((btn) => btn.classList.remove('active'));

      // Add active class to the clicked tab button
      this.classList.add('active');

      const tabNumber = this.getAttribute('data-tab');

      // Hide all content and reset sums within the current list item
      listItem.querySelectorAll('.tab-content').forEach((content) => {
        content.classList.remove('active');
        content.style.display = 'none';
        setTimeout(() => content.style.opacity = '0', 0); // Fade-out immediately
      });

      // Hide all sum blocks and reset active class
      listItem.querySelectorAll('.sum').forEach((sum) => {
        sum.classList.remove('active');
      });

      // Show the corresponding content and sums in the current list item
      const activeContent = listItem.querySelector(`.tab-content[data-content="${tabNumber}"]`);
      activeContent.style.display = 'block';
      setTimeout(() => activeContent.style.opacity = '1', 10); // Fade-in after a brief delay
      activeContent.classList.add('active');

      // Add active class to the corresponding sum blocks in the current list item
      const activeSums = listItem.querySelectorAll(`.sum[data-sum="${tabNumber}"]`);
      activeSums.forEach((sum) => {
        sum.classList.add('active');
      });
    });
  });
});

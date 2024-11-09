function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

$(document).ready(function(){
  $('#downloadBtn').click(function(){
      $('#downloadModal').modal('show');
  });

  $('#downloadForm').submit(function(event){
      event.preventDefault();
      var name = $('#name').val();
      var phone = $('#phone').val();
      var email = $('#email').val();
      
      // Send an email (simulated by console log in this example)
      console.log('Sending email to:', email);
      console.log('Name:', name);
      console.log('Phone:', phone);
      
      // After "sending" the email, download the picture
      var link = document.createElement('a');
      link.href = 'path/to/your/image.jpg'; // Replace with the actual image path
      link.download = 'image.jpg';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Close the modal
      $('#downloadModal').modal('hide');
  });
});

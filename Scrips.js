function loadMessages() {
    // Realiza una solicitud AJAX para obtener los mensajes desde el servidor
    // y mostrarlos en el elemento con id "messages"
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'get_messages.php', true);
    xhr.onload = function() {
      if (xhr.status === 200) {
        var messagesContainer = document.getElementById("messages");
        messagesContainer.innerHTML = xhr.responseText;
      }
    };
    xhr.send();
  }
  
  function sendMessage() {
    var username = document.getElementById("usernameInput").value;
    var message = document.getElementById("messageInput").value;
    
    // Realiza una solicitud AJAX para guardar el mensaje en el servidor
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'save_message.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
      if (xhr.status === 200) {
        // Recarga los mensajes después de enviar el mensaje
        loadMessages();
      }
    };
    xhr.send('username=' + encodeURIComponent(username) + '&message=' + encodeURIComponent(message));
  }
  
  // Carga los mensajes cuando la página se carga inicialmente
  window.addEventListener('load', function() {
    loadMessages();
  });


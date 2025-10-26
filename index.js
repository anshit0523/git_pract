
    // simple client-side validation demo
    const form = document.getElementById('loginForm');
    const email = document.getElementById('email');
    const pass = document.getElementById('password');
    const msg = document.getElementById('message');
    const toggle = document.getElementById('togglePass');

    toggle.addEventListener('click', () => {
      const t = pass.type === 'password' ? 'text' : 'password';
      pass.type = t;
      toggle.textContent = t === 'password' ? 'Show' : 'Hide';
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      msg.style.display = 'none';
      msg.textContent = '';

      const em = email.value.trim();
      const pw = pass.value;

      if (!em || !/^\S+@\S+\.\S+$/.test(em)) {
        msg.style.display = 'block';
        msg.textContent = 'Please enter a valid email address.';
        email.focus();
        return;
      }
      if (!pw || pw.length < 6) {
        msg.style.display = 'block';
        msg.textContent = 'Password must be at least 6 characters.';
        pass.focus();
        return;
      }

      // In a real app send credentials to the server over HTTPS.
      // Here we just simulate success.
      msg.style.display = 'block';
      msg.style.color = 'green';
      msg.textContent = 'Login successful (demo).';
    });

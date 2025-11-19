function calculate(op) {
      // इनपुट्स वाचणे
      const a = parseFloat(document.getElementById('num1').value);
      const b = parseFloat(document.getElementById('num2').value);
      let res;

      
      switch (op) {
        case '+':
          res = a + b;
          break;
        case '-':
          res = a - b;
          break;
        case '*':
          res = a * b;
          break;
        case '/':
          if (b === 0) {
            res = "भागाकार केले जाऊ शकत नाही (शून्य)";
          } else {
            res = a / b;
          }
          break;
        case '%':
          res = a % b;
          break;
        case '**':
          res = a ** b;
          break;
        default:
          res = "अपरिचित ऑपरेशन";
      }

      // परिणाम दाखवणे
      document.getElementById('result').innerText = ` ${a} ${op} ${b} = ${res}`;
    }
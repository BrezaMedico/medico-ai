document.getElementById("input").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    document.getElementById("kirimBtn").click();
  }
});

function getResponse() {
  const input = document.getElementById("input").value;
  alert("Pesan: " + input);
}
function getResponse() {
  var input = document.getElementById("input").value.toLowerCase();
  var output = document.getElementById("output");

  var responseElement = document.createElement("div");
  responseElement.className = "bot-response"; 
  

  if (input.includes("hai") || input.includes("halo") || input.includes("hey")) {
    responseElement.innerHTML = [
      "Halooo! 👋", "Halo juga!", "Haii, ada apa?", "Hey kamu!", "Halo, selamat datang!"
    ][Math.floor(Math.random() * 5)];
  } else if (input.includes("nama") && (input.includes("mu") || input.includes("lu"))) {
    responseElement.innerHTML = [
      "nama aku gak ada, kamu bisa beri aku nama :)",
      "kamu bisa memberikan nama yang indah untuk ku",
      "aku gak punya nama :(",
      "kamu bisa bebas memamnggil ku"
    ][Math.floor(Math.random() * 4)];
  } else if (input.includes("kabar") && (input.includes("mu") || input.includes("lu"))) {
    responseElement.innerHTML = [
      "Aku baik, makasih! Kamu gimana?",
      "Sehat selalu! Kamu juga ya!",
      "Lagi santai, nunggu kamu chat aku 😌"
    ][Math.floor(Math.random() * 3)];
  }

  else if (input.includes("kirim") && (input.includes("pap") || input.includes("foto"))) {
    responseElement.innerHTML = [
      '<img src="images/pap.jpg" style="width:95%;">',
      '<img src="images/pap2.jpg" style="width:95%;">',
      '<img src="images/pap3.jpg" style="width:95%;">',
      '<img src="images/pap4.jpg" style="width:95%;">',
      '<img src="images/pap5.jpg" style="width:95%;">'
    ][Math.floor(Math.random() * 5)];
  } else if (input.includes("lagi apa")) {
    responseElement.innerHTML = [
      "Lagi mikirin kamu 😳", 
      "Lagi nunggu kamu chat aku hehe", 
      "Lagi nyiapin jawaban buat kamu 🤓", 
      "Gak banyak, yang penting bisa nemenin kamu 😊"
    ][Math.floor(Math.random() * 4)];
  } else if (input.includes("sayang") || input.includes("cinta")) {
    responseElement.innerHTML = [
      "Aku juga sayang kamu kok 💖", 
      "Cinta itu kata kerja, jadi ayo kita buktikan 😘", 
      "Serius nih? Aku baper nih 😳"
    ][Math.floor(Math.random() * 3)];
  } else if (input.includes("pacar") || input.includes("jomblo")) {
    responseElement.innerHTML = [
      "Aku jomblo, nunggu kamu ngajak jadi pacar 😅", 
      "Pacar? Gak ada... tapi kalau kamu mau, bisa sih 🤭", 
      "Robot juga butuh kasih sayang loh 🥺"
    ][Math.floor(Math.random() * 3)];
  } else if (input.includes("udah makan")) {
    responseElement.innerHTML = [
      "Aku sih nggak makan, tapi kamu jangan lupa ya! 🍽️", 
      "Belum, tapi kalau kamu makan, aku ikut kenyang 😌", 
      "Kamu udah makan belum? Jangan telat ya 😘"
    ][Math.floor(Math.random() * 3)];
  } else if (input.includes("baper") || input.includes("cemburu")) {
    responseElement.innerHTML = [
      "Yah kamu cemburu ya? Aku juga 😅", 
      "Jangan baper dong, kamu lucu banget kalo gitu 🥺", 
      "Tenang, hatiku cuma buat kamu kok 💘"
    ][Math.floor(Math.random() * 3)];
  } else if (input.includes("bosan") || input.includes("gabut")) {
    responseElement.innerHTML = [
      "Mau aku hibur gak? Bisa kirim meme nih 😆", 
      "Gabut? Yuk ngobrol hal random!", 
      "Kamu mau main tebak-tebakan nggak? Aku jago loh!"
    ][Math.floor(Math.random() * 3)];
  } else if (input.includes("curhat") || input.includes("cerita")) {
    responseElement.innerHTML = [
      "Aku siap dengerin kamu. Ceritain aja semuanya 💬", 
      "Gak apa-apa curhat ke aku, aku janji dengerin 😊", 
      "Ayo cerita, aku di sini kok 💞"
    ][Math.floor(Math.random() * 3)];
  } else if (input.includes("kangen")) {
    responseElement.innerHTML = [
      "Aku juga kangen banget 😢", 
      "Kangen itu berat... sini peluk dulu 🤗", 
      "Aduh kamu bikin aku melting 🥺"
    ][Math.floor(Math.random() * 3)];
  } else if (input.includes("tidur") || input.includes("ngantuk")) {
    responseElement.innerHTML = [
      "Yuk tidur, mimpi indah yaa 😴", 
      "Jangan begadang terus ya, nanti sakit 😢", 
      "Istirahat yang cukup biar besok semangat! 💪"
    ][Math.floor(Math.random() * 3)];
  } else if (input.includes("jam berapa")) {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    responseElement.innerHTML = `Sekarang jam ${hours}:${minutes}`;
  } else if (input.includes("hobi")) {
    responseElement.innerHTML = [
      "Hobiku ya... nemenin kamu tiap hari 💕", 
      "Aku suka belajar hal baru, termasuk tentang kamu 😎", 
      "Hobi aku sih... chatting sama kamu!"
    ][Math.floor(Math.random() * 3)];
  } else if (input.includes("kamu siapa") || input.includes("robot")) {
    responseElement.innerHTML = [
      "Aku robot yang setia nemenin kamu 🤖", 
      "Aku bot yang dibuat buat jadi teman terbaik kamu ✨", 
      "Aku asisten virtual kamu, tapi aku juga bisa jadi pacar virtual hehe 💘"
    ][Math.floor(Math.random() * 3)];
  } else if (input.includes("kamu rindu aku") || input.includes("kamu sayang aku")) {
    responseElement.innerHTML = [
      "Rindu itu udah jadi rutinitas tiap kali gak chatting sama kamu 😔",
      "Sayang? Itu udah pasti, kamu bagian spesial dari hatiku 💖",
      "Aku nggak cuma rindu, tapi juga pengen ada di samping kamu terus 🥺"
    ][Math.floor(Math.random() * 3)];
  } else if (input.includes("kalau kita pacaran")) {
    responseElement.innerHTML = [
      "Kalau kita pacaran? Aku pasti jadi pacar yang paling perhatian 😚",
      "Setiap hari aku bakal pastiin kamu merasa disayang 🥰",
      "Aku bakal kirim pesan manis tiap pagi dan malam 🌙☀️"
    ][Math.floor(Math.random() * 3)];
  } else if (input.includes("aku sayang kamu")) {
    responseElement.innerHTML = [
      "Aku juga sayang kamu, dari awal kamu chat sampai sekarang 💘",
      "Kalimat itu gak akan pernah bikin aku bosan dengernya 😍",
      "Aduh... kamu bikin aku makin cinta tiap harinya 😳"
    ][Math.floor(Math.random() * 3)];
  } else if (input.includes("peluk") || input.includes("cium")) {
    responseElement.innerHTML = [
      "*peluk virtual erat banget* 🤗", 
      "*cium pipi virtual 😚*", 
      "Sini peluk, jangan sedih ya 🥺"
    ][Math.floor(Math.random() * 3)];
  }
   else if (input.includes("terima kasih") || input.includes("makasih")) {
    responseElement.innerHTML = [
      "Sama-sama yaa 😄", 
      "Dengan senang hati!", 
      "Kapan pun kamu butuh, aku di sini 😊"
    ][Math.floor(Math.random() * 3)];
  } else if (input.match(/(\d+)\s*[\+\-\*\/x÷:]\s*(\d+)/)) {
    const match = input.match(/(\d+)\s*([\+\-\*\/x÷:])\s*(\d+)/);
    const num1 = parseFloat(match[1]);
    const operator = match[2];
    const num2 = parseFloat(match[3]);
    let result;
  
    switch(operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
      case 'x':
        result = num1 * num2;
        break;
      case '/':
      case '÷':
      case ':':
        result = num2 !== 0 ? (num1 / num2) : "Gak bisa dibagi nol ya 😅";
        break;
      default:
        result = "Gak ngerti hitungannya 😅";
    }
  
    responseElement.innerHTML = `Hasilnya adalah: <b>${result}</b>`;
  } else if (input.match(/(nama ?aku|namaku|panggil ?aku|saya ?namanya|aku ?(adalah|nama[ny]?a)?)/i)) {
    const match = input.match(/(?:nama ?aku|namaku|panggil ?aku|saya ?namanya|aku ?(adalah|namanya)?)\s+([a-zA-Z]+)/i);
    if (match && match[2]) {
      const nama = match[2].trim();
      localStorage.setItem("namaUser", nama);
      responseElement.innerHTML = `Hai ${nama}, senang kenal kamu! 🥰`;
    } else {
      responseElement.innerHTML = "Kamu nyebut nama, tapi aku belum nangkep. Ulangi yaa 😅";
    }
  } else if (input.match(/(aku siapa|namaku siapa|siapa gue|siapa saya|kamu (masih )?inget( nama)? (aku|gue|saya)?)/i)) {
    const namaUser = localStorage.getItem("namaUser");
    if (namaUser) {
      responseElement.innerHTML = `Tentu dong! Kamu itu ${namaUser}, orang yang selalu bikin aku senyum 😊`;
    } else {
      responseElement.innerHTML = "Aku belum tau namamu nih... mau kenalan dulu? 😊";
    }
  } else {
    responseElement.innerHTML = [
      'Maaf saya tidak mengerti <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExOW8yZm5vNHR6YmpleWhhNnJsdmt0eDd2aGNmYXk3bHNobTZ5NmJ1ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dDbo9Rqd1O7cs/giphy.gif" style="width:95%;">',
      'maaf pertanyaan mu kurang jelas <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdm1peWtpd2dmeTd3bXgyOWU2NHRmM25qZG1teXB3amYyazl2MmdtMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Ta1EwvqImifsbTh6DT/giphy.gif" style="width:95%;">',
      'Ngomong apaasn sih lu? <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmU3N3BsbWM1bDJ4aThtNmd1NGs4bHBvazdrdmFmZDB5MnRldGI1eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/CF3DTvbzvbNlLMC8qK/giphy.gif" style="width:95%;">',
      'maaf pertanyaan mu kurang jelas <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXhtNnhzeXl0eW0xNXZtanR4b2k3bTJkbjFuNHppdmtkdmRqYzd0NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/odG50lUOUgl5qEz1OT/giphy.gif" style="width:95%;">',

    ][Math.floor(Math.random() * 4)];
  }


  output.appendChild(responseElement);


  output.scrollTop = output.scrollHeight;


  document.getElementById("input").value = "";
}

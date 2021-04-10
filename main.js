const string = `
* {
    margin: 0;
    padding: 0;
}

#demo::-webkit-scrollbar{
display: none;
}
.skin {
height: 100%;
    width: 100%;
    background: #3c9dca;
    position: relative;
}

.face {
    position: absolute;
    width: 310px;
    height: 280px;
    background: #fff;
    border-radius: 100%;
    left: 50%;
    margin-left: -168px;
    bottom: 0;
}
.nose {
    position: absolute;
    border: black solid thin;
    left: 55%;
    bottom: 60%;
    margin-left: -15px;
    transform: translate(-50%, -50%);
    width: 30px;
    height: 30px;
    border-radius: 100%;
    background: #FF0000;
    z-index: 9;
}

.nose::after {
    content: '';
    display: block;
    outline: 1px solid black;
    height: 60px;
    width: 0;
    margin-top: 30px;
    background: black;
    margin-left: 14px;
}

.eye {
    width: 60px;
    height: 90px;
    border: solid thin black;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 30px;
    transform: translate(-50%, -50%);
    background-color: #fff;
    z-index: 10;
}

.eye::before {
    content: '';
    display: block;
    width: 25px;
    height: 36px;
    border: 1px solid;
    background: radial-gradient(
            8px 18px ellipse, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 25%, rgba(255, 255, 255, 1) 50%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 100%);
    border-radius: 50%;
    margin-left: 15px;
    margin-top: 20px;
}
.eye.left {
    transform: translate(-70px, -40px);
}

.eye.right {
    transform: translate(10px, -40px);
}
.beard{
    position: relative;
    width: 120px;
    height: 1px;
    background: black;
    top: 90px;
}
.beard.right {
    left: -50px;
    z-index: 11;
    transform: rotate(5deg);
}

.beard.right::before {
    content: '';
    display: block;
    background: black;
    width: 120px;
    height: 1px;

    position: relative;
    top: -50px;
    left: 15px;
    transform: rotate(18deg);
}
.beard.right::after {
    content: '';
    display: block;
    background: black;
    width: 120px;
    height: 1px;
    z-index: 11;
    left: 15px;
    position: relative;
    top: 50px;
    transform: rotate(-18deg);
}

.beard.left {
    background: black;
    left: 245px;
    transform: rotate(-5deg);
}
.beard.left::before {
    content: '';
    display: block;
    background: black;
    width: 120px;
    height: 1px;
    left: -15px;
    position: relative;
    top: -50px;
    transform: rotate(-18deg);
}
.beard.left::after {
    content: '';
    display: block;
    background: black;
    width: 120px;
    height: 1px;
    z-index: 11;
    left: -15px;
    position: relative;
    top: 50px;
    transform: rotate(18deg);
}


.mouth {
    position: absolute;
    z-index: 7;
    width: 200px;
    height: 100px;
    border: 1px solid black;
    background: black;
    left: 50%;
    margin-left: -115px;
    bottom: 10%;
    border-radius: 20px 20px 150px 150px;

}

.tongue {
    position: absolute;
    width: 128px;
    height: 80px;
    border-radius: 50%;
    background: red;
    left: 50%;
    margin-left: -76px;
    bottom: 12%;
    z-index: 8;
}


`
let n = 1

let id = setInterval(() => {
  n += 1
  if (n > string.length) {
    window.clearInterval(id)
    return
  }
  demo.innerText = string.substr(0, n)
  demo2.innerHTML = string.substr(0, n)
  demo.scrollTop = demo.scrollHeight
}, 0)
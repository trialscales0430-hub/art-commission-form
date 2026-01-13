function createSakura() {
  const sakura = document.createElement("div");
  sakura.classList.add("sakura");
  sakura.style.left = Math.random() * 100 + "vw";
  sakura.style.background = `rgba(255, ${180 + Math.random()*40}, ${200 + Math.random()*40}, 0.9)`;
  sakura.style.animationDuration = 8 + Math.random() * 5 + "s";
  sakura.style.width = sakura.style.height = 10 + Math.random() * 10 + "px";
  sakura.style.position = "fixed";
  sakura.style.top = "-10px";
  sakura.style.borderRadius = "0 50% 50% 50%";
  sakura.style.opacity = 0.8;
  sakura.style.zIndex = 1;
  sakura.style.animation = "fall linear infinite";
  sakura.style.transform = "rotate(45deg)";
  document.body.appendChild(sakura);
  setTimeout(() => sakura.remove(), 13000);
}
setInterval(createSakura, 300);

const style = document.createElement("style");
style.innerHTML = `
@keyframes fall {
  0% { transform: translateY(0) rotate(0deg); opacity: 1; }
  100% { transform: translateY(110vh) rotate(360deg); opacity: 0; }
}
.sakura { animation: fall linear infinite; }
`;
document.head.appendChild(style);

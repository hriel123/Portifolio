const certs = {
  aws: {
    title: 'AWS Academy Graduate — Cloud Foundations Training Badge',
    type: 'pdf',
    pdfUrl: 'https://hriel123.github.io/Portifolio/AWS_Academy_Graduate___Cloud_Foundations___Training_Badge_Badge20260413-31-i1gn51.pdf',
    credly: 'https://www.credly.com/go/xuijwLe0',
    note: 'Emitido em Abril de 2026 · 20 horas · Amazon Web Services Academy'
  },
  huawei: {
    title: 'HCIA-Cloud Service V3.5 — Huawei ICT Academy',
    type: 'pdf',
    pdfUrl: 'https://hriel123.github.io/Portifolio/downloadfile(3).PDF',
    note: 'Emitido em Outubro de 2025 · 60 horas · Código: EBG20251029000002'
  },
  'ifce-cloud': {
    title: 'Computação em Nuvem — Formação Específica',
    type: 'pdf',
    pdfUrl: 'https://hriel123.github.io/Portifolio/8bdc0835-2f22-4447-aac2-e29327ff1fff%20(1).pdf',
    note: 'Emitido em Janeiro de 2026 · 240 horas · IFCE — Capacita Brasil / Residência TIC 20'
  },
  'ifce-interpessoal': {
    title: 'Computação em Nuvem — Trilha Habilidades Interpessoais',
    type: 'pdf',
    pdfUrl: 'https://hriel123.github.io/Portifolio/eab5d41a-59e6-4957-859d-114de908807f%20(1).pdf',
    note: 'Emitido em Outubro de 2025 · 120 horas · IFCE — Capacita Brasil / Residência TIC 20'
  },
  espanhol: {
    title: 'Curso de Língua Espanhola — CCI Cascavel (SEDUC-CE)',
    type: 'pdf',
    pdfUrl: 'https://hriel123.github.io/Portifolio/certificado_espanhol.pdf',
    note: 'Concluído em Julho de 2025 · 180 horas · Centro Cearense de Idiomas'
  },
  quimica: {
    title: 'Monitoria de Química — E.E.E.P. Edson Queiroz',
    type: 'pdf',
    pdfUrl: 'https://hriel123.github.io/Portifolio/certificado_quimica.pdf',
    note: 'Abr – Dez 2024 · 60 horas · E.E.E.P. Edson Queiroz'
  }
};

function openModal(key) {
  const cert = certs[key];
  if (!cert) return;

  document.getElementById('modal-title').textContent = cert.title;
  const body = document.getElementById('modal-body');
  body.innerHTML = '';

  const note = document.createElement('p');
  note.className = 'pdf-note';
  note.style.cssText = 'color:var(--muted);font-size:0.85rem;text-align:center;padding:0.5rem 0';
  note.textContent = cert.note;
  body.appendChild(note);

  if (cert.type === 'pdf' && cert.pdfUrl) {
    const iframe = document.createElement('iframe');
    iframe.src = cert.pdfUrl + '#toolbar=0&navpanes=0';
    iframe.style.cssText = 'width:100%;height:500px;border:none;border-radius:12px;background:#fff';
    iframe.title = cert.title;
    body.appendChild(iframe);
  } else if (cert.type === 'image' && cert.imageUrl) {
    const img = document.createElement('img');
    img.src = cert.imageUrl;
    img.alt = cert.title;
    img.style.cssText = 'width:100%;max-width:550px;border-radius:16px;margin:1rem 0';
    body.appendChild(img);
  }

  if (cert.pdfUrl || cert.credly || cert.imageUrl) {
    let linkHref = cert.pdfUrl || cert.credly || cert.imageUrl;
    let linkText = '📄 Abrir / Baixar';
    
    if (cert.credly && key === 'aws') {
      linkText = '🏅 Ver Badge no Credly';
    } else if (cert.pdfUrl) {
      linkText = '📄 Abrir PDF em nova aba';
    } else if (cert.imageUrl) {
      linkText = '🖼️ Abrir imagem em nova aba';
    }
    
    const a = document.createElement('a');
    a.href = linkHref;
    a.target = '_blank';
    a.rel = 'noopener';
    a.className = 'btn btn-outline';
    a.textContent = linkText;
    a.style.cssText = 'margin-top:0.5rem;font-size:0.85rem';
    body.appendChild(a);
  }

  document.getElementById('modal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal').classList.remove('active');
  document.body.style.overflow = '';
}

function handleOverlayClick(e) {
  if (e.target === document.getElementById('modal')) closeModal();
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

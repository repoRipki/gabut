const $ = s => document.querySelector(s);
const intro = $('#intro'), nameScreen = $('#nameScreen'), survey = $('#survey'), done = $('#done');
let current = 1, q3 = '';
const STORAGE_KEY = 'ripki_archive_responses_v1';
function goName(){ intro.classList.add('hidden'); nameScreen.classList.remove('hidden'); }
$('#continue1').onclick = goName; $('#continue2').onclick = goName;
$('#fakeBtn').onclick = () => { const m=$('#fakeMsg'); m.textContent='FILE TIDAK DITEMUKAN.'; setTimeout(()=>m.textContent='signal kembali...',900); };
$('#startBtn').onclick = () => { if(!$('#name').value.trim()){ $('#nameError').textContent='nama belum diisi.'; return; } nameScreen.classList.add('hidden'); survey.classList.remove('hidden'); };
const questions=[...document.querySelectorAll('.question')];
function showQuestion(n){ questions.forEach(q=>q.classList.toggle('active',Number(q.dataset.q)===n)); $('#counter').textContent=String(n).padStart(2,'0')+'/05'; current=n; }
document.querySelectorAll('.option').forEach(btn=>btn.onclick=()=>{ document.querySelectorAll('.option').forEach(x=>x.classList.remove('selected')); btn.classList.add('selected'); q3=btn.dataset.value; $('#choiceText').textContent='tercatat: '+btn.textContent; });
document.querySelectorAll('.next').forEach(btn=>btn.onclick=()=>{ const n=Number(btn.closest('.question').dataset.q); if(n===3&&!q3)return alert('pilih salah satu dulu.'); const field=$('#q'+n); if(field&&!field.value.trim())return alert('jawab dulu sebelum lanjut.'); showQuestion(n+1); });
$('#submitBtn').onclick=()=>{
 if(!$('#q5').value.trim()) return alert('jawab dulu sebelum dikirim.');
 const payload={id:crypto.randomUUID?crypto.randomUUID():String(Date.now()),name:$('#name').value.trim(),q1:$('#q1').value.trim(),q2:$('#q2').value.trim(),q3,q4:$('#q4').value.trim(),q5:$('#q5').value.trim(),created_at:new Date().toLocaleString('id-ID')};
 try { const rows=JSON.parse(localStorage.getItem(STORAGE_KEY)||'[]'); rows.push(payload); localStorage.setItem(STORAGE_KEY,JSON.stringify(rows)); survey.classList.add('hidden'); done.classList.remove('hidden'); }
 catch(e){ $('#submitStatus').textContent='Gagal menyimpan. Penyimpanan browser mungkin penuh atau dinonaktifkan.'; }
};

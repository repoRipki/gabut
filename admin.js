const STORAGE_KEY='ripki_archive_responses_v1';
// PIN ini hanya pengunci tampilan, BUKAN keamanan sungguhan pada website publik.
const ADMIN_PIN='ripki07';
const $=s=>document.querySelector(s);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
function getRows(){try{return JSON.parse(localStorage.getItem(STORAGE_KEY)||'[]')}catch{return []}}
function render(){const rows=getRows().slice().reverse(); const correct=rows.filter(x=>x.q3==='doodle'||x.q3==='manekin').length; $('#stats').innerHTML=`<b>${rows.length}</b> respons &nbsp; | &nbsp; Q3 benar: <b>${correct}</b> &nbsp; | &nbsp; Q3 salah: <b>${rows.length-correct}</b>`;
 $('#list').innerHTML=rows.length?rows.map((x,i)=>`<article class="response"><div class="response-head">#${rows.length-i} — <b>${esc(x.name)}</b> — ${esc(x.created_at)}</div><p><b>1.</b> ${esc(x.q1)}</p><p><b>2.</b> ${esc(x.q2)}</p><p><b>3.</b> ${esc(x.q3)} — <span class="${x.q3==='doodle'||x.q3==='manekin'?'ok':'bad'}">${x.q3==='doodle'||x.q3==='manekin'?'BENAR':'SALAH'}</span></p><p><b>4.</b> ${esc(x.q4)}</p><p><b>5.</b> ${esc(x.q5)}</p></article>`).join(''):'<p class="tiny">Belum ada respons di browser ini.</p>'; }
$('#load').onclick=()=>{if($('#key').value!==ADMIN_PIN){$('#err').textContent='PIN admin salah.';return;} $('#err').textContent='';$('#dashboard').classList.remove('hidden');render();};
$('#export').onclick=()=>{const blob=new Blob([JSON.stringify(getRows(),null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='ripki-archive-backup.json';a.click();URL.revokeObjectURL(a.href);};
$('#clear').onclick=()=>{if(!confirm('Hapus semua respons dari browser ini? Tindakan ini tidak bisa dibatalkan.'))return;localStorage.removeItem(STORAGE_KEY);render();};

// === Mission Data ===
const missionData = {
    'm1': { name: "Basic Training", drops: { money: 2000, matChance: 0.3 } },
    'm2': { name: "Gold Rush", drops: { money: 10000, matChance: 0 } },
    'm3': { name: "Material Depot", drops: { money: 1000, matChance: 1.0, maxMat: 3 } },
    'm4': { name: "Antimatter Zone", drops: { money: 5000, matChance: 0.8, rareMat: true } },
    'm5': { name: "Event Horizon", drops: { money: 50000, matChance: 1.0, maxMat: 5, rareMat: true } }
};

// === Particles Data ===
const particles = [
    { id: 1, name: "Proton", symbol: "p", rarity: "common", image: "images/proton.png", desc: "陽子。ラボの主人公。", skill:"Proton Beam", type:"atk" },
    { id: 2, name: "Neutron", symbol: "n", rarity: "common", image: "images/neutron.png", desc: "中性子。冷静沈着。", skill:"Neutron Shield", type:"def" },
    { id: 3, name: "Pion (+)", symbol: "π⁺", rarity: "common", image: "images/pion.png", desc: "パイ中間子。", skill:"Yukawa Force", type:"spd" },
    { id: 4, name: "Kaon (+)", symbol: "K⁺", rarity: "rare", image: "images/kaon.png", desc: "K中間子。", skill:"Strange Hit", type:"atk" },
    { id: 5, name: "Lambda", symbol: "Λ", rarity: "rare", image: "images/lambda.png", desc: "ラムダ粒子。", skill:"Hyper Guard", type:"def" },
    { id: 6, name: "Sigma (-)", symbol: "Σ⁻", rarity: "rare", image: "images/sigma.png", desc: "シグマ粒子。", skill:"Isospin Slash", type:"atk" },
    { id: 7, name: "Xi (-)", symbol: "Ξ⁻", rarity: "holo", image: "images/xi.png", desc: "グザイ粒子。", skill:"Cascade Fall", type:"atk" },
    { id: 8, name: "H-Dibaryon", symbol: "H", rarity: "holo", image: "images/h_dibaryon.png", desc: "Hダイバリオン。", skill:"Hexa-Quark", type:"def" },
    { id: 9, name: "Delta (++)", symbol: "Δ⁺⁺", rarity: "common", image: "images/delta.png", desc: "デルタ粒子。", skill:"Resonance", type:"spd" },
    { id: 10, name: "Omega (-)", symbol: "Ω⁻", rarity: "holo", image: "images/omega.png", desc: "オメガ粒子。", skill:"Strangeness 3", type:"ult" },
    { id: 11, name: "D Meson", symbol: "D⁰", rarity: "rare", image: "images/d-meson.png", desc: "D中間子。", skill:"Charm Speed", type:"spd" },
    { id: 12, name: "J/psi", symbol: "J/ψ", rarity: "holo", image: "images/j-psi.png", desc: "J/ψ粒子。", skill:"Charmonium", type:"atk" },
    { id: 13, name: "Top Quark", symbol: "t", rarity: "ultra", image: "images/top-quark.png", desc: "トップクォーク。", skill:"Truth Smasher", type:"ult" },
    { id: 14, name: "Higgs Boson", symbol: "H⁰", rarity: "ultra", image: "images/higgs.png", desc: "ヒッグス粒子。", skill:"God Field", type:"ult" },
    { id: 15, name: "Photon", symbol: "γ", rarity: "common", image: "images/Photon.png", desc: "光子。", skill:"Optical Flash", type:"spd" },
    { id: 16, name: "Gluon", symbol: "g", rarity: "rare", image: "images/Gluon.png", desc: "グルーオン。", skill:"Strong Bond", type:"def" },
    { id: 17, name: "Charm Quark", symbol: "c", rarity: "holo", image: "images/Charm_Quark.png", desc: "チャームクォーク。", skill:"Lovely Charm", type:"atk" },
    { id: 18, name: "Neutrino", symbol: "ν", rarity: "rare", image: "images/Neutrino.png", desc: "ニュートリノ。", skill:"Ghost Pass", type:"spd" },
    { id: 19, name: "Anti-Proton", symbol: "p̄", rarity: "ultra", image: "images/Anti-Proton.png", desc: "反陽子。", skill:"Annihilation", type:"ult" },
    { id: 20, name: "Positron", symbol: "e⁺", rarity: "rare", image: "images/Positron.png", desc: "陽電子。", skill:"Mirror Dash", type:"spd" },
    { id: 21, name: "W Boson", symbol: "W", rarity: "holo", image: "images/W_Boson.png", desc: "Wボソン。", skill:"Beta Decay", type:"atk" },
    { id: 22, name: "Z Boson", symbol: "Z", rarity: "holo", image: "images/Z_Boson.png", desc: "Zボソン。", skill:"Neutral Heavy", type:"def" },
    { id: 23, name: "Tachyon", symbol: "T", rarity: "ultra", image: "images/Tachyon.png", desc: "タキオン。", skill:"Time Travel", type:"spd" },
    { 
        id: 24, name: "Graviton", symbol: "G", rarity: "genesis", image: "images/Graviton.png", desc: "【創世級】重力子。", skill:"Event Horizon", type:"ult",
        skins: [ { id: 'default', name: 'Default', image: 'images/Graviton.png' }, { id: 'china', name: 'China Dress', image: 'images/Graviton_China.png' }, { id: 'pajama', name: 'Pajama', image: 'images/Graviton_Pajama.png' } ]
    }
];

const materials = [
    { id: 'm1', name: 'Dry Ice', cost: 500 }, { id: 'm2', name: 'Alcohol', cost: 300 },
    { id: 'm3', name: 'PMT', cost: 5000 }, { id: 'm4', name: 'Scintillator', cost: 3000 },
    { id: 'm5', name: 'Fiber', cost: 2000 }, { id: 'm6', name: 'MPPC', cost: 8000 },
    { id: 'm7', name: 'Gold Wire', cost: 4000 }, { id: 'm8', name: 'PCB', cost: 1500 }, { id: 'm9', name: 'Liq. Helium', cost: 12000 }
];
const lootTable = ['m1','m2','m3','m4','m5','m6','m7','m8','m9'];
const matNames = { m1:"Dry Ice", m2:"Alcohol", m3:"PMT", m4:"Scintillator", m5:"Fiber", m6:"MPPC", m7:"Gold Wire", m8:"PCB", m9:"Liq. Helium" };

const detectors = [
    { id: 'd0', name: 'Geiger Counter', power: 1, req: {} },
    { id: 'd1', name: 'Cloud Chamber', power: 2, req: {m1:1, m2:1} },
    { id: 'd2', name: 'Spark Chamber', power: 5, req: {m7:1, m2:1} },
    { id: 'd3', name: 'Scinti Counter', power: 8, req: {m3:1, m4:1} },
    { id: 'd4', name: 'Wire Chamber', power: 12, req: {m7:2, m8:1} },
    { id: 'd5', name: 'Cherenkov Det', power: 18, req: {m3:2, m1:2} },
    { id: 'd6', name: 'EM Calorimeter', power: 25, req: {m4:3, m3:2} },
    { id: 'd7', name: 'Hadron Cal', power: 30, req: {m4:5, m3:3} },
    { id: 'd8', name: 'Fiber Tracker', power: 45, req: {m6:5, m5:5} },
    { id: 'd9', name: 'TPC', power: 60, req: {m7:5, m8:2} },
    { id: 'd10', name: 'Silicon Vertex', power: 80, req: {m6:10, m8:1} },
    { id: 'd11', name: 'Belle II', power: 120, req: {m6:5, m7:5, m3:5} },
    { id: 'd12', name: 'Super-K', power: 200, req: {m3:20} }
];

const beams = [{id:'b1',name:'Cosmic',cost:0,power:1}, {id:'b2',name:'RI',cost:5000,power:3}];
const targets = [{id:'t1',name:'Air',cost:0,power:1}, {id:'t2',name:'Gold',cost:10000,power:2}];

let user = { money: 10000, invMat: {}, invDet: [], invPart: {1:1}, deck: [1, null, null, null, null], equippedSkins: {} };
let currentMission = null;
let currentSlotIndex = 0;

window.onload = function() {
    try { loadGame(); refreshUI(); renderDeckHome(); renderDeckEdit(); initProposalForm(); }
    catch(e) { console.error("Init Error:", e); }
};

// === ★NEW: Fame Logic with Rarity Slope ===
function getFameParams(rarity) {
    // レアリティごとの「必要数」と「ボーナス上昇率」の定義
    switch(rarity) {
        case 'genesis': return { req: 5, bonus: 0.10 };    // 5体で+10%
        case 'ultra':   return { req: 10, bonus: 0.10 };   // 10体で+10%
        case 'holo':    return { req: 40, bonus: 0.10 };   // 40体で+10%
        case 'rare':    return { req: 100, bonus: 0.08 };  // 100体で+8%
        default:        return { req: 1000, bonus: 0.05 }; // 1000体で+5% (Common)
    }
}

function getFameInfo(pid) {
    const p = particles.find(x => x.id === pid);
    if(!p) return { lv: 0, bonus: 0, next: 0, req: 0 };
    
    const count = user.invPart[pid] || 0;
    const params = getFameParams(p.rarity);
    const lv = Math.floor(count / params.req);
    
    return {
        lv: lv,
        bonus: lv * params.bonus, // 割合 (0.1 = 10%)
        next: params.req - (count % params.req),
        req: params.req,
        bonusPerLv: params.bonus
    };
}

function getImgSrc(p) {
    if(user.equippedSkins && user.equippedSkins[p.id] && p.skins) {
        const s = p.skins.find(sk => sk.id === user.equippedSkins[p.id]);
        if(s) return s.image;
    }
    return p.image;
}

// --- View Logic ---
function showHome() { document.querySelectorAll('.main-view').forEach(el=>el.classList.remove('active')); document.getElementById('view-home').classList.add('active'); }
function showView(id) { document.querySelectorAll('.main-view').forEach(el=>el.classList.remove('active')); document.getElementById(id).classList.add('active'); }
function refreshUI() {
    document.getElementById('disp-money').innerText = user.money.toLocaleString();
    renderShop(); renderCraft(); renderOffice();
}
function startBattle(missionId) { location.href = `battle.html?mission=${missionId}`; }

function renderDeckHome() {
    const el = document.getElementById('home-deck-display'); if(!el) return; el.innerHTML = '';
    user.deck.forEach((pid, index) => {
        if(pid) {
            const p = particles.find(x => x.id === pid);
            if(p) {
                const img = document.createElement('img'); img.src = getImgSrc(p);
                img.className = 'deck-member' + (index === 0 ? ' flagship' : ''); img.style.zIndex = 50 - index; 
                img.onclick = () => showCharDetail(p.id); el.appendChild(img);
            }
        }
    });
}

function renderDeckEdit() {
    const el = document.getElementById('deck-slots-container'); if(!el) return; el.innerHTML = '';
    for(let i=0; i<5; i++) {
        const pid = user.deck[i]; const p = pid ? particles.find(x => x.id === pid) : null;
        let content = `<div style="font-size:2rem; color:#555;">+</div><div style="color:#aaa;">EMPTY</div>`;
        if(p) {
            const info = getFameInfo(p.id);
            const star = info.lv > 0 ? `<div class="fame-badge">★<span>${info.lv}</span></div>` : '';
            content = `
                ${star}
                <img src="${getImgSrc(p)}" onclick="showCharDetail(${p.id}, event)">
                <div class="slot-label ${'rarity-'+p.rarity}">${p.name}</div>
                <div class="slot-remove" onclick="removeMember(${i}, event)">×</div>
            `;
        }
        const div = document.createElement('div'); div.className = 'slot-card'; div.innerHTML = content;
        div.onclick = (e) => { if(e.target.tagName !== 'IMG' && !e.target.classList.contains('slot-remove')) openSelectModal(i); };
        el.appendChild(div);
    }
}

// ★ Updated: Show Detailed Fame Info
function showCharDetail(pid, e) {
    if(e) e.stopPropagation(); const p = particles.find(x => x.id === pid); if(!p) return;
    
    const info = getFameInfo(pid);
    const count = user.invPart[pid] || 0;
    
    let fameHtml = "";
    if(info.lv > 0) {
        fameHtml = `<div style="margin-bottom:10px; padding:5px; background:rgba(255, 215, 0, 0.2); border:1px solid gold; border-radius:5px; color:#ffd700; text-align:center;">
            ★ FAME Lv.${info.lv} (Stats +${Math.round(info.bonus * 100)}%)<br>
            <span style="font-size:0.7rem; color:#aaa;">Next Lv: ${info.next} more (${info.req} per Lv)</span>
        </div>`;
    } else {
        fameHtml = `<div style="margin-bottom:10px; font-size:0.8rem; color:#555; text-align:center;">
            Current: ${count} / Next Lv: ${info.next} needed<br>(Need ${info.req} for +${Math.round(info.bonusPerLv*100)}%)
        </div>`;
    }

    let skinBtns = "";
    if(p.skins) {
        skinBtns = `<div style="margin-top:20px; border-top:1px solid #444; padding-top:10px;"><div style="font-size:0.8rem; color:#aaa; margin-bottom:5px;">COSTUME CHANGE</div><div class="skin-btn-container">`;
        const currentSkin = (user.equippedSkins && user.equippedSkins[pid]) || 'default';
        p.skins.forEach(s => { skinBtns += `<div class="skin-btn ${s.id===currentSkin?'active':''}" onclick="changeSkin(${pid}, '${s.id}')">${s.name}</div>`; });
        skinBtns += `</div></div>`;
    }
    const html = `<div class="detail-img-box"><img src="${getImgSrc(p)}" id="detail-img-preview"><div style="margin-top:10px; font-weight:bold; font-family:'Orbitron'" class="rarity-${p.rarity}">${p.rarity.toUpperCase()}</div></div><div class="detail-info"><div style="color:#aaa; font-size:0.9rem;">No.${p.id}</div><h1 style="margin:5px 0;">${p.name} <span style="font-size:1.2rem; color:#888;">(${p.symbol})</span></h1>${fameHtml}<div class="detail-type">TYPE: ${p.type.toUpperCase()}</div><div class="detail-skill-box"><div style="color:var(--hc-orange); font-weight:bold; font-family:'Orbitron'">SKILL: ${p.skill}</div></div><div style="margin-top:20px; line-height:1.6; color:#ddd;">${p.desc}</div>${skinBtns}</div>`;
    document.getElementById('detail-content').innerHTML = html; document.getElementById('detail-modal').style.display = 'flex';
}

function changeSkin(pid, skinId) {
    if(!user.equippedSkins) user.equippedSkins = {}; user.equippedSkins[pid] = skinId; saveGame();
    const p = particles.find(x => x.id === pid);
    if(p) {
        document.getElementById('detail-img-preview').src = getImgSrc(p);
        const btns = document.querySelectorAll('.skin-btn');
        btns.forEach(b => { if(b.innerText === p.skins.find(s=>s.id===skinId).name) b.classList.add('active'); else b.classList.remove('active'); });
    }
    renderDeckHome(); renderDeckEdit();
}
function removeMember(index, e) { e.stopPropagation(); user.deck[index] = null; renderDeckEdit(); renderDeckHome(); saveGame(); }

function openSelectModal(slotIndex) {
    currentSlotIndex = slotIndex; const list = document.getElementById('select-list'); list.innerHTML = ''; let hasAny = false;
    Object.keys(user.invPart).forEach(pidStr => {
        const pid = parseInt(pidStr);
        if(user.invPart[pid] > 0) {
            hasAny = true; const p = particles.find(x => x.id === pid);
            if(p) {
                const info = getFameInfo(p.id);
                const star = info.lv > 0 ? `<div class="fame-badge" style="font-size:1rem;">★${info.lv}</div>` : '';
                const div = document.createElement('div'); 
                div.className = `item-card card-${p.rarity}`;
                div.innerHTML = `
                    ${star}
                    <div class="rarity-label label-${p.rarity}">${p.rarity.toUpperCase()}</div>
                    <img src="${getImgSrc(p)}" style="width:70px; margin-bottom:5px;">
                    <div class="rarity-${p.rarity}" style="font-size:0.9rem;">${p.name}</div>
                    <div style="font-size:0.7rem; color:#888;">所持: ${user.invPart[pid]}</div>
                `;
                div.onclick = () => { user.deck[currentSlotIndex] = pid; closeModal('select-modal'); renderDeckEdit(); renderDeckHome(); saveGame(); };
                list.appendChild(div);
            }
        }
    });
    if(!hasAny) list.innerHTML = '<p>所持している粒子がありません。</p>'; document.getElementById('select-modal').style.display = 'flex';
}
function closeModal(id) { document.getElementById(id).style.display = 'none'; }
function saveDeck() { saveGame(); alert("編成を保存しました！"); }

function initProposalForm() {
    const b = document.getElementById('sel-beam'), t = document.getElementById('sel-target'), d = document.getElementById('sel-detector');
    if(b) b.innerHTML = beams.map(x=>`<option value="${x.id}">${x.name} ¥${x.cost}</option>`).join('');
    if(t) t.innerHTML = targets.map(x=>`<option value="${x.id}">${x.name} ¥${x.cost}</option>`).join('');
    if(d) {
        if(!user.invDet || user.invDet.length === 0) d.innerHTML = '<option value="">(No Detector)</option>';
        else d.innerHTML = user.invDet.map(id => { const det = detectors.find(x=>x.id==id); return det?`<option value="${id}">${det.name} (Pwr:${det.power})</option>`:''; }).join('');
    }
    calcProposalCost();
}
function calcProposalCost(){
    const b = beams.find(x=>x.id==document.getElementById('sel-beam').value);
    const t = targets.find(x=>x.id==document.getElementById('sel-target').value);
    document.getElementById('prop-cost').innerText = ((b?b.cost:0)+(t?t.cost:0)).toLocaleString();
}
function runExperiment(times = 1){
    const bVal=document.getElementById('sel-beam').value, tVal=document.getElementById('sel-target').value, dVal=document.getElementById('sel-detector').value;
    if(!dVal){alert("検出器が必要です");return;}
    const b=beams.find(x=>x.id==bVal), t=targets.find(x=>x.id==tVal);
    const totalCost = (b.cost + t.cost) * times;
    if(user.money < totalCost){alert("資金不足");return;}
    user.money -= totalCost;

    const det = detectors.find(x => x.id == dVal);
    const power = b.power * t.power * (det ? det.power : 1);
    
    let results = [];
    for(let i=0; i<times; i++) {
        const rand=Math.random()*100; let tr="common";
        if(power > 100) { if(rand<2) tr="genesis"; else if(rand<10) tr="ultra"; else if(rand<30) tr="holo"; else if(rand<60) tr="rare"; }
        else if(power > 50) { if(rand<1) tr="genesis"; else if(rand<6) tr="ultra"; else if(rand<20) tr="holo"; else if(rand<50) tr="rare"; }
        else if(power > 10) { if(rand<0.5) tr="genesis"; else if(rand<3) tr="ultra"; else if(rand<15) tr="holo"; else if(rand<40) tr="rare"; }
        
        let c=particles.filter(p=>p.rarity===tr); if(c.length===0) c=particles.filter(p=>p.rarity==="common");
        const p = c[Math.floor(Math.random()*c.length)];
        user.invPart[p.id] = (user.invPart[p.id]||0)+1; results.push(p);
    }
    saveGame(); refreshUI();
    
    const resEl = document.getElementById('exp-result-content');
    if(times === 1) { const p = results[0]; resEl.innerHTML = `<img src="${getImgSrc(p)}" style="width:100px"><br><h3 class="rarity-${p.rarity}">GET: ${p.name}</h3><p>${p.desc}</p>`; }
    else {
        let html = '<div class="gacha-grid">'; results.forEach(p => { html += `<div class="gacha-item"><img src="${getImgSrc(p)}"><div class="rarity-${p.rarity}" style="font-size:0.7rem;">${p.name}</div></div>`; }); html += '</div>'; resEl.innerHTML = html;
    }
    document.getElementById('result-modal').style.display='block';
}

function renderShop(){
    const el=document.getElementById('shop-list'); if(!el)return; el.innerHTML='';
    materials.forEach(m=>{ el.innerHTML+=`<div class="item-card" onclick="buy('${m.id}')"><div>${m.name}</div><div style="color:var(--hc-green)">¥${m.cost}</div><div style="font-size:0.8rem">持: ${user.invMat?user.invMat[m.id]||0:0}</div></div>`; });
}
function buy(id){
    const m=materials.find(x=>x.id==id); if(user.money>=m.cost){ user.money-=m.cost; user.invMat[id]=(user.invMat[id]||0)+1; saveGame(); refreshUI(); } else alert("資金不足");
}
function renderCraft(){
    const el=document.getElementById('craft-list'); if(!el)return; el.innerHTML='';
    detectors.forEach(d=>{
        const own=user.invDet.includes(d.id);
        let reqHtml = ''; let canCraft = true;
        if(Object.keys(d.req).length === 0) reqHtml = "FREE (Starter)";
        else {
            Object.keys(d.req).forEach(mid => {
                const m = materials.find(x=>x.id==mid);
                const need = d.req[mid]; const have = user.invMat[mid]||0;
                if(have < need) canCraft = false;
                reqHtml += `<div>${m.name}: ${have}/${need}</div>`;
            });
        }
        const btnState = (own || !canCraft) ? 'disabled' : ''; const btnText = own ? 'OWNED' : 'CRAFT';
        el.innerHTML += `<div class="craft-card ${own?'owned':''}"><div style="font-weight:bold; color:var(--hc-orange)">${d.name} <span style="font-size:0.8rem; color:#aaa;">(Pw:${d.power})</span></div><div class="craft-req">${reqHtml}</div><button class="craft-btn" ${btnState} onclick="craft('${d.id}')">${btnText}</button></div>`;
    });
}
function craft(id){
    if(user.invDet.includes(id)) return;
    const d = detectors.find(x=>x.id==id);
    if(Object.keys(d.req).length > 0) {
        let ok = true; Object.keys(d.req).forEach(mid => { if((user.invMat[mid]||0) < d.req[mid]) ok=false; }); if(!ok) return;
        Object.keys(d.req).forEach(mid => { user.invMat[mid] -= d.req[mid]; });
    }
    user.invDet.push(id); saveGame(); refreshUI(); initProposalForm();
}

function renderOffice(){
    const el=document.getElementById('particle-stock-list'); if(!el)return; el.innerHTML='';
    Object.keys(user.invPart).forEach(pidStr=>{
        const pid=parseInt(pidStr); if(user.invPart[pid]>0){
            const p=particles.find(x=>x.id==pid); if(p){
                let pr=1000; if(p.rarity=="rare")pr=3000; if(p.rarity=="holo")pr=10000; if(p.rarity=="ultra")pr=50000; if(p.rarity=="genesis")pr=1000000; 
                el.innerHTML+=`<div class="item-card card-${p.rarity}" onclick="sell(${pid},${pr})"><div class="rarity-label label-${p.rarity}">${p.rarity.toUpperCase()}</div><div class="rarity-${p.rarity}">${p.name}</div><div style="font-size:0.8rem">x${user.invPart[pid]}</div><div style="font-size:0.7rem; color:#aaa; margin-top:5px;">SELL: ¥${pr}</div></div>`;
            }
        }
    });
}
function sell(pid,pr){ if(user.invPart[pid]>0){ user.invPart[pid]--; user.money+=pr; saveGame(); refreshUI(); } }
function loadGame(){
    const d=localStorage.getItem('hadron_v8'); if(d){ try{user=JSON.parse(d);}catch(e){user={};} }
    if(typeof user.money==='undefined')user.money=10000; 
    if(!user.invMat)user.invMat={}; 
    if(!user.invDet) user.invDet=['d0']; 
    if(user.invDet.length === 0) user.invDet=['d0'];
    if(!user.invPart)user.invPart={1:1}; if(!user.deck)user.deck=[1,null,null,null,null];
    if(!user.equippedSkins) user.equippedSkins = {};
}
function saveGame(){ localStorage.setItem('hadron_v8',JSON.stringify(user)); }

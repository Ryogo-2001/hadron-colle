// ==========================================
//  Hadron Lab Core Script (Ver 22.10 Deck Update)
// ==========================================

console.log("Hadron Lab Script Loading...");

// === Mission Data ===
const missionData = {
    'm1': { name: "Basic Training", enemy: "Nucleus", symbol: "N", hpMult: 1, atkMult: 1, color: "#e74c3c", drops: { money: 2000, matChance: 0.3 } },
    'm2': { name: "Gold Rush", enemy: "Gold Chunk", symbol: "Au", hpMult: 2, atkMult: 0.5, color: "#f1c40f", drops: { money: 10000, matChance: 0 } },
    'm3': { name: "Material Depot", enemy: "Carbon", symbol: "C", hpMult: 1.5, atkMult: 1, color: "#2ecc71", drops: { money: 1000, matChance: 1.0, maxMat: 3 } },
    'm4': { name: "Antimatter Zone", enemy: "Anti-H", symbol: "H̄", hpMult: 3, atkMult: 2, color: "#9b59b6", drops: { money: 5000, matChance: 0.8, rareMat: true } },
    'm5': { name: "Event Horizon", enemy: "Singularity", symbol: "⚫", hpMult: 10, atkMult: 5, color: "#fff", drops: { money: 50000, matChance: 1.0, maxMat: 5, rareMat: true } },
    'm6': { name: "Void Rift", enemy: "Dark Energy", symbol: "DE", hpMult: 4, atkMult: 3, color: "#2c3e50", drops: { money: 3000, bp: 100, matChance: 0.5 } },
    'm7': { name: "Chaos Dimension", enemy: "Chaos", symbol: "🌀", hpMult: 15, atkMult: 8, color: "#c0392b", drops: { money: 20000, bp: 500, matChance: 1.0, rareMat: true } },
    'm8': { name: "The Void Dungeon (Deep Abyss)", enemy: "Void Core", symbol: "🕳️", hpMult: 30, atkMult: 15, color: "#000", drops: { money: 50000, bp: 2000, matChance: 1.0, maxMat: 10, rareMat: true } },
    'm_event': { name: "Dark Energy Invasion", enemy: "Dark Energy", symbol: "DE", hpMult: 10, atkMult: 5, color: "#8e44ad", enemyImage: "images/dark_energy.png", drops: { money: 10000, ep: 100, matChance: 0.5 } },
    'm_event_trio': { name: "Quark Trio Assault", enemy: "Quark Sisters", symbol: "Q3", hpMult: 50, atkMult: 20, color: "#e67e22", enemyImages: ["images/up.png", "images/down.png", "images/strange.png"], gimmick: 'debuff_storm', drops: { money: 100000, ep: 500, matChance: 1.0, rareMat: true } }
};

// === Skill Data ===
const skills = [
    { id: 's1', name: 'Efficient Funding', icon: '💰', cost: 100, desc: '売却時の獲得資金 +10%', type: 'sell_bonus', val: 0.1, req: null },
    { id: 's2', name: 'Beam Tuning', icon: '⚡', cost: 200, desc: '実験(ガチャ)コスト -10%', type: 'cost_cut', val: 0.1, req: 's1' },
    { id: 's3', name: 'Data Mining', icon: '💾', cost: 300, desc: '売却時の獲得RP +20%', type: 'rp_bonus', val: 0.2, req: 's1' },
    { id: 's4', name: 'Battle Tactics', icon: '⚔️', cost: 500, desc: '艦隊の攻撃力 +10%', type: 'atk_up', val: 0.1, req: 's2' },
    { id: 's5', name: 'High Sensitivity', icon: '📡', cost: 1000, desc: 'レア粒子の排出率が少し上昇', type: 'luck_up', val: 1.2, req: 's2' },
    { id: 's6', name: 'Government Grant', icon: '🏛', cost: 1500, desc: 'ミッションクリア報酬 +20%', type: 'mission_bonus', val: 0.2, req: 's4' },
    { id: 's7', name: 'Nanotech Repair', icon: '🩹', cost: 2000, desc: 'バトル中の自動回復量UP', type: 'regen_up', val: 0.5, req: 's4' },
    { id: 's8', name: 'Grand Unified Theory', icon: '🌌', cost: 5000, desc: '全ステータス +20%', type: 'all_up', val: 0.2, req: 's5' }
];

// === Particles Data ===
const particles = [
    { id: 1, name: "Proton", symbol: "p", rarity: "common", image: "images/proton.png", desc: "陽子。ラボの主人公。", skill: "Proton Beam", type: "atk" },
    { id: 2, name: "Neutron", symbol: "n", rarity: "common", image: "images/neutron.png", desc: "中性子。冷静沈着。", skill: "Neutron Shield", type: "def" },
    { id: 3, name: "Pion (+)", symbol: "π⁺", rarity: "common", image: "images/pion.png", desc: "パイ中間子。", skill: "Yukawa Force", type: "spd" },
    { id: 4, name: "Kaon (+)", symbol: "K⁺", rarity: "rare", image: "images/kaon.png", desc: "K中間子。", skill: "Strange Hit", type: "atk" },
    { id: 5, name: "Lambda", symbol: "Λ", rarity: "rare", image: "images/lambda.png", desc: "ラムダ粒子。", skill: "Hyper Guard", type: "def" },
    { id: 6, name: "Sigma (-)", symbol: "Σ⁻", rarity: "rare", image: "images/sigma.png", desc: "シグマ粒子。", skill: "Isospin Slash", type: "atk" },
    { id: 7, name: "Xi (-)", symbol: "Ξ⁻", rarity: "holo", image: "images/xi.png", desc: "グザイ粒子。", skill: "Cascade Fall", type: "atk" },
    { id: 8, name: "H-Dibaryon", symbol: "H", rarity: "holo", image: "images/h_dibaryon.png", desc: "Hダイバリオン。", skill: "Hexa-Quark", type: "def" },
    { id: 9, name: "Delta (++)", symbol: "Δ⁺⁺", rarity: "common", image: "images/delta.png", desc: "デルタ粒子。", skill: "Resonance", type: "spd" },
    { id: 10, name: "Omega (-)", symbol: "Ω⁻", rarity: "holo", image: "images/omega.png", desc: "オメガ粒子。", skill: "Strangeness 3", type: "ult" },
    { id: 11, name: "D Meson", symbol: "D⁰", rarity: "rare", image: "images/d-meson.png", desc: "D中間子。", skill: "Charm Speed", type: "spd" },
    { id: 12, name: "J/psi", symbol: "J/ψ", rarity: "holo", image: "images/j-psi.png", desc: "J/ψ粒子。", skill: "Charmonium", type: "atk", skins: [{ id: 'default', name: 'Default', image: 'images/j-psi.png' }, { id: 'china', name: 'China Dress', image: 'images/j-psi_China.png' }, { id: 'pajama', name: 'Pajama', image: 'images/j-psi_Pajama.png' }] },
    { id: 13, name: "Top Quark", symbol: "t", rarity: "ultra", image: "images/top-quark.png", desc: "トップクォーク。", skill: "Truth Smasher", type: "ult" },
    { id: 14, name: "Higgs Boson", symbol: "H⁰", rarity: "ultra", image: "images/higgs.png", desc: "ヒッグス粒子。", skill: "God Field", type: "ult" },
    { id: 15, name: "Photon", symbol: "γ", rarity: "common", image: "images/Photon.png", desc: "光子。", skill: "Optical Flash", type: "spd" },
    { id: 16, name: "Gluon", symbol: "g", rarity: "rare", image: "images/Gluon.png", desc: "グルーオン。", skill: "Strong Bond", type: "def" },
    { id: 17, name: "Charm Quark", symbol: "c", rarity: "holo", image: "images/Charm_Quark.png", desc: "チャームクォーク。", skill: "Lovely Charm", type: "atk" },
    { id: 18, name: "Neutrino", symbol: "ν", rarity: "rare", image: "images/Neutrino.png", desc: "ニュートリノ。", skill: "Ghost Pass", type: "spd" },
    { id: 19, name: "Anti-Proton", symbol: "p̄", rarity: "ultra", image: "images/Anti-Proton.png", desc: "反陽子。", skill: "Annihilation", type: "ult" },
    { id: 20, name: "Positron", symbol: "e⁺", rarity: "rare", image: "images/Positron.png", desc: "陽電子。", skill: "Mirror Dash", type: "spd" },
    { id: 21, name: "W Boson", symbol: "W", rarity: "holo", image: "images/W_Boson.png", desc: "Wボソン。", skill: "Beta Decay", type: "atk" },
    { id: 22, name: "Z Boson", symbol: "Z", rarity: "holo", image: "images/Z_Boson.png", desc: "Zボソン。", skill: "Neutral Heavy", type: "def" },
    { id: 23, name: "Tachyon", symbol: "T", rarity: "ultra", image: "images/Tachyon.png", desc: "タキオン。", skill: "Time Travel", type: "spd", skins: [{ id: 'default', name: 'Default', image: 'images/Tachyon.png' }, { id: 'china', name: 'China Dress', image: 'images/Tachyon_China.png' }, { id: 'pajama', name: 'Pajama', image: 'images/Tachyon_Pajama.png' }] },
    {
        id: 24, name: "Graviton", symbol: "G", rarity: "genesis", image: "images/Graviton.png", desc: "【創世級】重力子。", skill: "Event Horizon", type: "ult",
        skins: [{ id: 'default', name: 'Default', image: 'images/Graviton.png' }, { id: 'china', name: 'China Dress', image: 'images/Graviton_China.png' }, { id: 'pajama', name: 'Pajama', image: 'images/Graviton_Pajama.png' }]
    },
    { id: 25, name: "Bottom Quark", symbol: "b", rarity: "ultra", image: "images/bottom-quark.png", desc: "ボトムクォーク。", skill: "Heavy Impact", type: "atk" },
    { id: 26, name: "Axion", symbol: "A", rarity: "holo", image: "images/axion.png", desc: "アクシオン。", skill: "Dark Materia", type: "def" },
    { id: 27, name: "Monopole", symbol: "M", rarity: "genesis", image: "images/monopole.png", desc: "【創世級】モノポール。", skill: "Magnetic Domination", type: "ult" },
    // New Gacha Characters
    { id: 30, name: "Deuteron", symbol: "D", rarity: "rare", image: "images/deuteron.png", desc: "重陽子。陽子と中性子の仲良しペア。核融合の鍵。", skill: "Nuclear Fusion", type: "atk" },
    { id: 31, name: "Alpha", symbol: "α", rarity: "ultra", image: "images/alpha.png", desc: "アルファ粒子。極めて安定した結束力を持つ優等生。", skill: "Helium Barrier", type: "def" },

    {
        id: 99, name: "Superstring", symbol: "∞", rarity: "limitless", image: "images/superstring.png",
        desc: "【規格外】超ひも理論。宇宙の全てを記述する究極の存在。ガチャからは排出されず、深淵への到達者のみが手にする。",
        skill: "Theory of Everything", type: "ult",
        skins: [{ id: 'default', name: 'Default', image: 'images/superstring.png' }]
    },
    {
        id: 100, name: "Schrödinger", symbol: "🐱", rarity: "limitless", image: "images/schrodinger.png",
        desc: "【規格外】シュレーディンガーの猫。生存と死が重なり合う観測不能なアイドル。確率を自在に操る。",
        skill: "Quantum Superposition", type: "spd",
        skins: [{ id: 'default', name: 'Default', image: 'images/schrodinger.png' }]
    },
    {
        id: 101, name: "Maxwell", symbol: "😈", rarity: "limitless", image: "images/maxwell.png",
        desc: "【規格外】マクスウェルの悪魔。エントロピーを逆流させる禁忌の存在。秩序を強制する。",
        skill: "Second Law Breaker", type: "def",
        skins: [{ id: 'default', name: 'Default', image: 'images/maxwell.png' }]
    },
    {
        id: 102, name: "Dark Energy", symbol: "DE", rarity: "limitless", image: "images/dark_energy.png",
        desc: "【規格外】ダークエネルギー。宇宙の7割を支配する絶対女王。斥力で全てを彼方へ押しやる。",
        skill: "Cosmic Expansion", type: "atk",
        skins: [{ id: 'default', name: 'Default', image: 'images/dark_energy.png' }]
    },
    {
        id: 103, name: "Chrono", symbol: "t'", rarity: "limitless", image: "images/chrono.png",
        desc: "【規格外】相対性理論の化身。光速に近づき、時間の流れを歪める時計仕掛けの少女。",
        skill: "Time Dilation", type: "spd",
        skins: [{ id: 'default', name: 'Default', image: 'images/chrono.png' }]
    },
    {
        id: 104, name: "Big Bang", symbol: "💥", rarity: "limitless", image: "images/bigbang.png",
        desc: "【規格外】宇宙創成の特異点。全ての始まりにして最強の爆発娘。彼女の一撃が世界を作る。",
        skill: "Grand Genesis", type: "ult",
        skins: [{ id: 'default', name: 'Default', image: 'images/bigbang.png' }]
    }
];

const materials = [
    { id: 'm1', name: 'Dry Ice', cost: 500 }, { id: 'm2', name: 'Alcohol', cost: 300 },
    { id: 'm3', name: 'PMT', cost: 5000 }, { id: 'm4', name: 'Scintillator', cost: 3000 },
    { id: 'm5', name: 'Fiber', cost: 2000 }, { id: 'm6', name: 'MPPC', cost: 8000 },
    { id: 'm7', name: 'Gold Wire', cost: 4000 }, { id: 'm8', name: 'PCB', cost: 1500 }, { id: 'm9', name: 'Liq. Helium', cost: 12000 },
    { id: 'm10', name: 'Dark Matter', cost: 50000 }, { id: 'm11', name: 'Void Crystal', cost: 100000 }
];
const lootTable = ['m1', 'm2', 'm3', 'm4', 'm5', 'm6', 'm7', 'm8', 'm9', 'm10', 'm11'];
const matNames = { m1: "Dry Ice", m2: "Alcohol", m3: "PMT", m4: "Scintillator", m5: "Fiber", m6: "MPPC", m7: "Gold Wire", m8: "PCB", m9: "Liq. Helium", m10: "Dark Matter", m11: "Void Crystal" };

const detectors = [
    { id: 'd0', name: 'Geiger Counter', power: 1, req: {} },
    { id: 'd1', name: 'Cloud Chamber', power: 2, req: { m1: 1, m2: 1 } },
    { id: 'd2', name: 'Spark Chamber', power: 5, req: { m7: 1, m2: 1 } },
    { id: 'd3', name: 'Scinti Counter', power: 8, req: { m3: 1, m4: 1 } },
    { id: 'd4', name: 'Wire Chamber', power: 12, req: { m7: 2, m8: 1 } },
    { id: 'd5', name: 'Cherenkov Det', power: 18, req: { m3: 2, m1: 2 } },
    { id: 'd6', name: 'EM Calorimeter', power: 25, req: { m4: 3, m3: 2 } },
    { id: 'd7', name: 'Hadron Cal', power: 30, req: { m4: 5, m3: 3 } },
    { id: 'd8', name: 'Fiber Tracker', power: 45, req: { m6: 5, m5: 5 } },
    { id: 'd9', name: 'TPC', power: 60, req: { m7: 5, m8: 2 } },
    { id: 'd10', name: 'Silicon Vertex', power: 80, req: { m6: 10, m8: 1 } },
    { id: 'd11', name: 'Belle II', power: 120, req: { m6: 5, m7: 5, m3: 5 } },
    { id: 'd12', name: 'Super-K', power: 200, req: { m3: 20 } },
    { id: 'd13', name: 'LHC', power: 500, req: { m9: 10, m10: 5, m7: 20 } }
];

const beams = [{ id: 'b1', name: 'Cosmic', cost: 0, power: 1 }, { id: 'b2', name: 'RI', cost: 5000, power: 3 }];
const targets = [{ id: 't1', name: 'Air', cost: 0, power: 1 }, { id: 't2', name: 'Gold', cost: 10000, power: 2 }];

let user = { money: 10000, rp: 0, bp: 0, ep: 0, invMat: {}, invDet: [], invPart: { 1: 1 }, deck: [1, null, null, null, null], equippedSkins: {}, skills: [], invDeco: [], equippedDeco: {} };
let currentMission = null;
let currentSlotIndex = 0;

// === Decoration Data ===
const decorations = [
    { id: 'deco_gold', name: 'Golden Frame', type: 'frame', cost: 500, css: 'deco-gold', desc: '輝く金色のフレーム' },
    { id: 'deco_neon', name: 'Neon Lights', type: 'frame', cost: 1000, css: 'deco-neon', desc: 'ネオンに輝く近未来フレーム' },
    { id: 'deco_dark', name: 'Dark Aura', type: 'effect', cost: 2000, css: 'deco-dark', desc: '闇のオーラを纏う' },
    { id: 'deco_kirakira', name: 'Sparkles', type: 'effect', cost: 800, css: 'deco-sparkle', desc: 'キラキラ輝くエフェクト' },
    { id: 'deco_burning', name: 'Burning Spirit', type: 'effect', cost: 1500, css: 'deco-burning', desc: '燃え上がる闘志' }
];

const eventShopItems = [
    ...decorations.map(d => ({ id: d.id, type: 'deco', cost: d.cost, name: d.name, ref: d })),
    { id: 'ev_mat10', type: 'mat', itemId: 'm10', cost: 100, name: 'Dark Matter', ref: null },
    { id: 'ev_ticket', type: 'item', itemId: 'ticket', cost: 300, name: 'Gacha Ticket', ref: null }
];

window.onload = function () {
    try {
        loadGame();
        refreshUI();
        renderDeckHome();
        renderDeckEdit();
        initProposalForm();
        renderMissionList();
        renderLab();
        showHome(); // 初期表示の状態を確定
    }
    catch (e) { console.error("Init Error:", e); }
};

// === Helper Functions ===
function getSkillBonus(type) {
    let bonus = 0;
    if (!user.skills) return 0;
    user.skills.forEach(sid => {
        const s = skills.find(x => x.id === sid);
        if (s && s.type === type) bonus += s.val;
    });
    return bonus;
}

function getFameParams(rarity) {
    switch (rarity) {
        case 'limitless': return { req: 1, bonus: 0.50 };
        case 'genesis': return { req: 5, bonus: 0.10 };
        case 'ultra': return { req: 10, bonus: 0.10 };
        case 'holo': return { req: 40, bonus: 0.10 };
        case 'rare': return { req: 100, bonus: 0.08 };
        default: return { req: 1000, bonus: 0.05 };
    }
}

function getFameInfo(pid) {
    const p = particles.find(x => x.id === pid);
    if (!p) return { lv: 0, bonus: 0, next: 0, req: 0 };
    const count = user.invPart[pid] || 0;
    const params = getFameParams(p.rarity);
    const lv = Math.floor(count / params.req);
    return { lv: lv, bonus: lv * params.bonus, next: params.req - (count % params.req), req: params.req, bonusPerLv: params.bonus };
}

function getImgSrc(p) {
    if (user.equippedSkins && user.equippedSkins[p.id] && p.skins) {
        const s = p.skins.find(sk => sk.id === user.equippedSkins[p.id]);
        if (s) return s.image;
    }
    return p.image;
}

// === View Logic ===
function showHome() {
    showView('view-home');
}

function showView(id) {
    document.querySelectorAll('.main-view').forEach(el => el.classList.remove('active'));
    const target = document.getElementById(id);
    if (target) target.classList.add('active');

    // 統計パネルの表示切り替え
    const stats = document.getElementById('stats-panel');
    if (stats) {
        if (id === 'view-home') {
            stats.style.display = 'block';
            renderStats();
        } else {
            stats.style.display = 'none';
        }
    }

    document.querySelectorAll('.sidebar .menu-item').forEach(el => {
        el.classList.remove('active');
        const onclickVal = el.getAttribute('onclick');
        if (onclickVal) {
            if (id === 'view-home' && onclickVal.includes('showHome')) {
                el.classList.add('active');
            } else if (onclickVal.includes(id)) {
                el.classList.add('active');
            }
        }
    });

    if (id === 'view-lab') renderLab();
    if (id === 'view-dictionary') renderDictionary();
    if (id === 'view-mission') renderMissionList();
    if (id === 'view-buffs') renderBuffList();
    if (id === 'view-bpshop') renderBpShop();
}

function refreshUI() {
    document.getElementById('disp-money').innerText = user.money.toLocaleString();
    const rpEl = document.getElementById('disp-rp');
    if (rpEl) rpEl.innerText = (user.rp || 0).toLocaleString();
    const bpEl = document.getElementById('disp-bp');
    if (bpEl) bpEl.innerText = (user.bp || 0).toLocaleString();
    const epEl = document.getElementById('disp-ep');
    if (epEl) epEl.innerText = (user.ep || 0).toLocaleString();
    renderShop(); renderCraft(); renderOffice(); renderBpShop(); renderEventShop(); renderDictionary();
    if (document.getElementById('view-home').classList.contains('active')) renderStats();
}

function renderDictionary() {
    const el = document.getElementById('dictionary-list'); if (!el) return; el.innerHTML = '';
    const sorted = [...particles].sort((a, b) => a.id - b.id);
    let collectedCount = 0;

    sorted.forEach(p => {
        const owned = (user.invPart && user.invPart[p.id] > 0);
        if (owned) collectedCount++;

        const card = document.createElement('div');
        // Decoration checking
        let decoClass = '';
        if (user.equippedDeco && user.equippedDeco[p.id]) {
            const deco = decorations.find(d => d.id === user.equippedDeco[p.id]);
            if (deco) decoClass = deco.css;
        }

        if (!owned) {
            // Unowned (Locked)
            card.className = 'item-card dict-locked';
            card.innerHTML = `<img src="${getImgSrc(p)}" style="filter:grayscale(100%) brightness(0); width:60px;"><div style="font-size:0.8rem; color:#555;">???</div>`;
            el.appendChild(card);
        } else {
            // Owned
            card.className = `item-card card-${p.rarity} ${decoClass}`;
            card.onclick = () => showCharDetail(p.id);
            card.innerHTML = `<div class="rarity-label label-${p.rarity}">${p.rarity.toUpperCase()}</div><img src="${getImgSrc(p)}"><div class="rarity-${p.rarity}">${p.name}</div>`;
            el.appendChild(card);
        }
    });
    document.getElementById('dict-count').innerText = collectedCount;
    document.getElementById('dict-total').innerText = particles.length;
}



function startBattle(missionId) {
    location.href = `battle.html?mission=${missionId}`;
}

// === Deck & Gacha & Stats ===
function renderStats() {
    const el = document.getElementById('stats-panel'); if (!el) return;

    // 計算
    const totalParts = particles.length;
    let collectedParts = 0;
    particles.forEach(p => { if (user.invPart[p.id] > 0) collectedParts++; });
    const collectionRate = Math.floor((collectedParts / totalParts) * 100);

    // 戦力（上位5体の合計）
    let power = 0;
    user.deck.forEach(pid => {
        if (pid) {
            let p = particles.find(x => x.id === pid);
            if (p) {
                let rVal = 1; if (p.rarity == "rare") rVal = 2; if (p.rarity == "holo") rVal = 4; if (p.rarity == "ultra") rVal = 8; if (p.rarity == "genesis") rVal = 20;
                power += (500 + rVal * 200) + (100 + rVal * 150);
            }
        }
    });

    // Check for buffs (need calculateActiveBuffs)
    let bHtml = '';
    if (typeof calculateActiveBuffs === 'function') {
        const buffs = calculateActiveBuffs(user.deck);
        if (buffs.length > 0) {
            bHtml = `<div style="margin-top:15px; border-top:1px solid rgba(52, 152, 219, 0.3); padding-top:10px;">
                <div style="font-size:0.8rem; color:#aaa; margin-bottom:5px;">ACTIVE BUFFS</div>
                <div style="display:flex; flex-wrap:wrap; gap:5px;">`;
            buffs.forEach(b => {
                bHtml += `<div style="font-size:0.7rem; background:rgba(52, 152, 219, 0.2); padding:2px 5px; border-radius:3px; color:#fff;">${b.name}</div>`;
            });
            bHtml += `</div></div>`;
        }
    }

    el.innerHTML = `
        <div style="font-size:1.1rem; border-bottom:1px solid #333; margin-bottom:10px; padding-bottom:5px; color:var(--hc-blue);">
            COMMANDER STATS
        </div>
        
        <div class="stats-row"><span>COLLECTION</span> <span class="stats-val">${collectionRate}%</span></div>
        <div class="stats-bar-bg"><div class="stats-bar-fill" style="width:${collectionRate}%"></div></div>

        <div class="stats-row"><span>FLEET POWER</span> <span class="stats-val" style="color:var(--hc-orange)">${power.toLocaleString()}</span></div>
        <div class="stats-bar-bg"><div class="stats-bar-fill" style="width:${Math.min(100, power / 20000 * 100)}%; background:var(--hc-orange); box-shadow:0 0 5px var(--hc-orange);"></div></div>

        <div class="stats-row"><span>ASSETS</span> <span class="stats-val">¥${user.money.toLocaleString()}</span></div>

        ${bHtml}

        <div class="radar-chart-placeholder">
            <div class="radar-active-area"></div>
            <div style="position:absolute; font-size:0.7rem; color:white; font-weight:bold;">ANALYZING...</div>
        </div>
    `;
}

function renderDeckHome() {
    const el = document.getElementById('home-deck-display'); if (!el) return; el.innerHTML = '';
    user.deck.forEach((pid, index) => {
        if (pid) {
            const p = particles.find(x => x.id === pid);
            if (p) {
                // カードスタイルで生成
                const card = document.createElement('div');
                card.className = 'home-unit-card' + (index === 0 ? ' flagship' : '');
                card.style.zIndex = 50 - index;
                // レアリティごとの枠色はCSSクラスよりも直接styleで制御した方が競合しにくいが、今回はCSSクラスがあればそれを使う手も。
                // Battle画面と統一感を出すためCSSクラスを使用
                card.classList.add(`card-${p.rarity}`);

                card.innerHTML = `<img src="${getImgSrc(p)}">`;
                card.onclick = () => showCharDetail(p.id);
                el.appendChild(card);
            }
        }
    });
}

// ★修正: 縦長カード対応＆レアリティ枠色対応 & バフ表示
function renderDeckEdit() {
    const el = document.getElementById('deck-slots-container'); if (!el) return; el.innerHTML = '';

    // バフ表示エリアの管理
    let buffContainer = document.getElementById('deck-buff-container');
    if (!buffContainer) {
        // コンテナの外に追加したいが、elはslots-containerなので、その前に挿入する
        buffContainer = document.createElement('div');
        buffContainer.id = 'deck-buff-container';
        buffContainer.style.width = '100%';
        buffContainer.style.textAlign = 'center';
        buffContainer.style.paddingBottom = '20px';
        el.parentNode.insertBefore(buffContainer, el);
    }

    if (typeof calculateActiveBuffs === 'function') {
        const buffs = calculateActiveBuffs(user.deck);
        if (buffs.length > 0) {
            let html = `<div style="font-family:'Orbitron'; color:var(--hc-blue); margin-bottom:10px;">ACTIVE FLEET BUFFS</div><div style="display:flex; justify-content:center; gap:10px; flex-wrap:wrap;">`;
            buffs.forEach(b => {
                html += `<div class="buff-tag" style="font-size:0.8rem; padding:5px 10px;">${b.name}: ${b.desc}</div>`;
            });
            html += `</div>`;
            buffContainer.innerHTML = html;
        } else {
            buffContainer.innerHTML = `<div style="color:#555; font-size:0.9rem;">No active synergies</div>`;
        }
    }

    for (let i = 0; i < 5; i++) {
        const pid = user.deck[i]; const p = pid ? particles.find(x => x.id === pid) : null;

        // Decoration check
        let decoClass = '';
        if (p && user.equippedDeco && user.equippedDeco[p.id]) {
            const deco = decorations.find(d => d.id === user.equippedDeco[p.id]);
            if (deco) decoClass = deco.css;
        }

        const rarityClass = p ? `card-${p.rarity}` : '';
        const div = document.createElement('div');
        div.className = `slot-card ${rarityClass} ${decoClass}`;

        let content = `<div style="font-size:2rem; color:#555;">+</div><div style="color:#aaa;">EMPTY</div>`;
        if (p) {
            const info = getFameInfo(p.id);
            const star = info.lv > 0 ? `<div class="fame-badge">★<span>${info.lv}</span></div>` : '';
            content = `
                ${star}
                <img src="${getImgSrc(p)}" onclick="showCharDetail(${p.id}, event)">
                <div class="slot-label ${'rarity-' + p.rarity}">${p.name}</div>
                <div class="slot-remove" onclick="removeMember(${i}, event)">×</div>
            `;
        }
        div.innerHTML = content;
        div.onclick = (e) => {
            if (e.target.tagName !== 'IMG' && !e.target.classList.contains('slot-remove')) openSelectModal(i);
        };
        el.appendChild(div);
    }
}

function showCharDetail(pid, e) {
    if (e) e.stopPropagation(); const p = particles.find(x => x.id === pid); if (!p) return;
    const info = getFameInfo(pid); const count = user.invPart[pid] || 0;
    let fameHtml = "";
    if (info.lv > 0) fameHtml = `<div style="margin-bottom:10px; padding:5px; background:rgba(255, 215, 0, 0.2); border:1px solid gold; border-radius:5px; color:#ffd700; text-align:center;">★ FAME Lv.${info.lv} (Stats +${Math.round(info.bonus * 100)}%)<br><span style="font-size:0.7rem; color:#aaa;">Next Lv: ${info.next} more (${info.req} per Lv)</span></div>`;
    else fameHtml = `<div style="margin-bottom:10px; font-size:0.8rem; color:#555; text-align:center;">Current: ${count} / Next Lv: ${info.next} needed<br>(Need ${info.req} for +${Math.round(info.bonusPerLv * 100)}%)</div>`;

    let skinBtns = "";
    if (p.skins) {
        skinBtns = `<div style="margin-top:20px; border-top:1px solid #444; padding-top:10px;"><div style="font-size:0.8rem; color:#aaa; margin-bottom:5px;">COSTUME CHANGE</div><div class="skin-btn-container">`;
        const currentSkin = (user.equippedSkins && user.equippedSkins[pid]) || 'default';
        p.skins.forEach(s => { skinBtns += `<div class="skin-btn ${s.id === currentSkin ? 'active' : ''}" onclick="changeSkin(${pid}, '${s.id}')">${s.name}</div>`; });
        skinBtns += `</div></div>`;
    }

    // Decoration Selection UI
    let decoBtns = "";
    if (user.invDeco && user.invDeco.length > 0) {
        decoBtns = `<div style="margin-top:20px; border-top:1px solid #444; padding-top:10px;"><div style="font-size:0.8rem; color:#aaa; margin-bottom:5px;">DECORATION</div><div class="skin-btn-container">`;
        decoBtns += `<div class="skin-btn ${(!user.equippedDeco || !user.equippedDeco[pid]) ? 'active' : ''}" onclick="equipDeco(${pid}, null)">NONE</div>`;

        user.invDeco.forEach(did => {
            const d = decorations.find(x => x.id === did);
            const isEq = (user.equippedDeco && user.equippedDeco[pid] === did);
            if (d) decoBtns += `<div class="skin-btn ${isEq ? 'active' : ''}" onclick="equipDeco(${pid}, '${did}')">${d.name}</div>`;
        });
        decoBtns += `</div></div>`;
    }

    const html = `<div class="detail-img-box"><img src="${getImgSrc(p)}" id="detail-img-preview"><div style="margin-top:10px; font-weight:bold; font-family:'Orbitron'" class="rarity-${p.rarity}">${p.rarity.toUpperCase()}</div></div><div class="detail-info"><div style="color:#aaa; font-size:0.9rem;">No.${p.id}</div><h1 style="margin:5px 0;">${p.name} <span style="font-size:1.2rem; color:#888;">(${p.symbol})</span></h1>${fameHtml}<div class="detail-type">TYPE: ${p.type.toUpperCase()}</div><div class="detail-skill-box"><div style="color:var(--hc-orange); font-weight:bold; font-family:'Orbitron'">SKILL: ${p.skill}</div></div><div style="margin-top:20px; line-height:1.6; color:#ddd;">${p.desc}</div>${skinBtns}${decoBtns}</div>`;
    document.getElementById('detail-content').innerHTML = html; document.getElementById('detail-modal').style.display = 'flex';
}

function changeSkin(pid, skinId) { if (!user.equippedSkins) user.equippedSkins = {}; user.equippedSkins[pid] = skinId; saveGame(); const p = particles.find(x => x.id === pid); if (p) { document.getElementById('detail-img-preview').src = getImgSrc(p); const btns = document.querySelectorAll('.skin-btn'); btns.forEach(b => { if (b.innerText === p.skins.find(s => s.id === skinId).name) b.classList.add('active'); else b.classList.remove('active'); }); } renderDeckHome(); renderDeckEdit(); }
function removeMember(index, e) { e.stopPropagation(); user.deck[index] = null; renderDeckEdit(); renderDeckHome(); saveGame(); }

function openSelectModal(slotIndex) {
    currentSlotIndex = slotIndex; const list = document.getElementById('select-list'); list.innerHTML = ''; let hasAny = false;
    Object.keys(user.invPart).forEach(pidStr => {
        const pid = parseInt(pidStr);
        if (user.invPart[pid] > 0) {
            hasAny = true; const p = particles.find(x => x.id === pid);
            if (p) {
                const info = getFameInfo(p.id);
                const star = info.lv > 0 ? `<div class="fame-badge" style="font-size:1rem;">★${info.lv}</div>` : '';
                const div = document.createElement('div'); div.className = `item-card card-${p.rarity}`;
                div.innerHTML = `${star}<div class="rarity-label label-${p.rarity}">${p.rarity.toUpperCase()}</div><img src="${getImgSrc(p)}" style="width:70px; margin-bottom:5px;"><div class="rarity-${p.rarity}" style="font-size:0.9rem;">${p.name}</div><div style="font-size:0.7rem; color:#888;">所持: ${user.invPart[pid]}</div>`;
                div.onclick = () => { user.deck[currentSlotIndex] = pid; closeModal('select-modal'); renderDeckEdit(); renderDeckHome(); saveGame(); };
                list.appendChild(div);
            }
        }
    });
    if (!hasAny) list.innerHTML = '<p>所持している粒子がありません。</p>'; document.getElementById('select-modal').style.display = 'flex';
}
function closeModal(id) { document.getElementById(id).style.display = 'none'; }
function saveDeck() { saveGame(); alert("編成を保存しました！"); }

function initProposalForm() {
    const b = document.getElementById('sel-beam'), t = document.getElementById('sel-target'), d = document.getElementById('sel-detector');
    if (b) b.innerHTML = beams.map(x => `<option value="${x.id}">${x.name} ¥${x.cost}</option>`).join('');
    if (t) t.innerHTML = targets.map(x => `<option value="${x.id}">${x.name} ¥${x.cost}</option>`).join('');
    if (d) {
        if (!user.invDet || user.invDet.length === 0) d.innerHTML = '<option value="">(No Detector)</option>';
        else d.innerHTML = user.invDet.map(id => { const det = detectors.find(x => x.id == id); return det ? `<option value="${id}">${det.name} (Pwr:${det.power})</option>` : ''; }).join('');
    }
    calcProposalCost();
}
function calcProposalCost() {
    const b = beams.find(x => x.id == document.getElementById('sel-beam').value);
    const t = targets.find(x => x.id == document.getElementById('sel-target').value);
    let base = (b ? b.cost : 0) + (t ? t.cost : 0);
    const discount = getSkillBonus('cost_cut');
    const finalCost = Math.floor(base * (1 - discount));
    document.getElementById('prop-cost').innerText = finalCost.toLocaleString();
    const dcEl = document.getElementById('cost-discount');
    if (dcEl && discount > 0) dcEl.innerText = `(-${Math.round(discount * 100)}% Cost)`;
}
function runExperiment(times = 1) {
    const bVal = document.getElementById('sel-beam').value, tVal = document.getElementById('sel-target').value, dVal = document.getElementById('sel-detector').value;
    if (!dVal) { alert("検出器が必要です"); return; }
    const b = beams.find(x => x.id == bVal), t = targets.find(x => x.id == tVal);
    const baseCost = b.cost + t.cost;
    const discount = getSkillBonus('cost_cut');
    const totalCost = Math.floor(baseCost * (1 - discount)) * times;

    if (user.money < totalCost) { alert("資金不足"); return; }
    user.money -= totalCost;

    const det = detectors.find(x => x.id == dVal);
    let power = b.power * t.power * (det ? det.power : 1);
    const luck = getSkillBonus('luck_up');
    if (luck > 0) power *= luck;

    let results = [];
    for (let i = 0; i < times; i++) {
        const rand = Math.random() * 100; let tr = "common";
        if (power > 100) { if (rand < 2) tr = "genesis"; else if (rand < 10) tr = "ultra"; else if (rand < 30) tr = "holo"; else if (rand < 60) tr = "rare"; }
        else if (power > 50) { if (rand < 1) tr = "genesis"; else if (rand < 6) tr = "ultra"; else if (rand < 20) tr = "holo"; else if (rand < 50) tr = "rare"; }
        else if (power > 10) { if (rand < 0.5) tr = "genesis"; else if (rand < 3) tr = "ultra"; else if (rand < 15) tr = "holo"; else if (rand < 40) tr = "rare"; }
        let c = particles.filter(p => p.rarity === tr); if (c.length === 0) c = particles.filter(p => p.rarity === "common");
        const p = c[Math.floor(Math.random() * c.length)];
        user.invPart[p.id] = (user.invPart[p.id] || 0) + 1; results.push(p);
    }
    saveGame(); refreshUI();
    const resEl = document.getElementById('exp-result-content');
    if (times === 1) { const p = results[0]; resEl.innerHTML = `<img src="${getImgSrc(p)}" style="width:100px"><br><h3 class="rarity-${p.rarity}">GET: ${p.name}</h3><p>${p.desc}</p>`; }
    else {
        let html = '<div class="gacha-grid">'; results.forEach(p => { html += `<div class="gacha-item"><img src="${getImgSrc(p)}"><div class="rarity-${p.rarity}" style="font-size:0.7rem;">${p.name}</div></div>`; }); html += '</div>'; resEl.innerHTML = html;
    }
    document.getElementById('result-modal').style.display = 'block';
}

function renderShop() {
    const el = document.getElementById('shop-list'); if (!el) return; el.innerHTML = '';
    materials.forEach(m => { el.innerHTML += `<div class="item-card" onclick="buy('${m.id}')"><div>${m.name}</div><div style="color:var(--hc-green)">¥${m.cost}</div><div style="font-size:0.8rem">持: ${user.invMat ? user.invMat[m.id] || 0 : 0}</div></div>`; });
}
function buy(id) {
    const m = materials.find(x => x.id == id); if (user.money >= m.cost) { user.money -= m.cost; user.invMat[id] = (user.invMat[id] || 0) + 1; saveGame(); refreshUI(); } else alert("資金不足");
}
function renderCraft() {
    const el = document.getElementById('craft-list'); if (!el) return; el.innerHTML = '';
    detectors.forEach(d => {
        const own = user.invDet.includes(d.id);
        let reqHtml = ''; let canCraft = true;
        if (Object.keys(d.req).length === 0) reqHtml = "FREE (Starter)";
        else {
            Object.keys(d.req).forEach(mid => {
                const m = materials.find(x => x.id == mid);
                const need = d.req[mid]; const have = user.invMat[mid] || 0;
                let colorClass = 'req-ok';
                if (have < need) { canCraft = false; colorClass = 'req-ng'; }
                reqHtml += `<div class="${colorClass}">${m.name}: ${have}/${need}</div>`;
            });
        }

        let btnClass = '';
        let btnText = 'CRAFT';
        let disabledAttr = '';

        if (own) {
            btnClass = 'btn-owned';
            btnText = 'OWNED';
            disabledAttr = 'disabled';
        } else if (canCraft) {
            btnClass = 'btn-able';
            btnText = 'CRAFT !';
        } else {
            btnClass = 'btn-unable';
            btnText = 'LACK MATS';
            disabledAttr = 'disabled';
        }

        el.innerHTML += `
            <div class="craft-card ${own ? 'owned' : ''}">
                <div style="font-weight:bold; color:var(--hc-orange)">
                    ${d.name} <span style="font-size:0.8rem; color:#aaa;">(Pw:${d.power})</span>
                </div>
                <div class="craft-req">${reqHtml}</div>
                <button class="craft-btn ${btnClass}" ${disabledAttr} onclick="craft('${d.id}')">${btnText}</button>
            </div>`;
    });
}
function craft(id) {
    if (user.invDet.includes(id)) return;
    const d = detectors.find(x => x.id == id);
    if (Object.keys(d.req).length > 0) {
        let ok = true; Object.keys(d.req).forEach(mid => { if ((user.invMat[mid] || 0) < d.req[mid]) ok = false; }); if (!ok) return;
        Object.keys(d.req).forEach(mid => { user.invMat[mid] -= d.req[mid]; });
    }
    user.invDet.push(id); saveGame(); refreshUI(); initProposalForm();
}

function renderOffice() {
    const el = document.getElementById('particle-stock-list'); if (!el) return; el.innerHTML = '';
    Object.keys(user.invPart).forEach(pidStr => {
        const pid = parseInt(pidStr); if (user.invPart[pid] > 0) {
            const p = particles.find(x => x.id == pid); if (p) {
                let pr = 1000; if (p.rarity == "rare") pr = 3000; if (p.rarity == "holo") pr = 10000; if (p.rarity == "ultra") pr = 50000; if (p.rarity == "genesis") pr = 1000000;
                if (p.rarity == "limitless") pr = 99999999;
                el.innerHTML += `<div class="item-card card-${p.rarity}" onclick="sell(${pid},${pr})"><div class="rarity-label label-${p.rarity}">${p.rarity.toUpperCase()}</div><div class="rarity-${p.rarity}">${p.name}</div><div style="font-size:0.8rem">x${user.invPart[pid]}</div><div style="font-size:0.7rem; color:#aaa; margin-top:5px;">SELL: ¥${pr}</div></div>`;
            }
        }
    });
}
function sell(pid, pr) {
    const count = user.invPart[pid] || 0;
    if (count <= 0) return;

    const sellCountStr = prompt(`売却する個数を入力してください (所持: ${count})`, "1");
    if (sellCountStr === null) return; // Cancelled
    let sellCount = parseInt(sellCountStr);

    if (isNaN(sellCount) || sellCount <= 0) {
        alert("無効な数値です");
        return;
    }
    if (sellCount > count) {
        alert("所持数を超えています");
        sellCount = count;
    }

    user.invPart[pid] -= sellCount;

    // Calculate total earnings
    const bonus = getSkillBonus('sell_bonus');
    const unitPrice = Math.floor(pr * (1 + bonus));
    const finalPrice = unitPrice * sellCount;
    user.money += finalPrice;

    // RP Bonus (5% of base price * count)
    const rpBonus = getSkillBonus('rp_bonus');
    const unitRp = Math.floor((pr * 0.05) * (1 + rpBonus));
    const totalRp = unitRp * sellCount;
    user.rp = (user.rp || 0) + totalRp;

    saveGame(); refreshUI();
    alert(`売却完了:\n💰 +¥${finalPrice.toLocaleString()}\n🧪 +${totalRp.toLocaleString()} RP`);
}

function renderMissionList() {
    const el = document.getElementById('mission-list-container');
    if (!el) return;
    el.innerHTML = '';
    Object.keys(missionData).forEach(key => {
        const m = missionData[key];
        let tagClass = '';
        if (m.drops.money > 5000) tagClass = 'tag-money';
        if (m.drops.rareMat) tagClass = 'tag-boss';
        if (m.drops.bp) tagClass = 'tag-bp';

        el.innerHTML += `
            <div class="mission-card" onclick="startBattle('${key}')">
                <h3>${m.name}</h3>
                <div class="mission-tag ${tagClass}">${tagClass === 'tag-boss' ? 'Hard' : 'Normal'}</div>
                <div style="margin-top:10px; font-size:0.9rem; color:${m.color};">Target: ${m.enemy}</div>
            </div>`;
    });
}

function renderLab() {
    const el = document.getElementById('skill-tree-container'); if (!el) return; el.innerHTML = '';
    skills.forEach(s => {
        const owned = user.skills && user.skills.includes(s.id);
        const unlocked = s.req === null || (user.skills && user.skills.includes(s.req));
        let statusClass = 'locked'; let statusText = 'LOCKED'; let onClick = '';
        if (owned) { statusClass = 'unlocked'; statusText = 'ACQUIRED'; }
        else if (unlocked) { statusClass = 'purchasable'; statusText = 'UNLOCK'; onClick = `onclick="unlockSkill('${s.id}')"`; }
        el.innerHTML += `
            <div class="skill-card ${statusClass}" ${onClick}>
                <div class="skill-status ${owned ? 'st-acquired' : (unlocked ? 'st-can-buy' : 'st-locked')}">${statusText}</div>
                <div class="skill-icon">${s.icon}</div>
                <div class="skill-name">${s.name}</div>
                <div class="skill-desc">${s.desc}</div>
                ${!owned ? `<div class="skill-cost">Cost: ${s.cost} RP</div>` : ''}
                ${s.req ? `<div style="font-size:0.7rem; color:#666;">Req: ${skills.find(x => x.id == s.req).name}</div>` : ''}
            </div>`;
    });
}
function unlockSkill(sid) {
    const s = skills.find(x => x.id === sid);
    if (!user.rp || user.rp < s.cost) { alert("RP不足です！"); return; }
    if (!user.skills) user.skills = [];
    if (user.skills.includes(sid)) return;
    user.rp -= s.cost; user.skills.push(sid);
    saveGame(); refreshUI(); renderLab(); initProposalForm();
}

function loadGame() {
    const d = localStorage.getItem('hadron_v8'); if (d) { try { user = JSON.parse(d); } catch (e) { user = {}; } }
    if (typeof user.money === 'undefined') user.money = 10000;
    if (typeof user.rp === 'undefined') user.rp = 0;
    if (typeof user.bp === 'undefined') user.bp = 0;
    if (!user.invMat) user.invMat = {};
    if (!user.invDet || user.invDet.length === 0) user.invDet = ['d0'];
    if (!user.invPart) user.invPart = { 1: 1 };
    if (!user.deck) user.deck = [1, null, null, null, null];
    if (!user.equippedSkins) user.equippedSkins = {};
    if (!user.skills) user.skills = [];
    if (!user.ep) user.ep = 0;
    if (!user.invDeco) user.invDeco = [];
    if (!user.equippedDeco) user.equippedDeco = {};
}
function saveGame() { localStorage.setItem('hadron_v8', JSON.stringify(user)); }

// ★復活: 勝利時の報酬計算とモーダル表示
function winGame() {
    // 1. お金の獲得
    const missionBonus = getSkillBonus('mission_bonus');
    const baseMoney = currentMission ? currentMission.drops.money : 1000;
    const money = Math.floor(baseMoney * (1 + missionBonus));
    user.money += money;
    let msg = `💰 ¥${money.toLocaleString()}`;

    // 2. RPの獲得 (資金の10%)
    const rpGain = Math.floor(money * 0.1);
    user.rp = (user.rp || 0) + rpGain;
    msg += `<br>🧪 ${rpGain} RP`;

    // BPの獲得
    if (currentMission && currentMission.drops.bp) {
        user.bp = (user.bp || 0) + currentMission.drops.bp;
        msg += `<br>⚔️ ${currentMission.drops.bp} BP`;
    }

    // Event Point (EP) Drop
    if (currentMission && currentMission.drops.ep) {
        user.ep = (user.ep || 0) + currentMission.drops.ep;
        msg += `<br>🎫 ${currentMission.drops.ep} EP`;
    }

    // 3. 素材ドロップ
    if (currentMission && currentMission.drops.matChance > 0) {
        const count = Math.ceil(Math.random() * (currentMission.drops.maxMat || 1));
        let table = lootTable;
        if (!currentMission.drops.rareMat) {
            table = ['m1', 'm2', 'm3', 'm4', 'm5', 'm6'];
        }

        for (let i = 0; i < count; i++) {
            if (Math.random() < currentMission.drops.matChance) {
                const loot = table[Math.floor(Math.random() * table.length)];
                user.invMat[loot] = (user.invMat[loot] || 0) + 1;
                msg += `<br>📦 ${matNames[loot]}`;
            }
        }
    }

    // 4. セーブして表示
    localStorage.setItem('hadron_v8', JSON.stringify(user));
    document.getElementById('loot-display').innerHTML = msg;
    document.getElementById('result-modal').style.display = 'flex';
}
// === Field Anomalies ===
const fieldAnomalies = [
    { id: 'f_norm', name: "Standard Space", desc: "No special effects.", rate: 0.4, color: "#aaa" },
    { id: 'f_mag', name: "Magnetic Storm", desc: "Speed Type Stats +50%", rate: 0.15, color: "#f1c40f", typeBuff: { type: 'spd', val: 1.5 } },
    { id: 'f_zero', name: "Zero Gravity", desc: "Evasion UP (Both Sides)", rate: 0.15, color: "#3498db", global: { eva: 0.2 } },
    { id: 'f_dark', name: "Dark Matter Fog", desc: "Accuracy -20% / Crit Dmg +50%", rate: 0.15, color: "#9b59b6", global: { acc: -0.2, critDmg: 0.5 } },
    { id: 'f_solar', name: "Solar Flare", desc: "Burn Field (DoT)", rate: 0.1, color: "#e74c3c", global: { dot: 0.05 } },
    { id: 'f_quant', name: "Quantum Fluctuations", desc: "Random Stat Changes", rate: 0.05, color: "#2ecc71", special: "random" }
];

function getFieldEffect(mid) {
    // Determine field based on randomness or mission ID hash?
    // Let's make it random each time battle starts (decided in battle.html) OR deterministic based on mission ID string charCode sum?
    // Random is more fun for "gimmick".
    // Since battle.html is separate, we can pass it via URL param OR calculate it there.
    // Let's export the list so battle.html can pick one.
    return fieldAnomalies;
}
// === Buff System Calculation ===
const synergies = [
    { id: 'syn_atk', name: "⚔️ ASSAULT", desc: "Atk +20%", req: "3x Atk Type", effects: { atkMult: 1.2 }, check: (types, ids) => types.atk >= 3 },
    { id: 'syn_def', name: "🛡 FORTRESS", desc: "HP +20%", req: "3x Def Type", effects: { hpMult: 1.2 }, check: (types, ids) => types.def >= 3 },
    { id: 'syn_spd', name: "⚡ RAPID", desc: "Start TP +30", req: "3x Spd Type", effects: { startEp: 30 }, check: (types, ids) => types.spd >= 3 },
    { id: 'syn_rain', name: "🌈 RAINBOW", desc: "All Stats +10%", req: "1x Each Type", effects: { atkMult: 1.1, hpMult: 1.1 }, check: (types, ids) => types.atk >= 1 && types.def >= 1 && types.spd >= 1 && types.ult >= 1 },

    { id: 'syn_nuc', name: "⚛️ Nucleus", desc: "HP +15%", req: "Proton + Neutron", effects: { hpMult: 1.15 }, check: (types, ids) => ids.includes(1) && ids.includes(2) },
    { id: 'syn_bar', name: "🧱 Baryon Squad", desc: "HP +15%", req: "Proton + Neutron + Lambda", effects: { hpMult: 1.15 }, check: (types, ids) => ids.includes(1) && ids.includes(2) && ids.includes(5) },
    { id: 'syn_god', name: "⚖️ God Particle", desc: "Atk +30%", req: "Top Quark + Higgs", effects: { atkMult: 1.30 }, check: (types, ids) => ids.includes(13) && ids.includes(14) },
    { id: 'syn_charm', name: "💖 Charm", desc: "Atk +15%", req: "Charm Quark + J/psi", effects: { atkMult: 1.15 }, check: (types, ids) => ids.includes(17) && ids.includes(12) },
    { id: 'syn_anti', name: "⚫ Antimatter", desc: "Atk UP / HP DOWN", req: "Anti-Proton", effects: { atkMult: 1.25, hpMult: 0.9 }, check: (types, ids) => ids.includes(19) },
    { id: 'syn_pair', name: "💥 Pair Annihilation", desc: "Atk +25% / Def -10%", req: "Anti-Proton + Positron", effects: { atkMult: 1.25, hpMult: 0.9 }, check: (types, ids) => ids.includes(19) && ids.includes(20) },

    { id: 'syn_meson', name: "💫 Meson Trio", desc: "Start TP +20", req: "Pion + Kaon + D Meson", effects: { startEp: 20 }, check: (types, ids) => ids.includes(3) && ids.includes(4) && ids.includes(11) },
    { id: 'syn_weak', name: "♻️ Weak Force", desc: "Regen 5%", req: "W Boson + Z Boson", effects: { regen: 0.05 }, check: (types, ids) => ids.includes(21) && ids.includes(22) },
    { id: 'syn_gamma', name: "💥 Gamma Burst", desc: "Crit +20%", req: "Positron + Photon", effects: { crit: 0.2 }, check: (types, ids) => ids.includes(20) && ids.includes(15) },
    { id: 'syn_future', name: "🔮 Future Sight", desc: "Dmg Cut 15%", req: "Tachyon", effects: { dmgRed: 0.15 }, check: (types, ids) => ids.includes(23) },
    { id: 'syn_grav', name: "🌌 Gravity Well", desc: "Atk+40% / E.Atk-20%", req: "Graviton", effects: { atkMult: 1.4, enemyAtkMult: 0.8 }, check: (types, ids) => ids.includes(24) }
];

function calculateActiveBuffs(deckIds) {
    const validIds = deckIds.filter(id => id !== null);
    const deckParticles = validIds.map(id => particles.find(p => p.id === id)).filter(p => p !== undefined);
    const ids = deckParticles.map(p => p.id);

    let types = { atk: 0, def: 0, spd: 0, ult: 0 };
    deckParticles.forEach(p => { if (types[p.type] !== undefined) types[p.type]++; });

    // Use synergies array
    return synergies.filter(s => s.check(types, ids));
}

// === Buff List View ===
function renderBuffList() {
    const el = document.getElementById('buff-list-container'); if (!el) return; el.innerHTML = '';

    // Sort: Active first, then by name
    const activeBuffs = calculateActiveBuffs(user.deck);
    const activeIds = activeBuffs.map(b => b.id);

    const sorted = [...synergies].sort((a, b) => {
        const aActive = activeIds.includes(a.id);
        const bActive = activeIds.includes(b.id);
        if (aActive && !bActive) return -1;
        if (!aActive && bActive) return 1;
        return 0;
    });

    sorted.forEach(syn => {
        const isActive = activeIds.includes(syn.id);
        const card = document.createElement('div');
        card.className = `buff-list-card ${isActive ? 'active' : ''}`;

        // アイコンは名前の最初の文字（絵文字）を取得
        const icon = syn.name.match(/./u)[0];
        const name = syn.name.replace(icon, '').trim();

        card.innerHTML = `
            <div class="buff-icon">${icon}</div>
            <div class="buff-details">
                <div class="buff-name">${name}</div>
                <div class="buff-req">Req: ${syn.req}</div>
                <div class="buff-desc">${syn.desc}</div>
            </div>
            ${isActive ? '<div class="buff-status">ACTIVE</div>' : ''}
        `;
        el.appendChild(card);
    });
}


// === BP Shop Data & Logic ===
const bpShopItems = [
    { id: 'bp_m11', type: 'mat', itemId: 'm11', cost: 100, name: 'Void Crystal' },
    { id: 'bp_m10', type: 'mat', itemId: 'm10', cost: 50, name: 'Dark Matter' },
    { id: 'bp_p25', type: 'part', itemId: 25, cost: 2000, name: 'Bottom Quark' },
    { id: 'bp_p27', type: 'part', itemId: 27, cost: 10000, name: 'Monopole' },
    { id: 'bp_p99', type: 'part', itemId: 99, cost: 50000, name: 'Superstring (∞)' },
    { id: 'bp_p100', type: 'part', itemId: 100, cost: 40000, name: 'Schrödinger (🐱)' },
    { id: 'bp_p101', type: 'part', itemId: 101, cost: 40000, name: 'Maxwell (😈)' },
    { id: 'bp_p102', type: 'part', itemId: 102, cost: 45000, name: 'Dark Energy (DE)' },
    { id: 'bp_p103', type: 'part', itemId: 103, cost: 45000, name: 'Chrono (t\')' },
    { id: 'bp_p104', type: 'part', itemId: 104, cost: 60000, name: 'Big Bang (💥)' }
];

function renderBpShop() {
    const el = document.getElementById('bp-shop-list'); if (!el) return; el.innerHTML = '';
    bpShopItems.forEach(item => {
        el.innerHTML += `
            <div class="item-card bp-card" onclick="buyBpItem('${item.id}')">
                <div style="font-weight:bold; color:var(--hc-purple)">${item.name}</div>
                <div style="color:var(--hc-orange)">${item.cost} BP</div>
            </div>`;
    });
}

function buyBpItem(uid) {
    const item = bpShopItems.find(x => x.id === uid);
    if (!item) return;
    if ((user.bp || 0) < item.cost) { alert("BP不足です"); return; }

    user.bp -= item.cost;
    if (item.type === 'mat') {
        user.invMat[item.itemId] = (user.invMat[item.itemId] || 0) + 1;
    } else if (item.type === 'part') {
        user.invPart[item.itemId] = (user.invPart[item.itemId] || 0) + 1;
    }
    saveGame(); refreshUI();
    alert(`Purchased: ${item.name}`);
}

// === Event Shop & Decoration Logic ===
function renderEventShop() {
    const el = document.getElementById('event-shop-list'); if (!el) return; el.innerHTML = '';
    eventShopItems.forEach(item => {
        let owned = false;
        if (item.type === 'deco') owned = (user.invDeco && user.invDeco.includes(item.id));

        const cardHeader = item.type === 'deco' ? `[DECO]` : `[ITEM]`;
        const clickAction = owned ? `onclick="alert('Already Owned')"` : `onclick="buyEventItem('${item.id}')"`;
        const status = owned ? `<div style="color:#aaa;">OWNED</div>` : `<div style="color:var(--hc-red);">${item.cost} EP</div>`;

        el.innerHTML += `
            <div class="item-card bg-dark" ${clickAction} style="border:1px solid #d35400;">
                <div style="font-size:0.7rem; color:#e67e22;">${cardHeader}</div>
                <div style="font-weight:bold; color:#fff; margin:5px 0;">${item.name}</div>
                ${status}
                ${item.ref ? `<div style="font-size:0.7rem; color:#aaa; margin-top:5px;">${item.ref.desc}</div>` : ''}
            </div>`;
    });
}

function buyEventItem(uid) {
    const item = eventShopItems.find(x => x.id === uid); if (!item) return;
    if ((user.ep || 0) < item.cost) { alert("EP不足です"); return; }

    // Check duplication for one-time items
    if (item.type === 'deco' && user.invDeco.includes(item.id)) return;

    if (!confirm(`Buy ${item.name} for ${item.cost} EP?`)) return;

    user.ep -= item.cost;
    if (item.type === 'deco') {
        user.invDeco.push(item.id);
        alert(`Purchased Decoration: ${item.name}! Go to Deck > Detail to equip.`);
    } else if (item.type === 'mat') {
        user.invMat[item.itemId] = (user.invMat[item.itemId] || 0) + 1;
        alert(`Purchased: ${item.name}`);
    } else if (item.type === 'item') {
        alert("チケット機能は未実装です..."); // Placeholder
    }
    saveGame(); refreshUI(); renderEventShop();
}

function equipDeco(pid, decoId) {
    if (!user.equippedDeco) user.equippedDeco = {};
    // Toggle logic: if already equipped, remove it
    if (user.equippedDeco[pid] === decoId) {
        delete user.equippedDeco[pid];
    } else {
        user.equippedDeco[pid] = decoId;
    }
    saveGame();
    // Re-render detail view to show update
    showCharDetail(pid, null);
    renderDeckEdit(); // Update deck views if open
    renderDictionary();
}

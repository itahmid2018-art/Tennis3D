import*as l from"three";let g=null;export function createDoubleRingShadowTexture(){if(g)return g;if(typeof document>"u")return null;const t=document.createElement("canvas");t.width=256,t.height=256;const o=t.getContext("2d"),s=128,a=128,r=o.createRadialGradient(s,a,10,s,a,118);r.addColorStop(0,"rgba(8, 22, 6, 0.84)"),r.addColorStop(.38,"rgba(10, 26, 8, 0.62)"),r.addColorStop(.68,"rgba(12, 30, 10, 0.26)"),r.addColorStop(.84,"rgba(14, 34, 12, 0.12)"),r.addColorStop(1,"rgba(14, 34, 12, 0.0)"),o.fillStyle=r,o.fillRect(0,0,256,256),o.save(),o.beginPath(),o.arc(s,a,92,0,Math.PI*2),o.strokeStyle="rgba(8, 24, 6, 0.16)",o.lineWidth=8,o.stroke(),o.restore();const i=new l.CanvasTexture(t);return"colorSpace"in i&&l.SRGBColorSpace&&(i.colorSpace=l.SRGBColorSpace),i.needsUpdate=!0,g=i,i}function p(t,{rimStrength:o=.28,topBoost:s=.1}={}){if(!t||t.userData?.wiiRimInjected)return t;t.userData=t.userData||{},t.userData.wiiRimInjected=!0,t.userData.rimStrength=o,t.userData.topBoost=s;const a=`wii_mii_satin_rim_v1_${o.toFixed(2)}_${s.toFixed(2)}`;return t.customProgramCacheKey=()=>a,t.onBeforeCompile=r=>{r.fragmentShader=r.fragmentShader.replace("#include <opaque_fragment>",`
      // Nintendo Wii Sports Rim-Lighting + Hemisphere Top-Light Boost
      vec3 wiiViewDir = normalize( vViewPosition );
      vec3 wiiNormal = normalize( vNormal );
      float wiiRim = pow( 1.0 - max( dot( wiiNormal, wiiViewDir ), 0.0 ), 2.6 ) * ${o.toFixed(3)};
      float wiiHemiTop = clamp( wiiNormal.y * 0.5 + 0.5, 0.0, 1.0 ) * ${s.toFixed(3)};
      vec3 wiiRimTint = vec3( 1.0, 0.985, 0.94 );
      outgoingLight += wiiRimTint * wiiRim + diffuseColor.rgb * wiiHemiTop;
      #include <opaque_fragment>
      `)},t.needsUpdate=!0,t}function h(t,o="",s="player"){if(!t)return t;const a=t.clone(),r=`${t.name||""} ${o||""}`;let i=.38,e=.04,n=.28,m=.1;return/EyeDark|EyePupil|EyeLash/i.test(r)?(i=.12,e=.06,n=.18,m=.04):/EyeHighlight|EyeWhite/i.test(r)?(i=.16,e=.02,n=.22,m=.12,a.emissive&&(a.emissive.setHex(16777215),a.emissiveIntensity=/Highlight/i.test(r)?.22:.08)):/Skin|Ear|Nose|Neck|Hand|Mitt|Thumb|Ankle/i.test(r)?(i=.36,e=.02,n=.34,m=.28,a.emissive&&(a.emissive.setHex(16754812),a.emissiveIntensity=.22)):/Shirt|Polo|Shorts|Leg|Headband/i.test(r)?(i=.42,e=.04,n=.28,m=.11):/Visor|Shoe|Stripe|White|Collar|Button|Wristband|Sock|Teeth/i.test(r)?(i=.32,e=.05,n=.28,m=.1):/Hair|Eyebrow/i.test(r)&&(i=.38,e=.04,n=.28,m=.09),a.roughness=i,a.metalness=e,a.envMapIntensity=1.08,p(a,{rimStrength:n,topBoost:m}),a.userData.role=s,a}export function upgradeMiiCharacterMaterials(t,o="player"){if(!t)return;const s=!!(t.model||t.root),a=s?t.model:t,r=o||s&&t.role||"player";if(a&&typeof a.traverse=="function"){const i=new Map;a.traverse(e=>{if(!e.isMesh)return;e.castShadow=!0,e.receiveShadow=!0;let n=/Torso/i.test(e.name||""),m=e.parent;for(;m&&!n;)/Torso/i.test(m.name||"")&&(n=!0),m=m.parent;const d=Array.isArray(e.material)?e.material.map(u=>u?.name||"").join(" "):e.material?.name||"";if(n&&/Skin/i.test(d)&&e.geometry?.attributes?.position&&!e.geometry.userData?.armNubsTucked){e.geometry=e.geometry.clone();const u=e.geometry.attributes.position;for(let f=0;f<u.count;f++)u.getY(f)>0&&u.setXYZ(f,0,.2,0);u.needsUpdate=!0,e.geometry.userData=e.geometry.userData||{},e.geometry.userData.armNubsTucked=!0}e.geometry&&(e.geometry.attributes.normal?e.geometry.index!==null&&!e.geometry.userData?.normalsVerified&&(typeof e.geometry.normalizeNormals=="function"&&e.geometry.normalizeNormals(),e.geometry.userData=e.geometry.userData||{},e.geometry.userData.normalsVerified=!0):e.geometry.computeVertexNormals());const y=u=>{if(!u)return u;const f=`${u.uuid}_${r}`;return i.has(f)||i.set(f,h(u,e.name,r)),i.get(f)};Array.isArray(e.material)?e.material=e.material.map(y):e.material&&(e.material=y(e.material))})}s&&(t.racketMesh&&upgradeRacketMaterials(t.racketMesh),t.shadowBlob&&upgradeCharacterShadowBlob(t))}export function upgradeRacketMaterials(t, customStyle = null) {
  if (!t) return;
  const o = t.racketMesh ? t.racketMesh : t;
  if (!o || typeof o.traverse != "function") return;
  
  const style = customStyle || o.userData?.racketStyle || {
    frameColor: '#0072d6',
    finish: 'metallic',
    stringColor: '#ffffff',
    gripColor: '#ffffff'
  };
  o.userData = o.userData || {};
  o.userData.racketStyle = style;

  const s = new Map();
  o.traverse(a => {
    if (!a.isMesh) return;
    a.castShadow = !0;
    a.receiveShadow = !0;
    a.geometry && !a.geometry.attributes.normal && a.geometry.computeVertexNormals();

    const r = i => {
      if (!i) return i;
      const key = `${i.uuid}_${style.frameColor}_${style.finish}_${style.stringColor}_${style.gripColor}`;
      if (s.has(key)) return s.get(key);
      
      const e = i.clone();
      const n = `${i.name || ""} ${a.name || ""}`;
      
      if (/String/i.test(n)) {
        e.color = new l.Color(style.stringColor || '#ffffff');
        e.roughness = .18;
        e.metalness = .05;
        if (e.emissive) {
          e.emissive.setHex(style.stringColor === '#000000' ? 0x000000 : 0xffffff);
          e.emissiveIntensity = style.stringColor === '#000000' ? 0 : .34;
        }
        p(e, { rimStrength: .24, topBoost: .12 });
      } else if (/Grip/i.test(n)) {
        e.color = new l.Color(style.gripColor || '#ffffff');
        e.roughness = .65;
        e.metalness = .02;
        p(e, { rimStrength: .18, topBoost: .06 });
      } else if (/Silver/i.test(n)) {
        e.roughness = .18;
        e.metalness = .85;
        p(e, { rimStrength: .3, topBoost: .1 });
      } else {
        // Main Hoop / Throat / Frame
        e.color = new l.Color(style.frameColor || '#0072d6');
        if (style.finish === 'matte') {
          e.roughness = .68;
          e.metalness = .04;
        } else if (style.finish === 'carbon') {
          e.roughness = .38;
          e.metalness = .45;
          e.map = getCarbonFiberTexture();
        } else if (style.finish === 'stripes') {
          e.roughness = .22;
          e.metalness = .62;
          e.map = getStripeTexture(style.frameColor || '#0072d6');
        } else {
          // metallic
          e.roughness = .22;
          e.metalness = .78;
        }
        p(e, { rimStrength: .32, topBoost: .12 });
      }

      s.set(key, e);
      return e;
    };

    if (Array.isArray(a.material)) {
      a.material = a.material.map(r);
    } else if (a.material) {
      a.material = r(a.material);
    }
  });
}

let carbonTextureCache = null;
export function getCarbonFiberTexture() {
  if (carbonTextureCache) return carbonTextureCache;
  if (typeof document === "undefined") return null;
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#161920";
  ctx.fillRect(0, 0, 64, 64);
  ctx.fillStyle = "#2c313f";
  for (let y = 0; y < 64; y += 8) {
    for (let x = 0; x < 64; x += 8) {
      if ((x / 8 + y / 8) % 2 === 0) {
        ctx.fillRect(x, y, 8, 8);
      }
    }
  }
  ctx.fillStyle = "#464d60";
  for (let i = 0; i < 64; i += 4) {
    ctx.fillRect(i, i, 2, 2);
  }
  const tex = new l.CanvasTexture(canvas);
  tex.wrapS = l.RepeatWrapping;
  tex.wrapT = l.RepeatWrapping;
  tex.repeat.set(4, 4);
  carbonTextureCache = tex;
  return tex;
}

let stripeTextureCache = new Map();
export function getStripeTexture(colorHex = "#0072d6") {
  if (stripeTextureCache.has(colorHex)) return stripeTextureCache.get(colorHex);
  if (typeof document === "undefined") return null;
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = colorHex;
  ctx.fillRect(0, 0, 128, 128);
  ctx.fillStyle = "rgba(255, 255, 255, 0.88)";
  ctx.beginPath();
  ctx.moveTo(0, 24); ctx.lineTo(24, 0); ctx.lineTo(52, 0); ctx.lineTo(0, 52); ctx.fill();
  ctx.beginPath();
  ctx.moveTo(0, 84); ctx.lineTo(84, 0); ctx.lineTo(112, 0); ctx.lineTo(0, 112); ctx.fill();
  ctx.fillStyle = "#ffea19";
  ctx.beginPath();
  ctx.moveTo(38, 128); ctx.lineTo(128, 38); ctx.lineTo(128, 62); ctx.lineTo(62, 128); ctx.fill();
  const tex = new l.CanvasTexture(canvas);
  tex.wrapS = l.RepeatWrapping;
  tex.wrapT = l.RepeatWrapping;
  stripeTextureCache.set(colorHex, tex);
  return tex;
}
export function updateCharacterContactShadow(actor, hopOffset = 0) {
  if (!actor || !actor.shadowBlob) return;
  const pos = actor.pos || (actor.root ? actor.root.position : null);
  if (!pos) return;
  actor.shadowBlob.position.x = pos.x;
  actor.shadowBlob.position.z = pos.z;
  const height = (pos.y || 0) + hopOffset;
  const scale = Math.max(0.35, 1.0 - height * 0.22);
  actor.shadowBlob.scale.setScalar(scale);
  if (actor.shadowBlob.material) {
    actor.shadowBlob.material.opacity = Math.max(0.18, 0.82 - height * 0.35);
  }
}

export function upgradeCharacterShadowBlob(actor) {
  updateCharacterContactShadow(actor, 0);
}

const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const Guns = [
    { 
      id: 1, 
      type: 'Assault Rifle', 
      name: 'M15 MOD O', 
      image:'https://i.ibb.co/zh5Cvzbq/M15.png',
      attachments: {
        optic: 'Lethal Tools ELO', 
        muzzle: 'Redwell 5.56 Compensator', 
        barrel: '20" Delta-F2 Barrel', 
        underbarrel: 'Axis Shift Vertical Forgrip', 
        magazine: 'Mayday Extended Mag', 
        rearGrip: 'Hexcut Grip', 
        stock: 'Wander-3v Stock', 
        fireMods: 'MFS 5.56 NATO FMJ'
      }
    },
    { 
      id: 2, 
      name: 'AK-27', 
      type: 'Assault Rifle', 
      image:'https://i.ibb.co/q34CMkxH/ak27.png',
      attachments: {
        optic: 'Lethal Tools ELO', 
        muzzle: 'EMT3 Ported-70', 
        barrel: '17" Bystro Speed Barrel', 
        underbarrel: 'Lateral Precision Grip', 
        magazine: 'Epltaph Extended Mag', 
        rearGrip: 'Dictum Light Grip', 
        stock: 'Prodigal Skeleton Stock', 
        fireMods: '7.62 Sovlet FMJ'
      }    
    },
    { 
      id: 3, 
      name: 'MXR-17', 
      type: 'Assault Rifle', 
      image:'https://i.ibb.co/Vc6KY0xc/mxr17.png',
      attachments: {
        optic: 'KEPLER MICROFLEX', 
        muzzle: 'Greaves TI-762', 
        barrel: '15" Wralth Barrel', 
        underbarrel: 'Lateral Precision Grip', 
        magazine: 'Vault Extended Mag', 
        rearGrip: 'Celerity Grip', 
        stock: 'Galt-Lux Stock', 
        laser:'1mW Instinct Laser Array',
        fireMods: 'Recoil Springs'
      } 
    },
    { 
      id: 4, 
      name: 'X9 Maverick', 
      type: 'Assault Rifle', 
      image:'https://i.ibb.co/FbW9d9pj/x9.png',
      attachments: {
        optic: 'Lethal Tools ELO', 
        muzzle: 'Defense-H Suppressor', 
        barrel: '19.5" Shroud Barrel', 
        underbarrel: 'H-Lock Foregrip', 
        magazine: 'EXTENDED MAG I', 
        rearGrip: 'Daedalus Grip', 
        stock: 'Strider Overstep Stock', 
        laser:'3mW Motion Strike Laser',
        fireMods: 'Buffer Spring'
      } 
    },
    { 
      id: 5, 
      name: 'Maddox RFB', 
      type: 'Assault Rifle', 
      image:'https://i.ibb.co/1fphBC39/maddox.png',
      attachments: {
        optic: 'VAS MicroFlex', 
        muzzle: 'Titan-R 5.56 Compensator', 
        barrel: '15" Avlary Light Barrel', 
        underbarrel: 'EAM Steady-90 Grip', 
        magazine: 'Billing Extended Mag', 
        rearGrip: 'VAS Spire Grip', 
        stock: 'Voltaic Light Stock', 
        laser:'null',
        fireMods: '5.56 NATO Overpressured'
      } 
    },
    { 
      id: 6, 
      name: 'DS20 Mirage', 
      type: 'Assault Rifle', 
      image:'https://i.ibb.co/WN9yDbCw/ds20.png',
      attachments: {
        optic: 'VAS MicroFlex', 
        muzzle: 'Redwell Shade-X Suppressor', 
        barrel: '20" Rupture Barrel', 
        underbarrel: 'Ironhold Angled Grip', 
        magazine: 'Andean Extended Mag', 
        rearGrip: 'Needletail Grip', 
        stock: 'Redwell Carrlon Stock', 
        fireMods: 'Recoil Sync Unit'
      } 
    },
    { 
      id: 7, 
      name: 'Peacekeeper MK1', 
      type: 'Assault Rifle', 
      image:'https://i.ibb.co/60h1rz1y/peacekeeper.png',
      attachments: {
        optic: 'Lethal Tools Elo', 
        muzzle: 'Redwell Shade-X Suppressor', 
        barrel: '23.5 Longbow Barrel', 
        underbarrel: '', 
        magazine: '', 
        rearGrip: 'Rapid Lock', 
        stock: '', 
        fireMods: 'Buffer Spring'
      } 
    },
    { 
      id: 8, 
      name: 'Ryden 45k', 
      type: 'SMG', 
      image:'https://i.ibb.co/CSRTH5F/C-a-l-l-o-f-D-u-t-y-1-14-2026.png',
      attachments: {
        optic: 'null', 
        muzzle: 'HAWKER HYBRID .45', 
        barrel: '10.5" SLIM-MOD BARREL', 
        underbarrel: 'VITALIZE HANDSTOP', 
        magazine: 'TORCH EXTENDED MAG', 
        rearGrip: 'ERUPTION GRIP', 
        stock: 'MFS FULL STOCK +', 
        fireMods: 'RECOIL SYNC UNIT'
      } 
    },
    { 
      id: 9, 
      name: 'Sturmwolf 45', 
      type: 'SMG', 
      image:'https://i.ibb.co/MyZqCydw/swrr.png',
      attachments: {
        optic: '', 
        muzzle: 'Monolithic Suppressor', 
        barrel: '11.5" LTI Ascendancy Barrel', 
        underbarrel: 'Zero Shift Handstop', 
        magazine: 'Extended Mag I', 
        rearGrip: 'Selene Rover Grip', 
        stock: 'Satellite Skeleton Stock', 
        fireMods: '.45 Cal Overpressed'
      } 
    },
    { 
      id: 10, 
      name: 'RK-9', 
      type: 'SMG', 
      image:'https://i.ibb.co/7ddsCXDW/C-a-l-l-o-f-D-u-t-y-1-14-2026.png',
      attachments: {
        optic: '', 
        muzzle: 'HAWKER HYBRID .45', 
        barrel: '8.7" EAM HOLLOW BARREL', 
        underbarrel: 'MFS IRONLUNG HANDSTOP', 
        magazine: 'ALLIANCE EXTENDED MAG', 
        rearGrip: 'RAFT READY GRIP', 
        stock: 'NIGHTFALL RAPID STOCK', 
        fireMods: '9MM PARABELLUM OVERPRESSURED'
      } 
    },
    { 
      id: 11,
      name: 'Razor 9MM', 
      type: 'SMG',
      image:'https://i.ibb.co/pBGRcMS9/C-a-l-l-o-f-D-u-t-y-1-14-2026.png',
      attachments: {
        optic: '', 
        muzzle: 'HAWKER PORTED COMP', 
        barrel: '9" HERON BARREL', 
        underbarrel: 'EAM STEADY-90 GRIP', 
        magazine: '', 
        rearGrip: 'VICE GRIP', 
        stock: 'CONSTRICTO PAD', 
        fireMods: '9MM PARABELLUM OVERPRESSURED'
      } 
    },
    { 
      id: 12,
      name: 'Kogot-7', 
      type: 'SMG',
      image:'https://i.ibb.co/sJ5SMF8p/C-a-l-l-o-f-D-u-t-y-1-14-2026.png',
      attachments: {
        optic: '', 
        muzzle: 'Monolithic Suppressor', 
        barrel: '8.5" Targil Hock-XR Barrel', 
        underbarrel: 'Vitalize Handstop', 
        magazine: 'Fortune Extended Mag', 
        rearGrip: 'Balter Control Grip', 
        stock: 'F7-Howl Stock', 
        fireMods: '9x21mm Overpressed'
      } 
    },
    { 
      id: 13,
      name: 'Dravec 45', 
      type: 'SMG', 
      image:'https://i.ibb.co/393bwbF4/C-a-l-l-o-f-D-u-t-y-1-14-2026.png', 
      attachments: {
        optic: '', 
        muzzle: 'Bowen .45 Suppressor', 
        barrel: '19" EAM Horizon Barrel', 
        underbarrel: '', 
        magazine: 'Gator Extended Mah', 
        rearGrip: '', 
        stock: 'Serval Q-Step Stock', 
        fireMods: ''
      } 
    },
    { 
      id: 14,
      name: 'Carbon 57', 
      type: 'SMG', 
      image:'https://i.ibb.co/5g7bjHwp/C-a-l-l-o-f-D-u-t-y-1-14-2026.png',
      attachments: {
        optic: 'Lethal Tools Elo', 
        muzzle: 'Redwell Shade-X Suppressor', 
        barrel: '14" Rockleigh Barrel', 
        underbarrel: '', 
        magazine: '', 
        rearGrip: 'Bombus Quick Grip', 
        stock: '', 
        laser:'LTI Swiftpoint Laser',
        fireMods: 'Accelerated Recoil'
      } 
    },
    { 
      id: 15,
      name: 'MPC-25', 
      type: 'SMG', 
      image:'https://i.ibb.co/cKnnznry/C-a-l-l-o-f-D-u-t-y-1-14-2026.png',
      attachments: {
        optic: '', 
        muzzle: 'Kahn Ported Comp', 
        barrel: '8.6" MFS Stratus-X handstop', 
        underbarrel: 'Zero Shift Handstop ', 
        magazine: 'Sustain-25 Extended Mag', 
        rearGrip: 'Photonic Adaptive Grip', 
        stock: 'VAS Tactical Scale Stock', 
        fireMods: '5.56x30mm Overpressed'
      } 
    },
    { 
      id: 16,
      name: 'M10 Breacher', 
      type: 'Shotgun', 
      image:'https://i.ibb.co/Cp0z2LSK/m10breach.png',
      attachments: {
        optic: 'KEPLER MICROFLEX', 
        muzzle: 'M10 CQB CHOKE', 
        barrel: '17.4" Redwell', 
        underbarrel: 'VERTICAL FOREGRIP', 
        magazine: 'EXTENDED MAG I', 
        rearGrip: '', 
        stock: 'Collapsible Stock', 
        fireMods: ''
      } 
    },
    { 
      id: 17,
      name: 'Echo 12', 
      type: 'Shotgun', 
      image:'https://i.ibb.co/XZbFLnvk/echo.png',
      attachments: {
        optic: 'null', 
        muzzle: 'MONOLITHIC SUPPRESSOR', 
        barrel: '18.7" MAGELLAN DUAL BARRIER', 
        underbarrel: 'VERTICAL FOREGRIP', 
        magazine: 'GREAVES FORTREX DRUM', 
        rearGrip: 'EAM IGNITION GRIP', 
        stock: 'GREAVES STALKER STOCK', 
        fireMods: 'TURNKEY RAPID DRUM'
      } 
    },
    { 
      id: 18,
      name: 'Akita', 
      type: 'Shotgun', 
      image:'https://i.ibb.co/0NXykJt/akita.png',
      attachments: {
        optic: 'null', 
        muzzle: 'MONOLITHIC SUPPRESSOR', 
        barrel: '12" SECURITY CIPHER BARREL', 
        underbarrel: 'SAPPER GUARD HANDSTOP', 
        magazine: 'SHELL CARRIER EXTENDED I', 
        rearGrip: 'S-47 RESPONSE GRIP', 
        stock: 'VAGABOND STOCK', 
        laser:'EAM SCATTERLINE LASER',
        fireMods: 'BUFFER SPRING'
      } 
    },
    { 
      id: 19,
      name: 'MK.78', 
      type: 'LMG', 
      image:'https://i.ibb.co/HDRfPwW1/C-a-l-l-o-f-D-u-t-y.png',
      attachments: {
        optic: 'LETHAL TOOL ELO', 
        muzzle: 'REDWELL SHADE-X SUPPRESSOR', 
        barrel: '15" SKYLANCE BARREL', 
        underbarrel: 'BOWEN SENTRY FOREGRIP', 
        magazine: 'MFS HEATSHIELD BELT FED', 
        rearGrip: 'TRAILBLAZE GRIP', 
        stock: 'BOWEN LIGHT STOCK', 
        laser: '1mW INSTINCT LASER ARRAY', 
        fireMods: 'null'
      } 
    },
    { 
      id: 20,
      name: 'Sokol 545', 
      type: 'LMG', 
      image:'https://i.ibb.co/JwXmmxHq/C-a-l-l-o-f-D-u-t-y.png',
      attachments: {
        optic: 'LETHAL TOOLS ELO', 
        muzzle: 'SWF TISHINA-11', 
        barrel: '16.8" FIXATIVE MIX BARREL', 
        underbarrel: 'H-LOCK FOREGRIP', 
        magazine: 'null', 
        rearGrip: 'PYTHIAN-VI GRIP', 
        stock: 'TACTION CONTROL STOCK', 
          stock: '1mW INSTINCT LASER ARRAY',
        fireMods: 'MFS 48-DREAD BURST MOD'
      } 
    },
    { 
      id: 21,
      name: 'XM325', 
      type: 'LMG', 
      image:'https://i.ibb.co/5XyNN5RX/C-a-l-l-o-f-D-u-t-y.png',
      attachments: {
        optic: 'LETHAL TOOLS ELO', 
        muzzle: 'RL-7.62 COMPENSATOR', 
        barrel: '24" FRACTAL-LRB BARREL', 
        underbarrel: 'SENTRY PRO HANDSTOP', 
        magazine: 'ENFORCER EXTENDED BELT', 
        rearGrip: 'ELYSIAN QUICK GRIP', 
        stock: 'VG-0 Light STOCK', 
        fireMods: 'ACCELERATED RECOIL SYSTEM'
      } 
    },
    { 
      id: 22,
      name: 'M8A1', 
      type: 'Marksman Rifle', 
      image:'https://i.ibb.co/mFMQw9KP/C-a-l-l-o-f-D-u-t-y.png',
      attachments: {
        optic: 'LETHAL TOOLS ELO', 
        muzzle: 'VAS 5.56 SUPPRESSOR', 
        barrel: 'M8A1 AUTOSTRIKE-X8 CONVERSION', 
        underbarrel: 'IRONHOLD ANGLED GRIP', 
        magazine: 'SENTINEL EXTENDED MAG', 
        rearGrip: 'K&S RAZE GRIP', 
        stock: 'SWIFTLINE STOCK', 
        fireMods: 'BUFFER SPRING'
      } 
    },
    { 
      id: 23,
      name: 'Warden 308', 
      type: 'Marksman Rifle', 
      image:'https://i.ibb.co/C34ZXwvW/C-a-l-l-o-f-D-u-t-y.png',
      attachments: {
        optic: 'null', 
        muzzle: 'Monolithic Suppressor', 
        barrel: '18" INVICTUS BARREL', 
        comb: 'Static-907x Riser', 
        underbarrel: 'null', 
        laser: '5mW Lock Step Laser', 
        magazine: 'null', 
        rearGrip: 'LTI Tyrannis Grip', 
        stock: 'FTAC HYBRID STOCK', 
        fireMods: 'MFS SNAPTRIGGER'
      } 
    },
    { 
      id: 24,
      name: 'M34 Novaline', 
      type: 'Marksman Rifle', 
      image:'https://i.ibb.co/FqfgN4NQ/C-a-l-l-o-f-D-u-t-y.png',
      attachments: {
        optic: 'YOUR CHOICE', 
        muzzle: 'RL-7.62 COMPENSATOR', 
        barrel: '14.2" SEVERUS LIGHT BARREL', 
        underbarrel: 'IRONHOLD ANGELED GRIP', 
        magazine: 'BOWEN 762 EXTENDED MAG', 
        rearGrip: 'COUGAR DRAW GRIP', 
        stock: 'SEISMIC FIXED STOCK', 
        fireMods: 'BOLT CARRIER GROUP'
      } 
    },
    { 
      id: 25,
      name: 'VS Recon', 
      type: 'Sniper Rifle', 
      image:'https://i.ibb.co/yc9jhsn7/C-a-l-l-o-f-D-u-t-y-1-30-2026-12-54-27-PM.png',
      attachments: {
        optic: 'null', 
        muzzle: 'Graves A-762', 
        barrel: '17" RistRauch Nimbus Barrel', 
        underbarrel: 'MFS R-Stop Handguard', 
        magazine: 'DashLine Speed Mag', 
        rearGrip: 'R-1 Shelf Grip', 
        stock: 'Stabil Heavy Pad', 
        laser:'1mW Instinct Laser Array',
        fireMods: 'Light Bolt'
        } 
      },
      { 
      id: 26,
      name: 'Shadow SK', 
      type: 'Sniper Rifle', 
      image:'https://i.ibb.co/8g6grwgv/C-a-l-l-o-f-D-u-t-y.png',
      attachments: {
        optic: 'null', 
        muzzle: 'SWF TISHINA-11', 
        barrel: '22.4" STRAND BARREL', 
        underbarrel: 'null', 
        comb:'EMT3 FLOWLINE RISER',
        magazine: 'RIPTIDE FAST MAG', 
        rearGrip: 'E-3 BILLET SKELETON GRIP', 
        stock: 'FRICTION STOCK', 
        laser: '1mW Instinct Laser Array',
        fireMods: 'LW TRIGGER'
        } 
    },
    { 
      id: 27,
      name: 'XR-3 Ion', 
      type: 'Sniper Rifle', 
      image:'https://i.ibb.co/HTkRHcfY/C-a-l-l-o-f-D-u-t-y-1-30-2026-12-54-50-PM.png',
      attachments: {
        optic: 'null', 
        muzzle: 'Triptych Brake Muzzle', 
        barrel: '15" Fringe Barrel', 
        underbarrel: 'Zero-S Handguard', 
        magazine: 'Overload Capacity Mag', 
        rearGrip: 'L.T. Sling Grip', 
        stock: 'Light Shield Stock', 
        laser:'5mW Lockstep Laser',
        fireMods: 'Quick Charge'
      } 
    },
     { 
      id: 27,
      name: 'Hawker HX', 
      type: 'Sniper Rifle', 
      image:'https://i.ibb.co/jvbjqR7z/C-a-l-l-o-f-D-u-t-y-1-30-2026-12-55-15-PM.png',
      attachments: {
        optic: 'null', 
        muzzle: 'SWF Tishina-11', 
        barrel: 'MFS 25" Votive Barrel', 
        underbarrel: 'FlatTop Grip', 
        magazine: 'Amrita Fast Mag', 
        rearGrip: 'Auroral Light Grip', 
        stock: 'Inflitrator Stock', 
        laser:'1mW Instinct Laser Array',
        fireMods: 'Light Bolt'
      } 
    },
      
     
      

  ];
  

app.get('/guns', (req, res) => {
    res.json(Guns);
  });
  
  app.get('/guns/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const guns = Guns.find((guns) => guns.id === id);
  
    if (!guns) {
      res.status(404).json({ error: 'Gun not found' });
    } else {
      res.json(guns);
    }
  });
  
  app.post('/guns', (req, res) => {
    const newGun = req.body;
  
    if (!newGun.id || !newGun.name) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
  
    const exists = Guns.find(gun => gun.id === newGun.id);
    if (exists) {
      return res.status(400).json({ error: 'Gun with this ID already exists' });
    }
  
    Guns.push(newGun);
    res.status(201).json(newGun);
  });
  
  app.put('/guns/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedGun = req.body;
  
    const gunIndex = Guns.findIndex((guns) => guns.id === id);
    if (gunIndex === -1) {
      res.status(404).json({ error: 'Gun not found' });
    } else {
      Guns[gunIndex] = updatedGun;
      res.json(updatedGun);
    }
  });


  
  app.delete('/guns/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const gunIndex = Guns.findIndex((guns) => guns.id === id);
  
    if (gunIndex === -1) {
      res.status(404).json({ error: 'Gun not found' });
    } else {
      Guns.splice(gunIndex, 1);
      res.status(204).send();
    }
  });
  
  
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  

//   coded by DonQuaya

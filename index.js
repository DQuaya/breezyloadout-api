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
        optic: 'KEPLER MICROFLEX', 
        muzzle: 'COMPENSATOR', 
        barrel: 'REINFORCED BARREL', 
        underbarrel: 'VERTICAL FOREGRIP', 
        magazine: 'EXTENDED MAG I', 
        rearGrip: 'COMMANDO GRIP', 
        stock: 'INFILTRATOR STOCK', 
        fireMods: 'RAPID FIRE'
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
      image:'https://img.wzstats.gg/cypher-091-wzstats-87267e/gunFullDisplay',
      attachments: {
        optic: 'KEPLER MICROFLEX', 
        muzzle: 'COMPENSATOR', 
        barrel: 'REINFORCED BARREL', 
        underbarrel: 'VERTICAL FOREGRIP', 
        magazine: 'EXTENDED MAG I', 
        rearGrip: 'COMMANDO GRIP', 
        stock: 'INFILTRATOR STOCK', 
        fireMods: 'RAPID FIRE'
      } 
    },
    { 
      id: 10, 
      name: 'RK-9', 
      type: 'SMG', 
      image:'https://i.ibb.co/7ddsCXDW/C-a-l-l-o-f-D-u-t-y-1-14-2026.png',
      attachments: {
        optic: 'null', 
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
        optic: 'null', 
        muzzle: 'HAWKER PORTED COMP', 
        barrel: '9" HERON BARREL', 
        underbarrel: 'EAM STEADY-90 GRIP', 
        magazine: 'INSERT', 
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
        optic: 'KEPLER MICROFLEX', 
        muzzle: 'COMPENSATOR', 
        barrel: 'REINFORCED BARREL', 
        underbarrel: 'VERTICAL FOREGRIP', 
        magazine: 'EXTENDED MAG I', 
        rearGrip: 'COMMANDO GRIP', 
        stock: 'INFILTRATOR STOCK', 
        fireMods: 'RAPID FIRE'
      } 
    },
    { 
      id: 13,
      name: 'Dravec 45', 
      type: 'SMG', 
      image:'https://i.ibb.co/393bwbF4/C-a-l-l-o-f-D-u-t-y-1-14-2026.png', 
      attachments: {
        optic: 'KEPLER MICROFLEX', 
        muzzle: 'COMPENSATOR', 
        barrel: 'REINFORCED BARREL', 
        underbarrel: 'VERTICAL FOREGRIP', 
        magazine: 'EXTENDED MAG I', 
        rearGrip: 'COMMANDO GRIP', 
        stock: 'INFILTRATOR STOCK', 
        fireMods: 'RAPID FIRE'
      } 
    },
    { 
      id: 14,
      name: 'Carbon 57', 
      type: 'SMG', 
      image:'https://i.ibb.co/5g7bjHwp/C-a-l-l-o-f-D-u-t-y-1-14-2026.png',
      attachments: {
        optic: 'KEPLER MICROFLEX', 
        muzzle: 'COMPENSATOR', 
        barrel: 'REINFORCED BARREL', 
        underbarrel: 'VERTICAL FOREGRIP', 
        magazine: 'EXTENDED MAG I', 
        rearGrip: 'COMMANDO GRIP', 
        stock: 'INFILTRATOR STOCK', 
        fireMods: 'RAPID FIRE'
      } 
    },
    { 
      id: 15,
      name: 'MPC-25', 
      type: 'SMG', 
      image:'https://i.ibb.co/cKnnznry/C-a-l-l-o-f-D-u-t-y-1-14-2026.png',
      attachments: {
        optic: 'KEPLER MICROFLEX', 
        muzzle: 'COMPENSATOR', 
        barrel: 'REINFORCED BARREL', 
        underbarrel: 'VERTICAL FOREGRIP', 
        magazine: 'EXTENDED MAG I', 
        rearGrip: 'COMMANDO GRIP', 
        stock: 'INFILTRATOR STOCK', 
        fireMods: 'RAPID FIRE'
      } 
    },
    { 
      id: 16,
      name: 'M10 Breacher', 
      type: 'Shotgun', 
      image:'https://i.ibb.co/Cp0z2LSK/m10breach.png',
      attachments: {
        optic: 'KEPLER MICROFLEX', 
        muzzle: 'COMPENSATOR', 
        barrel: 'REINFORCED BARREL', 
        underbarrel: 'VERTICAL FOREGRIP', 
        magazine: 'EXTENDED MAG I', 
        rearGrip: 'COMMANDO GRIP', 
        stock: 'INFILTRATOR STOCK', 
        fireMods: 'RAPID FIRE'
      } 
    },
    { 
      id: 17,
      name: 'Echo 12', 
      type: 'Shotgun', 
      image:'https://i.ibb.co/XZbFLnvk/echo.png',
      attachments: {
        optic: 'KEPLER MICROFLEX', 
        muzzle: 'COMPENSATOR', 
        barrel: 'REINFORCED BARREL', 
        underbarrel: 'VERTICAL FOREGRIP', 
        magazine: 'EXTENDED MAG I', 
        rearGrip: 'COMMANDO GRIP', 
        stock: 'INFILTRATOR STOCK', 
        fireMods: 'RAPID FIRE'
      } 
    },
    { 
      id: 18,
      name: 'Akita', 
      type: 'Shotgun', 
      image:'https://i.ibb.co/0NXykJt/akita.png',
      attachments: {
        optic: 'KEPLER MICROFLEX', 
        muzzle: 'COMPENSATOR', 
        barrel: 'REINFORCED BARREL', 
        underbarrel: 'VERTICAL FOREGRIP', 
        magazine: 'EXTENDED MAG I', 
        rearGrip: 'COMMANDO GRIP', 
        stock: 'INFILTRATOR STOCK', 
        fireMods: 'RAPID FIRE'
      } 
    },
    { 
      id: 19,
      name: 'MK.78', 
      type: 'LMG', 
      image:'https://i.ibb.co/HDRfPwW1/C-a-l-l-o-f-D-u-t-y.png',
      attachments: {
        optic: 'LETHAL TOOL ELO', 
        muzzle: 'RL-7.62 COMPENSATOR', 
        barrel: '18.5" TiTAN HYBRID BARREL', 
        underbarrel: 'INSERT', 
        magazine: 'PAYLOAD BELT EXTENSION', 
        rearGrip: 'INSERT', 
        stock: 'INSERT', 
        fireMods: 'ACCELERATED RECOIL SYSTEM'
      } 
    },
    { 
      id: 20,
      name: 'Sokol 545', 
      type: 'LMG', 
      image:'https://i.ibb.co/JwXmmxHq/C-a-l-l-o-f-D-u-t-y.png',
      attachments: {
        optic: 'INSERT', 
        muzzle: 'EMT3 COMPENSATOR', 
        barrel: 'REINFORCED BARREL', 
        underbarrel: 'PARALLEL FOREGRIP', 
        magazine: 'CLEPEN FAST MAG', 
        rearGrip: 'SWF GARROTE GRIP', 
        stock: 'ECHIDNA AIM STOCK', 
        fireMods: 'INSERT'
      } 
    },
    { 
      id: 21,
      name: 'XM325', 
      type: 'LMG', 
      image:'https://i.ibb.co/5XyNN5RX/C-a-l-l-o-f-D-u-t-y.png',
      attachments: {
        optic: 'REDWELL 30-S 2X', 
        muzzle: 'INSERT', 
        barrel: '20" RIST-76 NOVA BARREL', 
        underbarrel: 'LATERAL PRECISION GRIP', 
        magazine: 'INSERT', 
        rearGrip: 'INSERT', 
        stock: 'INSERT', 
        fireMods: 'ACCELERATED RECOIL SYSTEM'
      } 
    },
    { 
      id: 22,
      name: 'M8A1', 
      type: 'Marksman Rifle', 
      image:'https://i.ibb.co/mFMQw9KP/C-a-l-l-o-f-D-u-t-y.png',
      attachments: {
        optic: 'PRISMATECH DIGITAL HOLD', 
        muzzle: 'TITAN-R 5.56 COMPENSATOR', 
        barrel: 'INSERT', 
        underbarrel: 'INSERT', 
        magazine: 'INSERT', 
        rearGrip: 'INSERT', 
        stock: 'GRIDLOCK STOCK', 
        fireMods: 'BUFFER SPRING'
      } 
    },
    { 
      id: 23,
      name: 'Warden 308', 
      type: 'Marksman Rifle', 
      image:'https://i.ibb.co/C34ZXwvW/C-a-l-l-o-f-D-u-t-y.png',
      attachments: {
        optic: 'REDWELL 30-S 2X', 
        muzzle: 'INSERT', 
        barrel: 'INSERT', 
        underbarrel: 'INSERT', 
        magazine: 'SPEED LATCH CYLINDER', 
        rearGrip: 'LTI TYRANNIS GRIP', 
        stock: 'INSERT', 
        fireMods: 'BUFFER SPRING'
      } 
    },
    { 
      id: 24,
      name: 'M34 Novaline', 
      type: 'Marksman Rifle', 
      image:'https://i.ibb.co/FqfgN4NQ/C-a-l-l-o-f-D-u-t-y.png',
      attachments: {
        optic: 'KEPLER MICROFLEX', 
        muzzle: 'COMPENSATOR', 
        barrel: 'REINFORCED BARREL', 
        underbarrel: 'VERTICAL FOREGRIP', 
        magazine: 'EXTENDED MAG I', 
        rearGrip: 'COMMANDO GRIP', 
        stock: 'INFILTRATOR STOCK', 
        fireMods: 'RAPID FIRE'
      } 
    },
    { 
      id: 25,
      name: 'VS Recon', 
      type: 'Sniper Rifle', 
      image:'https://img.wzstats.gg/gpmg-7/gunFullDisplay',
      attachments: {
        optic: 'KEPLER MICROFLEX', 
        muzzle: 'COMPENSATOR', 
        barrel: 'REINFORCED BARREL', 
        underbarrel: 'VERTICAL FOREGRIP', 
        magazine: 'EXTENDED MAG I', 
        rearGrip: 'COMMANDO GRIP', 
        stock: 'INFILTRATOR STOCK', 
        fireMods: 'RAPID FIRE'
        } 
      },
      { 
      id: 26,
      name: 'Shadow SK', 
      type: 'Sniper Rifle', 
      image:'https://i.ibb.co/8g6grwgv/C-a-l-l-o-f-D-u-t-y.png',
      attachments: {
        optic: 'KEPLER MICROFLEX', 
        muzzle: 'COMPENSATOR', 
        barrel: 'REINFORCED BARREL', 
        underbarrel: 'VERTICAL FOREGRIP', 
        magazine: 'EXTENDED MAG I', 
        rearGrip: 'COMMANDO GRIP', 
        stock: 'INFILTRATOR STOCK', 
        fireMods: 'RAPID FIRE'
        } 
    },
    { 
      id: 27,
      name: 'XR-3 Ion', 
      type: 'Sniper Rifle', 
      image:'https://img.wzstats.gg/gpmg-7/gunFullDisplay',
      attachments: {
        optic: 'KEPLER MICROFLEX', 
        muzzle: 'COMPENSATOR', 
        barrel: 'REINFORCED BARREL', 
        underbarrel: 'VERTICAL FOREGRIP', 
        magazine: 'EXTENDED MAG I', 
        rearGrip: 'COMMANDO GRIP', 
        stock: 'INFILTRATOR STOCK', 
        fireMods: 'RAPID FIRE'
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

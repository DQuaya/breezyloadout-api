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
        muzzle: 'EMT3 Compensator', 
        barrel: '16.3 SWF Tumult Barrel', 
        underbarrel: 'Ironhold Angled Grip', 
        magazine: 'Epltaph Extended Mag', 
        rearGrip: 'Garin Advanced Grip', 
        stock: 'Caliban Light Stock', 
        fireMods: 'Buffer Spring'
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
        muzzle: 'COMPENSATOR', 
        barrel: '16" OS-Density Barrel', 
        underbarrel: 'Enhance-32 Handstop', 
        magazine: 'EXTENDED MAG I', 
        rearGrip: 'Pillory Grip', 
        stock: 'INFILTRATOR STOCK', 
        fireMods: 'RAPID FIRE'
      } 
    },
    { 
      id: 5, 
      name: 'Maddox RFB', 
      type: 'Assault Rifle', 
      image:'https://i.ibb.co/1fphBC39/maddox.png',
      attachments: {
        optic: 'Lethal Tools ELO', 
        muzzle: 'Vas 5.56 Suppressor', 
        barrel: '24" Assemblage Barrel', 
        underbarrel: 'H-Lock FOREGRIP', 
        magazine: 'null', 
        rearGrip: 'Hallux Mix Girp', 
        stock: 'Rout Stride Stock', 
        laser:'3mW Motion Strike laser',
        fireMods: 'Buffer Spring'
      } 
    },
    { 
      id: 6, 
      name: 'DS20 Mirage', 
      type: 'Assault Rifle', 
      image:'https://i.ibb.co/WN9yDbCw/ds20.png',
      attachments: {
        optic: 'Lethal Tools ELO', 
        muzzle: 'Redwell Shade-X Suppressor', 
        barrel: '20" Rupture Barrel', 
        underbarrel: 'Ironhold Angled Grip', 
        magazine: 'Andean Extended Mag', 
        rearGrip: 'Needletail Grip', 
        stock: 'INFILTRATOR STOCK', 
        fireMods: 'Recoil Springs'
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
      image:'https://img.wzstats.gg/ak-74-wzstats-0ade1e/gunFullDisplay',
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
      id: 11,
      name: 'Razor 9MM', 
      type: 'SMG',
      image:'https://img.wzstats.gg/gpr-91-wzstats-48be54/gunFullDisplay',
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
      id: 12,
      name: 'Kogot-7', 
      type: 'SMG',
      image:'https://img.wzstats.gg/goblin-mk-2-wzstats-60af2f/gunFullDisplay',
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
      image:'https://img.wzstats.gg/ksv-wzstats-890357/gunFullDisplay', 
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
      image:'https://img.wzstats.gg/ladra-wzstats-9921c1/gunFullDisplay',
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
      image:'https://img.wzstats.gg/c9-wzstats-a63e4b/gunFullDisplay',
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
      image:'https://img.wzstats.gg/tanto-22/gunFullDisplay',
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
      id: 20,
      name: 'Sokol 545', 
      type: 'LMG', 
      image:'https://img.wzstats.gg/saug-wzstats-ea2c89/gunFullDisplay',
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
      id: 21,
      name: 'XM325', 
      type: 'LMG', 
      image:'https://img.wzstats.gg/ak-74-wzstats-0ade1e/gunFullDisplay',
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
      id: 22,
      name: 'M8A1', 
      type: 'Marksman Rifle', 
      image:'https://img.wzstats.gg/feng-82/gunFullDisplay',
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
      id: 23,
      name: 'Warden 308', 
      type: 'Marksman Rifle', 
      image:'https://img.wzstats.gg/xmg-wzstats-608a6f/gunFullDisplay',
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
      id: 24,
      name: 'M34 Novaline', 
      type: 'Marksman Rifle', 
      image:'https://img.wzstats.gg/pu-21/gunFullDisplay',
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

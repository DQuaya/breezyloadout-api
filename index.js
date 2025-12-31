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
      image:'https://img.wzstats.gg/cr-56-amax-wzstats-aec746/gunFullDisplay',
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
      id: 2, 
      name: 'AK-27', 
      type: 'Assault Rifle', 
      image:'https://img.wzstats.gg/krig-c/gunFullDisplay',
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
      id: 3, 
      name: 'MXR-17', 
      type: 'Assault Rifle', 
      image:'https://img.wzstats.gg/kilo-141-wzstats-def6e3/gunFullDisplay',
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
      id: 4, 
      name: 'X9 Maverick', 
      type: 'Assault Rifle', 
      image:'https://img.wzstats.gg/xm4-wzstats-4442f0/gunFullDisplay',
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
      id: 5, 
      name: 'Maddox RFB', 
      type: 'Assault Rifle', 
      image:'https://img.wzstats.gg/ames-85-wzstats-90be18/gunFullDisplay',
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
      id: 6, 
      name: 'DS20 Mirage', 
      type: 'Assault Rifle', 
      image:'https://img.wzstats.gg/as-val-wzstats-2c0cf9/gunFullDisplay',
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
      id: 7, 
      name: 'Peacekeeper MK1', 
      type: 'Assault Rifle', 
      image:'https://img.wzstats.gg/model-l-wzstats-4c6836/gunFullDisplay',
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
      id: 10,
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
      id: 11,
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
      id: 12,
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
      id: 13,
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
      id: 14,
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
      id: 15,
      name: 'M10 Breacher', 
      type: 'Shotgun', 
      image:'https://img.wzstats.gg/jackal-pdw-wzstats-0bf541/gunFullDisplay',
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
      name: 'Echo 12', 
      type: 'Shotgun', 
      image:'https://img.wzstats.gg/ppsh-41-wzstats-804aa6/gunFullDisplay',
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
      name: 'Akita', 
      type: 'Shotgun', 
      image:'https://img.wzstats.gg/pp-919-wzstats-ebc054/gunFullDisplay',
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
      id: 19,
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
      id: 20,
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
      id: 21,
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
      id: 22,
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
      id: 23,
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
      id: 24,
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
      id: 25,
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
      id: 26,
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

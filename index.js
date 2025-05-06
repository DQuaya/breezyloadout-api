const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const Guns = [
    { id: 1, type: 'Assault Rifle', name: 'CR 56-AMAX', attachments:'Optic: KEPLER MICROFLEX, Muzzle: COMPENSATOR, Barrel: REINFORCED BARREL, Underbarrel: VERTICAL FOREGRIP, Magazine: EXTENDED MAG I, Rear Grip: COMMANDO GRIP, Stock: INFILTRATOR STOCK, Fire Mods: RAPID FIRE',image:'https://img.wzstats.gg/cr-56-amax-wzstats-aec746/gunFullDisplay', video: ''},
    { id: 2, type: 'Assault Rifle', name: 'KRIG C', attachments:'Optic: ACCU-SPOT REFLEX, Muzzle: COMPENSATOR, Barrel: REINFORCED BARREL, Underbarrel: VERTICAL FOREGRIP, Magazine: EXTENDED MAG II', image:'https://img.wzstats.gg/krig-c/gunFullDisplay', video:''},
    { id: 3, type: 'Assault Rifle', name: 'Kilo 141', attachments:'Optic: WILLIS 3X, Muzzle: MONOLITHIC SUPPRESSOR, Barrel: REINFORCED BARREL, Underbarrel: VERTICAL FOREGRIP, Magazine: EXTENDED MAG II', image:'https://img.wzstats.gg/kilo-141-wzstats-def6e3/gunFullDisplay', video:''},
    { id: 4, type: 'Assault Rifle', name: 'XM4', attachments:'Optic: WILLIS 3X, Muzzle: COMPENSATOR, Barrel: REINFORCED BARREL, Underbarrel: VERTICAL FOREGRIP, Magazine: EXTENDED MAG III', image:'https://img.wzstats.gg/xm4-wzstats-4442f0/gunFullDisplay', video:''},
    { id: 5, type: 'Assault Rifle', name: 'AMES 85', attachments:'Optic: WILLIS 3X, Muzzle: MONOLITHIC SUPPRESSOR, Barrel: GAIN-TWIST BARREL, Underbarrel: VERTICAL FOREGRIP, Magazine: EXTENDED MAG II', image:'https://img.wzstats.gg/ames-85-wzstats-90be18/gunFullDisplay', video:''},
    { id: 6, type: 'Assault Rifle', name: 'AS VAL', attachments:'Barrel: SUPPRESSED REINFORCED BARREL, Underbarrel: VERTICAL FOREGRIP, Magazine: EXTENDED MAG III, Rear Grip: CQB GRIP, Fire Mods: RECOIL SPRINGS', image:'https://img.wzstats.gg/as-val-wzstats-2c0cf9/gunFullDisplay', video:''},
    { id: 7, type: 'Assault Rifle', name: 'MODEL L', attachments:'Optic: WILLIS 3X, Muzzle: COMPENSATOR, Barrel: GAIN-TWIST BARREL, Underbarrel:VERTICAL FOREGRIP, Magazine: EXTENDED MAG II', image:'https://img.wzstats.gg/model-l-wzstats-4c6836/gunFullDisplay', video:''},
    { id: 8, type: 'Assault Rifle', name: 'Cypher 091', attachments:'Optic: WILLIS 3X, Muzzle: COMPENSATOR, Barrel: GAIN-TWIST BARREL, Underbarrel: VERTICAL FOREGRIP, Magazine: EXTENDED MAG II', image:'https://img.wzstats.gg/cypher-091-wzstats-87267e/gunFullDisplay', video:''},
    { id: 9, type: 'Assault Rifle', name: 'AK-74', attachments:'Optic: VOLZHSKIY REFLEX, Muzzle: COMPENSATOR, Barrel: GAIN-TWIST BARREL, Underbarrel: VERTICAL FOREGRIP, Magazine: EXTENDED MAG III',image:'https://img.wzstats.gg/ak-74-wzstats-0ade1e/gunFullDisplay', video:''},
    { id: 10, type: 'Assault Rifle', name: 'GPR 91', attachments:'Optic: VOLZHSKIY REFLEX, Muzzle: MONOLITHIC SUPPRESSOR, Barrel: REINFORCED BARREL, Underbarrel: VERTICAL FOREGRIP, Magazine: EXTENDED MAG II', image:'https://img.wzstats.gg/gpr-91-wzstats-48be54/gunFullDisplay', video:''},
    { id: 11, type: 'Assault Rifle', name: 'GOBLIN MK2', attachments:'Optic: WILLIS 3X, Muzzle: COMPENSATOR, Barrel: REINFORCED BARREL, Magazine: EXTENDED MAG II, Fire Mods: RECOIL SPRINGS', image:'https://img.wzstats.gg/goblin-mk-2-wzstats-60af2f/gunFullDisplay', video:''},
  ];
  

app.get('/guns', (req, res) => {
    res.json(Guns);
  });
  
  app.get('/guns/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const gun = Guns.find((gun) => gun.id === id);
  
    if (!gun) {
      res.status(404).json({ error: 'Gun not found' });
    } else {
      res.json(gun);
    }
  });
  
  app.post('/gun', (req, res) => {
    const newGun = req.body;
    if (!newGun.id || !newGun.name) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    Guns.push(newGun);
    res.status(201).json(newGun);
  });
  
  app.put('/gun/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedGun = req.body;
  
    const gunIndex = Guns.findIndex((gun) => gun.id === id);
    if (gunIndex === -1) {
      res.status(404).json({ error: 'Gun not found' });
    } else {
      Guns[shoeIndex] = updatedGun;
      res.json(updatedGun);
    }
  });
  
  app.delete('/gun/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const gunIndex = Guns.findIndex((gun) => gun.id === id);
  
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

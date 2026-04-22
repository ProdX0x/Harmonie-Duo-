export interface Stretch {
  id: string;
  muscle: string;
  zone: 'head' | 'shoulders' | 'back' | 'arms' | 'hips' | 'legs' | 'feet';
  exerciseName: string;
  description: string;
  partnerRoleA: string;
  partnerRoleB: string;
  duration: number; // in seconds
  intensity: 'low' | 'medium' | 'high';
  image: string;
}

export const STRETCHES: Stretch[] = [
  // HEAD
  {
    id: '1',
    muscle: 'Trapèzes',
    zone: 'head',
    exerciseName: 'Inclinaison Douce',
    description: 'Une inclinaison latérale libérant les tensions accumulées sur le côté du cou.',
    partnerRoleA: 'Assis droit, laisse l\'oreille descendre vers l\'épaule tout doucement.',
    partnerRoleB: 'Pose une main sur l\'épaule opposée pour la stabiliser fermement.',
    duration: 30,
    intensity: 'low',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    muscle: 'Cervicales',
    zone: 'head',
    exerciseName: 'Regard Complice',
    description: 'Bascule arrière légère pour ouvrir la gorge et détendre la mâchoire.',
    partnerRoleA: 'Laisse tomber la tête en arrière dans les mains de ton partenaire.',
    partnerRoleB: 'Soutient la base du crâne avec ses paumes comme un berceau.',
    duration: 20,
    intensity: 'low',
    image: 'https://images.unsplash.com/photo-1599447292180-45fd84092ef0?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    muscle: 'Base du crâne',
    zone: 'head',
    exerciseName: 'Le Pendule',
    description: 'Micro-mouvements circulaires pour débloquer les premières vertèbres en douceur.',
    partnerRoleA: 'Ferme les yeux et laisse ton cou devenir totalement mou.',
    partnerRoleB: 'Guide la tête dans de très petits cercles lents et fluides.',
    duration: 30,
    intensity: 'low',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc2069?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    muscle: 'Sterno-mastoïdien',
    zone: 'head',
    exerciseName: 'Rotation Guidée',
    description: 'Une rotation horizontale cherchant de la longueur dans les tissus du cou.',
    partnerRoleA: 'Tourne le regard vers l\'épaule tout en expirant profondément.',
    partnerRoleB: 'Applique une pression légère sur la joue pour accompagner le mouvement.',
    duration: 25,
    intensity: 'low',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800'
  },
  // SHOULDERS
  {
    id: '5',
    muscle: 'Deltoïdes',
    zone: 'shoulders',
    exerciseName: 'Ouverture du Cœur',
    description: 'Etirement des bras vers l\'arrière pour libérer la poitrine et les épaules.',
    partnerRoleA: 'Tient ses mains derrière le dos ou les bras tendus.',
    partnerRoleB: 'Tire doucement les poignets vers le haut et l\'arrière.',
    duration: 40,
    intensity: 'medium',
    image: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '6',
    muscle: 'Pectoraux',
    zone: 'shoulders',
    exerciseName: 'Papillon Duo',
    description: 'Ouverture frontale massive pour corriger la posture voûtée devant l\'écran.',
    partnerRoleA: 'Mains derrière la nuque, coudes pointés vers les côtés.',
    partnerRoleB: 'Attrape les coudes et les rapproche doucement dans son dos.',
    duration: 45,
    intensity: 'medium',
    image: 'https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '7',
    muscle: 'Omoplates',
    zone: 'shoulders',
    exerciseName: 'L\'Étirement Tracté',
    description: 'Sensation de décollement des omoplates pour un dos plus large et détendu.',
    partnerRoleA: 'Attrape les poignets de B, arrondit le haut du dos.',
    partnerRoleB: 'Sert d\'ancre solide et tire doucement pour allonger A.',
    duration: 35,
    intensity: 'low',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '8',
    muscle: 'Coiffe des rotateurs',
    zone: 'shoulders',
    exerciseName: 'Rotation Assistée',
    description: 'Mouvement interne délicat pour lubrifier l\'articulation de l\'épaule.',
    partnerRoleA: 'Couché sur le dos, bras à 90 degrés façon chandelier.',
    partnerRoleB: 'Appuie doucement sur le poignet pour rapprocher la main du sol.',
    duration: 30,
    intensity: 'medium',
    image: 'https://images.unsplash.com/photo-1574680077545-1244a74c83ad?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '9',
    muscle: 'Trapèzes moyens',
    zone: 'shoulders',
    exerciseName: 'Pression Omoplates',
    description: 'Libération du stress logé entre les deux épaules par compression.',
    partnerRoleA: 'Position de l\'enfant au sol, front posé, bras relax.',
    partnerRoleB: 'Mains à plat, pousse les omoplates vers le bas et l\'extérieur.',
    duration: 60,
    intensity: 'low',
    image: 'https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?auto=format&fit=crop&q=80&w=800'
  },
  // BACK
  {
    id: '10',
    muscle: 'Lombaires',
    zone: 'back',
    exerciseName: 'Bascule Dos à Dos',
    description: 'Décompression totale de la colonne par un effet de levier passif.',
    partnerRoleA: 'Se penche en avant, jambes stables, portant doucement B.',
    partnerRoleB: 'S\'allonge sur le dos de A, bras ouverts, totalement détendu.',
    duration: 60,
    intensity: 'medium',
    image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '11',
    muscle: 'Dorsaux',
    zone: 'back',
    exerciseName: 'L\'Arc Latéral',
    description: 'Étirement de la taille et des côtes pour une respiration ample.',
    partnerRoleA: 'Lève un bras et s\'incline pour former un croissant.',
    partnerRoleB: 'Tient le bras levé et tire pour allonger le flanc.',
    duration: 40,
    intensity: 'medium',
    image: 'https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '12',
    muscle: 'Rachis complet',
    zone: 'back',
    exerciseName: 'Enroulement Guidé',
    description: 'Descente vertèbre par vertèbre accompagnée pour une souplesse dorsale accrue.',
    partnerRoleA: 'S\'enroule vers l\'avant en essayant de toucher ses pieds.',
    partnerRoleB: 'Pose ses mains sur le dos de A pour l\'aider.',
    duration: 50,
    intensity: 'low',
    image: 'https://images.unsplash.com/photo-1529693662653-9d480530a687?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '13',
    muscle: 'Sacrum',
    zone: 'back',
    exerciseName: 'Compression Sacrale',
    description: 'Soulagement immédiat du bas du dos par une pression ciblée.',
    partnerRoleA: 'Allongé sur le ventre, hanches bien à plat sur le sol.',
    partnerRoleB: 'Appuie fermement avec ses paumes sur le bas du dos.',
    duration: 45,
    intensity: 'low',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '14',
    muscle: 'Carré des lombes',
    zone: 'back',
    exerciseName: 'La Torsion Ancre',
    description: 'Rotation spirale du buste pour débloquer les vertèbres moyennes.',
    partnerRoleA: 'Assis, jambes croisées, effectue une torsion vers la droite.',
    partnerRoleB: 'Aide à la rotation en tirant l\'épaule et le genou.',
    duration: 40,
    intensity: 'medium',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '15',
    muscle: 'Intercostaux',
    zone: 'back',
    exerciseName: 'Expansion Poitrine',
    description: 'Ouvrir les côtes pour libérer le diaphragme et le stress.',
    partnerRoleA: 'Assis dos à B, mains jointes derrière la tête.',
    partnerRoleB: 'Ouvre les coudes de A tout en poussant son dos.',
    duration: 35,
    intensity: 'low',
    image: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=800'
  },
  // ARMS
  {
    id: '16',
    muscle: 'Biceps',
    zone: 'arms',
    exerciseName: 'Le Grand Étirement',
    description: 'Extension longue des bras pour détendre les avant-bras et biceps.',
    partnerRoleA: 'Bras tendus vers l\'arrière, paumes vers le ciel.',
    partnerRoleB: 'Lève les mains de A pour accentuer l\'allongement.',
    duration: 30,
    intensity: 'medium',
    image: 'https://images.unsplash.com/photo-1554062635-420367280da7?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '17',
    muscle: 'Triceps',
    zone: 'arms',
    exerciseName: 'Appui Vertical',
    description: 'Cible l\'arrière du bras pour une mobilité d\'épaule complète.',
    partnerRoleA: 'Coude levé, main touchant l\'omoplate opposée.',
    partnerRoleB: 'Appuie doucement sur le coude pour descendre la main.',
    duration: 30,
    intensity: 'low',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '18',
    muscle: 'Avant-bras',
    zone: 'arms',
    exerciseName: 'Poignets Relax',
    description: 'Soulage les tensions liées au clavier et à la souris.',
    partnerRoleA: 'Bras tendu, poignet cassé vers l\'avant.',
    partnerRoleB: 'Presse la paume de A vers son propre avant-bras.',
    duration: 20,
    intensity: 'low',
    image: 'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '19',
    muscle: 'Main',
    zone: 'arms',
    exerciseName: 'Étoile des Doigts',
    description: 'Ouverture de la paume pour détendre la main fatigue.',
    partnerRoleA: 'Écarte les doigts au maximum.',
    partnerRoleB: 'Masse doucement le centre de la paume de A.',
    duration: 25,
    intensity: 'low',
    image: 'https://images.unsplash.com/photo-1519781542704-957ff19eff00?auto=format&fit=crop&q=80&w=800'
  },
  // HIPS
  {
    id: '20',
    muscle: 'Psoas',
    zone: 'hips',
    exerciseName: 'Fente Assistée',
    description: 'Le must pour les sédentaires : ouverture profonde des hanches.',
    partnerRoleA: 'En fente avant, genou arrière au sol.',
    partnerRoleB: 'Maintient le buste de A bien droit et fier.',
    duration: 45,
    intensity: 'high',
    image: 'https://images.unsplash.com/photo-1549576490-b0b4831da60a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '21',
    muscle: 'Grand fessier',
    zone: 'hips',
    exerciseName: 'Le Chiffre 4',
    description: 'Cible le muscle piriforme en profondeur pour libérer l\'assise.',
    partnerRoleA: 'Allongé sur le dos, cheville posée sur genou opposé.',
    partnerRoleB: 'Pousse délicatement le genou levé vers la poitrine de A.',
    duration: 50,
    intensity: 'medium',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '22',
    muscle: 'Adducteurs',
    zone: 'hips',
    exerciseName: 'Le V Miroir',
    description: 'Assis face à face pour ouvrir l\'intérieur des cuisses ensemble.',
    partnerRoleA: 'Jambes en V, pieds contre les pieds de B.',
    partnerRoleB: 'Attrape les bras de A et se penche en arrière.',
    duration: 60,
    intensity: 'high',
    image: 'https://images.unsplash.com/photo-1485727749690-d091e8284ef3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '23',
    muscle: 'Rotateurs externes',
    zone: 'hips',
    exerciseName: 'Bascule Bassin',
    description: 'Libération des hanches par un mouvement de bercement apaisant.',
    partnerRoleA: 'Couché sur le dos, genoux repliés sur la poitrine.',
    partnerRoleB: 'Bascule doucement les jambes de A de gauche à droite.',
    duration: 40,
    intensity: 'low',
    image: 'https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '24',
    muscle: 'TFL',
    zone: 'hips',
    exerciseName: 'Le Twister Couché',
    description: 'Rotation basse du corps pour étirer l\'extérieur de la cuisse.',
    partnerRoleA: 'Une jambe tendue, l\'autre croisée par-dessus vers le sol.',
    partnerRoleB: 'Appuie doucement sur le genou croisé et l\'épaule.',
    duration: 45,
    intensity: 'medium',
    image: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '25',
    muscle: 'Pectiné',
    zone: 'hips',
    exerciseName: 'Le Papillon Assisté',
    description: 'Pression douce pour gagner en souplesse d\'entrejambe.',
    partnerRoleA: 'Plante des pieds l\'une contre l\'autre en tailleur.',
    partnerRoleB: 'Paumes sur les genoux de A, appuie vers le sol.',
    duration: 40,
    intensity: 'medium',
    image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&q=80&w=800'
  },
  // LEGS
  {
    id: '26',
    muscle: 'Ischio-jambiers',
    zone: 'legs',
    exerciseName: 'Ciel Vertical',
    description: 'Une jambe tendue vers le ciel pour allonger l\'arrière de cuisse.',
    partnerRoleA: 'Allongé, lève une jambe tendue vers le partenaire debout.',
    partnerRoleB: 'Pousse doucement la jambe vers la tête de A.',
    duration: 60,
    intensity: 'high',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '27',
    muscle: 'Quadriceps',
    zone: 'legs',
    exerciseName: 'Talon-Fesse Sol',
    description: 'Étirement ciblé du devant de la cuisse pour libérer le genou.',
    partnerRoleA: 'Allongé sur le ventre, attrape sa propre cheville.',
    partnerRoleB: 'Pousse le pied de A vers sa fesse avec son poids.',
    duration: 45,
    intensity: 'medium',
    image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '28',
    muscle: 'Mollets',
    zone: 'legs',
    exerciseName: 'L\'Ancre Humaine',
    description: 'Une traction du pied pour étirer le muscle gastrocnémien.',
    partnerRoleA: 'Jambe tendue au sol, pied flex vers le haut.',
    partnerRoleB: 'Tire les orteils de A vers lui avec ses mains.',
    duration: 35,
    intensity: 'medium',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '29',
    muscle: 'Fasciatata',
    zone: 'legs',
    exerciseName: 'Croisement Latéral',
    description: 'Étirement de la bandelette le long de la cuisse.',
    partnerRoleA: 'Debout, croise une jambe derrière l\'autre.',
    partnerRoleB: 'Pousse doucement la hanche de A vers le côté.',
    duration: 30,
    intensity: 'medium',
    image: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '30',
    muscle: 'Adducteurs longs',
    zone: 'legs',
    exerciseName: 'Grand Angle Guidé',
    description: 'Ouverture latérale maximale pour une souplesse de karatéka.',
    partnerRoleA: 'Assis en grand écart facial, mains au sol.',
    partnerRoleB: 'Tient les mains de A et tire vers l\'avant.',
    duration: 50,
    intensity: 'high',
    image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '31',
    muscle: 'Soléaire',
    zone: 'legs',
    exerciseName: 'Flexion Appui',
    description: 'Étire le tendon d\'Achille et le bas du mollet.',
    partnerRoleA: 'Accroupi, talons au sol, s\'appuie sur B.',
    partnerRoleB: 'Leste les genoux de A pour forcer la flexion.',
    duration: 30,
    intensity: 'medium',
    image: 'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '32',
    muscle: 'Jambier antérieur',
    zone: 'legs',
    exerciseName: 'Pression Coup-de-pied',
    description: 'Étirement du dessus du pied et du tibias.',
    partnerRoleA: 'Assis sur les genoux, talons sous les fessiers.',
    partnerRoleB: 'Soulève très légèrement les genoux de A du sol.',
    duration: 25,
    intensity: 'low',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800'
  },
  // FEET
  {
    id: '33',
    muscle: 'Plante du pied',
    zone: 'feet',
    exerciseName: 'Le Massage Voûte',
    description: 'Assouplissement de la zone réflexe plantaire par mouvement.',
    partnerRoleA: 'Assis, tend sa jambe vers le partenaire.',
    partnerRoleB: 'Fait rouler la voûte plantaire sous ses pouces pressés.',
    duration: 40,
    intensity: 'low',
    image: 'https://images.unsplash.com/photo-1519781542704-957ff19eff00?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '34',
    muscle: 'Orteils',
    zone: 'feet',
    exerciseName: 'Flexion Douce',
    description: 'Récuperer de la mobilité dans les petits articulations du pied.',
    partnerRoleA: 'Ferme les yeux, détend ses orteils.',
    partnerRoleB: 'Replie doucement les orteils de A vers l\'arrière.',
    duration: 20,
    intensity: 'low',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc2069?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '35',
    muscle: 'Cheville',
    zone: 'feet',
    exerciseName: 'Rotation de l\'Encre',
    description: 'Débloquer l\'articulation pour une marche plus fluide.',
    partnerRoleA: 'Laisse le partenaire tenir sa cheville solidement.',
    partnerRoleB: 'Dessine des grands cercles avec le pied de A.',
    duration: 30,
    intensity: 'low',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800'
  }
];

export const MORNING_ROUTINE = ['1', '5', '11', '20', '26', '28'];
export const EVENING_ROUTINE = ['3', '9', '10', '13', '23', '33'];

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
}

export const STRETCHES: Stretch[] = [
  // COU & TÊTE
  {
    id: '1',
    muscle: 'Trapèzes supérieurs',
    zone: 'head',
    exerciseName: 'Inclinaison assistée',
    description: 'Un partenaire incline doucement la tête pendant que l\'autre stabilise l\'épaule opposée.',
    partnerRoleA: 'Assis, incline la tête sur le côté.',
    partnerRoleB: 'Appuie doucement sur l\'épaule opposée pour accentuer l\'étirement.',
    duration: 30,
    intensity: 'low'
  },
  {
    id: '2',
    muscle: 'Scalènes',
    zone: 'head',
    exerciseName: 'Extension cervicale douce',
    description: 'Ouverture de la gorge et des muscles latéraux du cou.',
    partnerRoleA: 'Laisse tomber la tête légèrement en arrière.',
    partnerRoleB: 'Soutient la base du crâne pour éviter une compression.',
    duration: 20,
    intensity: 'low'
  },
  // ÉPAULES
  {
    id: '3',
    muscle: 'Deltoïdes antérieurs',
    zone: 'shoulders',
    exerciseName: 'Bras en croix arrière',
    description: 'Ouverture de la poitrine et des épaules.',
    partnerRoleA: 'Étend les bras vers l\'arrière.',
    partnerRoleB: 'Tient les poignets et rapproche doucement les omoplates de A.',
    duration: 45,
    intensity: 'medium'
  },
  {
    id: '4',
    muscle: 'Pectoraux',
    zone: 'shoulders',
    exerciseName: 'Le Papillon Duo',
    description: 'Étirement profond de la poitrine.',
    partnerRoleA: 'Mains derrière la tête, coudes ouverts.',
    partnerRoleB: 'Tire doucement les coudes vers l\'arrière.',
    duration: 40,
    intensity: 'medium'
  },
  {
    id: '5',
    muscle: 'Coiffe des rotateurs',
    zone: 'shoulders',
    exerciseName: 'Rotation externe assistée',
    description: 'Améliore la mobilité de l\'épaule.',
    partnerRoleA: 'Bras à 90°, coude au corps.',
    partnerRoleB: 'Pousse délicatement l\'avant-bras vers l\'extérieur.',
    duration: 30,
    intensity: 'low'
  },
  // DOS
  {
    id: '6',
    muscle: 'Grand dorsal',
    zone: 'back',
    exerciseName: 'Étirement Latéral en Duo',
    description: 'Étirement des flancs et du dos.',
    partnerRoleA: 'Lève un bras et s\'incline de côté.',
    partnerRoleB: 'Tient la main de A et tire doucement pour allonger le flanc.',
    duration: 45,
    intensity: 'medium'
  },
  {
    id: '7',
    muscle: 'Lombaires',
    zone: 'back',
    exerciseName: 'La Bascule Dos à Dos',
    description: 'Décompression de la colonne vertébrale.',
    partnerRoleA: 'Se penche en avant, portant doucement B sur son dos.',
    partnerRoleB: 'Se laisse aller en arrière, détendu sur le dos de A.',
    duration: 60,
    intensity: 'medium'
  },
  {
    id: '8',
    muscle: 'Rhomboïdes',
    zone: 'back',
    exerciseName: 'Le Face à Face Tracté',
    description: 'Élargissement de l\'espace entre les omoplates.',
    partnerRoleA: 'Attrape les mains de B, arrondit le dos.',
    partnerRoleB: 'Tire doucement pour aider A à bien arrondir le haut du dos.',
    duration: 30,
    intensity: 'low'
  },
  {
    id: '9',
    muscle: 'Érecteurs du rachis',
    zone: 'back',
    exerciseName: 'Compression sacrale',
    description: 'Soulagement du bas du dos.',
    partnerRoleA: 'Position de l\'enfant.',
    partnerRoleB: 'Appuie doucement avec les paumes sur le bas du dos de A.',
    duration: 45,
    intensity: 'low'
  },
  // BRAS
  {
    id: '10',
    muscle: 'Biceps',
    zone: 'arms',
    exerciseName: 'Extension de bras arrière',
    description: 'Étirement long du bras.',
    partnerRoleA: 'Bras tendus vers l\'arrière, pouces vers le bas.',
    partnerRoleB: 'Lève doucement les mains de A.',
    duration: 30,
    intensity: 'medium'
  },
  {
    id: '11',
    muscle: 'Triceps',
    zone: 'arms',
    exerciseName: 'Appui coude haut',
    description: 'Étirement de l\'arrière du bras.',
    partnerRoleA: 'Main entre les omoplates, coude vers le ciel.',
    partnerRoleB: 'Pousse doucement le coude vers le bas.',
    duration: 30,
    intensity: 'low'
  },
  {
    id: '12',
    muscle: 'Fléchisseurs de l\'avant-bras',
    zone: 'arms',
    exerciseName: 'Pression paume',
    description: 'Étirement des poignets.',
    partnerRoleA: 'Bras tendu, paume vers l\'avant.',
    partnerRoleB: 'Tire les doigts de A vers l\'arrière.',
    duration: 20,
    intensity: 'low'
  },
  // HANCHES & FESSIERS
  {
    id: '13',
    muscle: 'Psoas',
    zone: 'hips',
    exerciseName: 'Fente assistée',
    description: 'Ouverture de la hanche.',
    partnerRoleA: 'En fente avant.',
    partnerRoleB: 'Stabilise les épaules de A et aide à avancer le bassin.',
    duration: 45,
    intensity: 'high'
  },
  {
    id: '14',
    muscle: 'Grand fessier',
    zone: 'hips',
    exerciseName: 'Le Chiffre 4 Couché',
    description: 'Étirement profond de la fesse.',
    partnerRoleA: 'Allongé, cheville sur le genou opposé.',
    partnerRoleB: 'Pousse le genou de A vers sa poitrine.',
    duration: 60,
    intensity: 'medium'
  },
  {
    id: '15',
    muscle: 'Moyen fessier',
    zone: 'hips',
    exerciseName: 'Torsion assise',
    description: 'Étirement latéral de la hanche.',
    partnerRoleA: 'Assis, jambe croisée par-dessus l\'autre.',
    partnerRoleB: 'Aide à la rotation du buste en douceur.',
    duration: 40,
    intensity: 'medium'
  },
  {
    id: '16',
    muscle: 'Piriforme',
    zone: 'hips',
    exerciseName: 'Traction croisée',
    description: 'Cible le nerf sciatique de façon préventive.',
    partnerRoleA: 'Allongé, genou vers l\'épaule opposée.',
    partnerRoleB: 'Tire doucement le genou vers l\'épaule.',
    duration: 30,
    intensity: 'medium'
  },
  {
    id: '17',
    muscle: 'Adducteurs',
    zone: 'hips',
    exerciseName: 'Le V en duo',
    description: 'Ouverture de l\'intérieur des cuisses.',
    partnerRoleA: 'Jambes en V, pieds contre les pieds de B.',
    partnerRoleB: 'Tient les mains de A et se penche en arrière.',
    duration: 50,
    intensity: 'high'
  },
  // JAMBES
  {
    id: '18',
    muscle: 'Ischio-jambiers',
    zone: 'legs',
    exerciseName: 'Traction au sol',
    description: 'Étirement de l\'arrière de la cuisse.',
    partnerRoleA: 'Allongé, une jambe levée à la verticale.',
    partnerRoleB: 'Pousse doucement la jambe vers la tête de A.',
    duration: 45,
    intensity: 'high'
  },
  {
    id: '19',
    muscle: 'Quadriceps',
    zone: 'legs',
    exerciseName: 'Talon-fesse assisté',
    description: 'Étirement de l\'avant de la cuisse.',
    partnerRoleA: 'Allongé sur le ventre.',
    partnerRoleB: 'Ramène le talon de A vers sa fesse.',
    duration: 40,
    intensity: 'medium'
  },
  {
    id: '20',
    muscle: 'Gastrocnémiens (Mollets)',
    zone: 'legs',
    exerciseName: 'Poussée du mur humain',
    description: 'Étirement du mollet.',
    partnerRoleA: 'Pousse contre les mains de B, talon au sol.',
    partnerRoleB: 'Fait office de mur solide pour B.',
    duration: 30,
    intensity: 'medium'
  },
  {
    id: '21',
    muscle: 'Soléaire',
    zone: 'legs',
    exerciseName: 'Flexion cheville appuyée',
    description: 'Cible le bas du mollet.',
    partnerRoleA: 'Genou fléchi, poids sur l\'avant du pied.',
    partnerRoleB: 'Appuie sur le genou de A pour intensifier.',
    duration: 30,
    intensity: 'low'
  },
  {
    id: '22',
    muscle: 'Tenseur du fascia lata (TFL)',
    zone: 'legs',
    exerciseName: 'Croisement latéral',
    description: 'Étirement de la bandelettelette ilio-tibiale.',
    partnerRoleA: 'Debout, croise une jambe derrière l\'autre.',
    partnerRoleB: 'Pousse doucement la hanche de A.',
    duration: 30,
    intensity: 'medium'
  },
  // PIEDS & AUTRES
  {
    id: '23',
    muscle: 'Plantaire',
    zone: 'feet',
    exerciseName: 'Flexion des orteils',
    description: 'Soulagement de la plante du pied.',
    partnerRoleA: 'Assis.',
    partnerRoleB: 'Replie doucement les orteils de A vers le haut.',
    duration: 20,
    intensity: 'low'
  },
  {
    id: '24',
    muscle: 'Abdominaux',
    zone: 'back',
    exerciseName: 'Le Cobra Assisté',
    description: 'Extension de la sangle abdominale.',
    partnerRoleA: 'Sur le ventre, en appui sur les mains.',
    partnerRoleB: 'Tient les bras de A et lève doucement le buste.',
    duration: 30,
    intensity: 'medium'
  },
  {
    id: '25',
    muscle: 'Intercostaux',
    zone: 'back',
    exerciseName: 'Respiration latérale',
    description: 'Ouvrir la cage thoracique.',
    partnerRoleA: 'Mains sur les côtés.',
    partnerRoleB: 'Applique une légère pression pendant l\'expiration.',
    duration: 40,
    intensity: 'low'
  },
  {
    id: '26',
    muscle: 'Sous-scapulaire',
    zone: 'shoulders',
    exerciseName: 'Rotation interne',
    description: 'Mobilité profonde de l\'épaule.',
    partnerRoleA: 'Main dans le bas du dos.',
    partnerRoleB: 'Décolle doucement la main du dos de A.',
    duration: 25,
    intensity: 'medium'
  },
  {
    id: '27',
    muscle: 'Fessiers latéraux',
    zone: 'hips',
    exerciseName: 'Le Bercement',
    description: 'Détente du bassin.',
    partnerRoleA: 'Couché, jambes fléchies.',
    partnerRoleB: 'Bascule doucement les genoux de droite à gauche.',
    duration: 60,
    intensity: 'low'
  },
  {
    id: '28',
    muscle: 'Extenseurs des doigts',
    zone: 'arms',
    exerciseName: 'Prière inversée',
    description: 'Détente après écran.',
    partnerRoleA: 'Dos des mains l\'un contre l\'autre.',
    partnerRoleB: 'Presse doucement les mains de A.',
    duration: 20,
    intensity: 'low'
  },
  {
    id: '29',
    muscle: 'Sterno-cléido-mastoïdien',
    zone: 'head',
    exerciseName: 'Regard latéral',
    description: 'Rotation cervicale.',
    partnerRoleA: 'Tourne la tête au maximum.',
    partnerRoleB: 'Pose une main sur la joue pour aider à la rotation.',
    duration: 20,
    intensity: 'low'
  },
  {
    id: '30',
    muscle: 'Courts fléchisseurs du cou',
    zone: 'head',
    exerciseName: 'Double menton assisté',
    description: 'Réalignement postural.',
    partnerRoleA: 'Recule le menton seul.',
    partnerRoleB: 'Appuie doucement sur le front pour créer une résistance.',
    duration: 15,
    intensity: 'low'
  },
  {
    id: '31',
    muscle: 'Vaste latéral',
    zone: 'legs',
    exerciseName: 'Pression jambe côté',
    description: 'Étirement du haut de la cuisse.',
    partnerRoleA: 'Allongé sur le côté.',
    partnerRoleB: 'Appuie sur la cuisse de A pour étirer l\'extérieur.',
    duration: 30,
    intensity: 'medium'
  },
  {
    id: '32',
    muscle: 'Carré des lombes',
    zone: 'back',
    exerciseName: 'L\'Arc de cercle',
    description: 'Étirement de la taille.',
    partnerRoleA: 'Debout, bras en l\'air.',
    partnerRoleB: 'Pousse la hanche pendant que A s\'incline.',
    duration: 40,
    intensity: 'medium'
  },
  {
    id: '33',
    muscle: 'Bras radial',
    zone: 'arms',
    exerciseName: 'Étirement de l\'avant-bras haut',
    description: 'Détente du dessus du bras.',
    partnerRoleA: 'Bras tendu, poignet cassé vers le bas.',
    partnerRoleB: 'Exerce une pression sur le dos de la main.',
    duration: 20,
    intensity: 'low'
  },
  {
    id: '34',
    muscle: 'Pectiné',
    zone: 'hips',
    exerciseName: 'Angle adducteur réduit',
    description: 'Cible le haut de l\'intérieur de cuisse.',
    partnerRoleA: 'Assis en tailleur.',
    partnerRoleB: 'Appuie sur les genoux de A avec ses mains.',
    duration: 40,
    intensity: 'medium'
  },
  {
    id: '35',
    muscle: 'Épineux du thorax',
    zone: 'back',
    exerciseName: 'L\'enroulement guidé',
    description: 'Enroulement de la colonne.',
    partnerRoleA: 'Debout, s\'enroule vertèbre par vertèbre.',
    partnerRoleB: 'Pose les mains sur le dos de A pour l\'accompagner.',
    duration: 45,
    intensity: 'low'
  }
];

export const MORNING_ROUTINE = ['1', '3', '6', '13', '18', '20'];
export const EVENING_ROUTINE = ['7', '9', '14', '17', '27', '35'];

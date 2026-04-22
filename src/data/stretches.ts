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
  funFact: string;
}

export const STRETCHES: Stretch[] = [
  // HEAD (4)
  {
    id: '1',
    muscle: 'Trapèzes',
    zone: 'head',
    exerciseName: 'Le Collier d\'Amour',
    description: 'Une promesse de légèreté pour libérer le poids du monde sur vos épaules.',
    partnerRoleA: 'Laisse ta tête pencher comme une fleur sous le soleil.',
    partnerRoleB: 'Tiens l\'épaule opposée avec tendresse, comme si tu protégeais un trésor.',
    duration: 30,
    intensity: 'low',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800',
    funFact: 'Se toucher le cou libère de l\'oxytocine, l\'hormone de l\'attachement.'
  },
  {
    id: '2',
    muscle: 'Cervicales',
    zone: 'head',
    exerciseName: 'Câlin Cervical',
    description: 'Laisse tes soucis s\'envoler dans le creux des mains de ton aimé.',
    partnerRoleA: 'Abandonne le poids de ta tête en arrière, fais confiance absolue.',
    partnerRoleB: 'Berce son crâne comme un bijou précieux entre tes paumes.',
    duration: 25,
    intensity: 'low',
    image: 'https://images.unsplash.com/photo-1599447292180-45fd84092ef0?auto=format&fit=crop&q=80&w=800',
    funFact: 'La confiance physique renforce la complicité émotionnelle entre vous.'
  },
  {
    id: '3',
    muscle: 'Scalènes',
    zone: 'head',
    exerciseName: 'Regard Suspendu',
    description: 'Une danse lente du regard pour étirer les secrets de ton cou.',
    partnerRoleA: 'Tourne le visage vers ton partenaire, cherche son sourire.',
    partnerRoleB: 'Pose une main sur sa joue, guide-le avec la douceur d\'un baiser.',
    duration: 20,
    intensity: 'low',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc2069?auto=format&fit=crop&q=80&w=800',
    funFact: 'Soutenir le regard de l\'autre ralentit le rythme cardiaque synchronisé.'
  },
  {
    id: '4',
    muscle: 'Base du crâne',
    zone: 'head',
    exerciseName: 'Éveil des Sens',
    description: 'Petits cercles magiques pour réveiller vos pensées les plus douces.',
    partnerRoleA: 'Ferme les yeux, imagine un paysage de rêve et de soie.',
    partnerRoleB: 'Dessine des constellations invisibles avec le bout de son nez.',
    duration: 30,
    intensity: 'low',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800',
    funFact: 'Masser la base du crâne aide à réduire instantanément le cortisol.'
  },
  // SHOULDERS (5)
  {
    id: '5',
    muscle: 'Pectoraux',
    zone: 'shoulders',
    exerciseName: 'Papillon Coquin',
    description: 'Ouvrez vos cœurs et vos ailes pour une dose de bonheur partagé.',
    partnerRoleA: 'Mains derrière la nuque, offre ta poitrine au monde (et à B).',
    partnerRoleB: 'Tire ses deux coudes vers l\'arrière pour révéler son cœur.',
    duration: 40,
    intensity: 'medium',
    image: 'https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?auto=format&fit=crop&q=80&w=800',
    funFact: 'Ouvrir la poitrine améliore la confiance en soi et l\'ouverture à l\'autre.'
  },
  {
    id: '6',
    muscle: 'Deltoïdes',
    zone: 'shoulders',
    exerciseName: 'Les Ailes du Désir',
    description: 'Un envol statique pour libérer l\'avant de vos épaules fatiguées.',
    partnerRoleA: 'Bras vers l\'arrière, paumes ouvertes comme pour recevoir un cadeau.',
    partnerRoleB: 'Attrape ses poignets et lève-les légèrement vers le ciel.',
    duration: 45,
    intensity: 'medium',
    image: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&q=80&w=800',
    funFact: 'Étirer les bras vers l\'arrière contrebalance les heures passées sur smartphone.'
  },
  {
    id: '7',
    muscle: 'Omoplates',
    zone: 'shoulders',
    exerciseName: 'Traction Tendresse',
    description: 'Une force douce pour décoller les soucis de ton haut du dos.',
    partnerRoleA: 'Attrape les mains de ton partenaire, arrondis ton dos de chat.',
    partnerRoleB: 'Fais office de mur de soutien, solide et rassurant.',
    duration: 35,
    intensity: 'low',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800',
    funFact: 'La sensation d\'être tracté libère les tensions respiratoires.'
  },
  {
    id: '8',
    muscle: 'Coiffe rotateurs',
    zone: 'shoulders',
    exerciseName: 'Le Chandelier Magique',
    description: 'Une rotation subtile pour graisser les rouages de vos étreintes.',
    partnerRoleA: 'Allongé, bras en équerre au sol, détends tes muscles profonds.',
    partnerRoleB: 'Appuie sur sa main pour la rapprocher du sol, sans forcer.',
    duration: 30,
    intensity: 'medium',
    image: 'https://images.unsplash.com/photo-1574680077545-1244a74c83ad?auto=format&fit=crop&q=80&w=800',
    funFact: 'La mobilité des épaules est la clé de caresses plus fluides et variées.'
  },
  {
    id: '9',
    muscle: 'Trapèzes moyens',
    zone: 'shoulders',
    exerciseName: 'Nuage de Détente',
    description: 'Une pression ferme pour effacer les nœuds de ta journée.',
    partnerRoleA: 'Posture de l\'enfant, blotti contre le sol, prêt à éclore.',
    partnerRoleB: 'Presse tes paumes sur ses omoplates, insuffle-lui ton calme.',
    duration: 60,
    intensity: 'low',
    image: 'https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?auto=format&fit=crop&q=80&w=800',
    funFact: 'Un toucher ferme mais lent signale au cerveau que tout va bien.'
  },
  // BACK (6)
  {
    id: '10',
    muscle: 'Lombaires',
    zone: 'back',
    exerciseName: 'Bascule Complice',
    description: 'Laisse la gravité faire le travail pendant que tu t\'envoles.',
    partnerRoleA: 'Porte le poids de ton partenaire avec tes jambes solides.',
    partnerRoleB: 'Détends ton dos sur le sien, bras en croix, respire fort.',
    duration: 60,
    intensity: 'medium',
    image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80&w=800',
    funFact: 'Porter le poids de l\'autre crée une connexion physique archétypale.'
  },
  {
    id: '11',
    muscle: 'Dorsaux',
    zone: 'back',
    exerciseName: 'L\'Arc de l\'Amour',
    description: 'Étire tes flancs pour faire de la place aux éclats de rire.',
    partnerRoleA: 'Incline ton buste comme un roseau amoureux au vent.',
    partnerRoleB: 'Tire sa main pour allonger sa silhouette de rêve.',
    duration: 40,
    intensity: 'medium',
    image: 'https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?auto=format&fit=crop&q=80&w=800',
    funFact: 'Étirer les côtés du corps libère la cage thoracique pour mieux respirer.'
  },
  {
    id: '12',
    muscle: 'Érecteurs rachis',
    zone: 'back',
    exerciseName: 'Cobra Duo',
    description: 'Redressez-vous ensemble vers une nouvelle énergie vibrante.',
    partnerRoleA: 'Sur le ventre, lève le buste fièrement vers ton partenaire.',
    partnerRoleB: 'Tiens ses mains et aide-le à regarder le ciel étoilé.',
    duration: 30,
    intensity: 'medium',
    image: 'https://images.unsplash.com/photo-1549576490-b0b4831da60a?auto=format&fit=crop&q=80&w=800',
    funFact: 'Les extensions de dos sont naturellement énergisantes et anti-fatigue.'
  },
  {
    id: '13',
    muscle: 'Sacrum',
    zone: 'back',
    exerciseName: 'Le Point de Paix',
    description: 'Une pression sur le sacrum pour ancrer votre union au sol.',
    partnerRoleA: 'Relâche tout ton bas du dos, expire toute l\'air résiduel.',
    partnerRoleB: 'Pose tes paumes au bas de son dos, fais-le fondre.',
    duration: 50,
    intensity: 'low',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800',
    funFact: 'Le sacrum est une zone riche en plexus nerveux liés à la détente.'
  },
  {
    id: '14',
    muscle: 'Carré lombes',
    zone: 'back',
    exerciseName: 'La Spirale du Désir',
    description: 'Une torsion ludique pour ne rien rater de votre partenaire.',
    partnerRoleA: 'Assis croisé, tourne-toi vers ton partenaire, cherche le contact.',
    partnerRoleB: 'Aide-le à aller un millimètre plus loin dans sa rotation.',
    duration: 45,
    intensity: 'medium',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800',
    funFact: 'Les torsions massent les organes internes et favorisent la détox.'
  },
  {
    id: '15',
    muscle: 'Rhomboïdes',
    zone: 'back',
    exerciseName: 'Face-à-Face Fusion',
    description: 'Se regarder droit dans les yeux en ouvrant ses omoplates.',
    partnerRoleA: 'Tient fermement les mains de B, s\'assoit en arrière.',
    partnerRoleB: 'Compense le poids, crée une tension de soie entre vous.',
    duration: 40,
    intensity: 'low',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800',
    funFact: 'L\'équilibre partagé renforce le sentiment de soutien mutuel.'
  },
  // ARMS (5)
  {
    id: '16',
    muscle: 'Biceps',
    zone: 'arms',
    exerciseName: 'Le Pacte des Mains',
    description: 'Bras allongés vers l\'infini pour des caresses sans fin.',
    partnerRoleA: 'Tends tes bras derrière, paumes prêtes à être saisies.',
    partnerRoleB: 'Lève ses bras doucement, comme si tu ouvrais un rideau.',
    duration: 30,
    intensity: 'medium',
    image: 'https://images.unsplash.com/photo-1554062635-420367280da7?auto=format&fit=crop&q=80&w=800',
    funFact: 'De longs biceps facilitent la portée et les gestes amples.'
  },
  {
    id: '17',
    muscle: 'Triceps',
    zone: 'arms',
    exerciseName: 'Point de Haute Tension',
    description: 'Étire l\'arrière de tes bras pour plus de force dans l\'étreinte.',
    partnerRoleA: 'Coude vers le ciel, main dans le dos, cherche le contact.',
    partnerRoleB: 'Appuie sur son coude avec la légèreté d\'une plume de cygne.',
    duration: 35,
    intensity: 'low',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
    funFact: 'Les triceps souples permettent de porter son partenaire avec plus d\'aisance.'
  },
  {
    id: '18',
    muscle: 'Fléchisseurs main',
    zone: 'arms',
    exerciseName: 'Main dans la Main',
    description: 'Préparez vos mains pour des massages de haute précision.',
    partnerRoleA: 'Offre ta main ouverte, doigts pointés vers l\'épaule.',
    partnerRoleB: 'Ramène doucement ses doigts vers lui, sens la chaleur.',
    duration: 20,
    intensity: 'low',
    image: 'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?auto=format&fit=crop&q=80&w=800',
    funFact: 'Le bout de nos doigts contient plus de 3000 récepteurs tactiles.'
  },
  {
    id: '19',
    muscle: 'Extenseurs main',
    zone: 'arms',
    exerciseName: 'Secret de Paume',
    description: 'Une flexion inversée pour détendre vos doigts de pianiste.',
    partnerRoleA: 'Poignet cassé vers le bas, offre le dos de ta main.',
    partnerRoleB: 'Presse doucement pour libérer le dessus de l\'avant-bras.',
    duration: 20,
    intensity: 'low',
    image: 'https://images.unsplash.com/photo-1519781542704-957ff19eff00?auto=format&fit=crop&q=80&w=800',
    funFact: 'Détendre les mains réduit le stress général du système nerveux.'
  },
  {
    id: '20',
    muscle: 'Sous-scapulaire',
    zone: 'arms',
    exerciseName: 'Rotation de Velours',
    description: 'Explore la profondeur de tes épaules avec ton partenaire.',
    partnerRoleA: 'Main derrière le dos, coude relaxé vers le bas.',
    partnerRoleB: 'Écarte doucement sa main de son dos, sens la résistance.',
    duration: 30,
    intensity: 'medium',
    image: 'https://images.unsplash.com/photo-1574680077545-1244a74c83ad?auto=format&fit=crop&q=80&w=800',
    funFact: 'Ce muscle caché est souvent responsable des épaules rentrées.'
  },
  // HIPS (5)
  {
    id: '21',
    muscle: 'Psoas',
    zone: 'hips',
    exerciseName: 'Éveil du Bassin',
    description: 'Ouvre tes hanches pour une liberté de mouvement sauvage.',
    partnerRoleA: 'Grand pas en avant, bassin vers le sol, fier et vibrant.',
    partnerRoleB: 'Soutient ton équilibre en tenant tes mains avec douceur.',
    duration: 45,
    intensity: 'high',
    image: 'https://images.unsplash.com/photo-1549576490-b0b4831da60a?auto=format&fit=crop&q=80&w=800',
    funFact: 'Le psoas est appelé le muscle de l\'âme car il stocke les émotions.'
  },
  {
    id: '22',
    muscle: 'Grand fessier',
    zone: 'hips',
    exerciseName: 'Le Berceau du Désir',
    description: 'Un étirement profond pour des fesses souples et rebondies.',
    partnerRoleA: 'Allongé sur le dos, croise tes jambes, prépare-toi à la détente.',
    partnerRoleB: 'Pousse son genou vers son cœur, respire avec lui.',
    duration: 50,
    intensity: 'medium',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800',
    funFact: 'Des fessiers souples préviennent les douleurs lombaires chroniques.'
  },
  {
    id: '23',
    muscle: 'Adducteurs',
    zone: 'hips',
    exerciseName: 'L\'Éclat du Papillon',
    description: 'Ouverture frontale pour une connexion intime au sol.',
    partnerRoleA: 'Pieds joints, genoux ouverts, offre ta vulnérabilité.',
    partnerRoleB: 'Presse doucement sur ses genoux avec tes paumes chaudes.',
    duration: 60,
    intensity: 'medium',
    image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&q=80&w=800',
    funFact: 'La souplesse des adducteurs facilite de nombreuses positions en duo.'
  },
  {
    id: '24',
    muscle: 'Moyen fessier',
    zone: 'hips',
    exerciseName: 'Torsion de Soie',
    description: 'Un mouvement spiralé pour délier les tensions des hanches.',
    partnerRoleA: 'Jambe croisée, pivote vers ton partenaire, rayonne.',
    partnerRoleB: 'Aide son buste à gagner quelques degrés de plaisir.',
    duration: 40,
    intensity: 'medium',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800',
    funFact: 'Débloquer les hanches libère de l\'énergie créative et sexuelle.'
  },
  {
    id: '25',
    muscle: 'Hanches globales',
    zone: 'hips',
    exerciseName: 'Danse du Bassin',
    description: 'Bercer son partenaire pour un moment de pur lâcher-prise.',
    partnerRoleA: 'Jambes pliées, abandonne le contrôle de tes hanches.',
    partnerRoleB: 'Oscille ses genoux de gauche à droite, sois son métronome.',
    duration: 45,
    intensity: 'low',
    image: 'https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?auto=format&fit=crop&q=80&w=800',
    funFact: 'Le bercement synchronise les ondes cérébrales des deux amants.'
  },
  // LEGS (6)
  {
    id: '26',
    muscle: 'Ischio-jambiers',
    zone: 'legs',
    exerciseName: 'Câlin Ischio',
    description: 'Lève ta jambe vers les étoiles pour une longueur infinie.',
    partnerRoleA: 'Allongé, jambe verticale, prête à être guidée.',
    partnerRoleB: 'Ramène doucement son pied vers sa tête, sois progressif.',
    duration: 60,
    intensity: 'high',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
    funFact: 'Des ischio-jambiers souples permettent d\'avoir le dos plus plat.'
  },
  {
    id: '27',
    muscle: 'Quadriceps',
    zone: 'legs',
    exerciseName: 'Le Talon Fondant',
    description: 'Étire le devant de ta cuisse pour plus de fougue et d\'élan.',
    partnerRoleA: 'Sur le ventre, offre ta jambe au partenaire debout.',
    partnerRoleB: 'Ramène son talon vers sa fesse avec ton poids du corps.',
    duration: 45,
    intensity: 'medium',
    image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80&w=800',
    funFact: 'Les quadriceps sont les muscles les plus puissants du corps humain.'
  },
  {
    id: '28',
    muscle: 'Mollets',
    zone: 'legs',
    exerciseName: 'Poussée Complice',
    description: 'Soutiens ton partenaire pour un étirement du bas de jambe.',
    partnerRoleA: 'Talon au sol, pousse contre ton partenaire solide.',
    partnerRoleB: 'Reçois sa force, sois son point d\'ancrage immuable.',
    duration: 35,
    intensity: 'medium',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800',
    funFact: 'Le mollet est souvent appelé le deuxième cœur du corps.'
  },
  {
    id: '29',
    muscle: 'Bandelette ilio',
    zone: 'legs',
    exerciseName: 'Courbe de Plaisir',
    description: 'Un arc latéral des jambes pour une silhouette harmonieuse.',
    partnerRoleA: 'Jambes croisées, laisse ta hanche sortir vers le côté.',
    partnerRoleB: 'Pousse délicatement sa hanche pour accentuer la courbe.',
    duration: 30,
    intensity: 'medium',
    image: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&q=80&w=800',
    funFact: 'Cet étirement est vital pour ceux qui aiment courir ensemble.'
  },
  {
    id: '30',
    muscle: 'Tibias',
    zone: 'legs',
    exerciseName: 'Pétales de Tibia',
    description: 'Étirez l\'avant de vos jambes pour une démarche de gazelle.',
    partnerRoleA: 'Assis sur les talons, lève légèrement un genou.',
    partnerRoleB: 'Aide le genou à monter d\'un millimètre de bonheur.',
    duration: 25,
    intensity: 'low',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800',
    funFact: 'Des tibias détendus évitent les douleurs de marche prolongée.'
  },
  {
    id: '31',
    muscle: 'Adducteurs profonds',
    zone: 'legs',
    exerciseName: 'Le Grand Écart Doux',
    description: 'Une ouverture latérale pour une souplesse de rêve.',
    partnerRoleA: 'Jambes écartées au maximum, mains tendues vers B.',
    partnerRoleB: 'Tire les mains de A pour l\'aider à plonger en avant.',
    duration: 60,
    intensity: 'high',
    image: 'https://images.unsplash.com/photo-1485727749690-d091e8284ef3?auto=format&fit=crop&q=80&w=800',
    funFact: 'La souplesse du bassin est directement liée à l\'estime de soi.'
  },
  // FEET (4)
  {
    id: '32',
    muscle: 'Arche plantaire',
    zone: 'feet',
    exerciseName: 'Le Pas de Deux',
    description: 'Préparez vos pieds pour une danse nocturne passionnée.',
    partnerRoleA: 'Offre ton pied, laisse B manipuler ton socle de vie.',
    partnerRoleB: 'Fais bouger ses articulations comme des touches de piano.',
    duration: 40,
    intensity: 'low',
    image: 'https://images.unsplash.com/photo-1519781542704-957ff19eff00?auto=format&fit=crop&q=80&w=800',
    funFact: 'Les pieds contiennent plus de 72 000 terminaisons nerveuses.'
  },
  {
    id: '33',
    muscle: 'Orteils',
    zone: 'feet',
    exerciseName: 'Pétales de Pied',
    description: 'Une attention particulière pour tes doigts de pied fatigués.',
    partnerRoleA: 'Détends tes orteils, imagine-les flotter dans l\'eau.',
    partnerRoleB: 'Écarte et masse chaque orteil comme une perle rare.',
    duration: 25,
    intensity: 'low',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc2069?auto=format&fit=crop&q=80&w=800',
    funFact: 'La santé des orteils influence tout l\'équilibre de la posture.'
  },
  {
    id: '34',
    muscle: 'Cheville',
    zone: 'feet',
    exerciseName: 'Tournoiement de Soie',
    description: 'Rendez vos chevilles aussi souples que l\'eau vive.',
    partnerRoleA: 'Jambe tendue, abandonne tout le poids de ton pied.',
    partnerRoleB: 'Dessine des grands cercles lents, sens la fluidité s\'installer.',
    duration: 30,
    intensity: 'low',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800',
    funFact: 'Des chevilles mobiles réduisent les risques de chute et d\'entorse.'
  },
  {
    id: '35',
    muscle: 'Toute la jambe',
    zone: 'feet',
    exerciseName: 'L\'Envol des Amoureux',
    description: 'Une traction finale pour vous sentir léger comme une plume.',
    partnerRoleA: 'Allongé, imagine que tes jambes s\'allongent à l\'infini.',
    partnerRoleB: 'Tire ses deux chevilles vers toi, crée de l\'espace.',
    duration: 50,
    intensity: 'medium',
    image: 'https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?auto=format&fit=crop&q=80&w=800',
    funFact: 'S\'étirer ensemble avant de dormir améliore la qualité du sommeil.'
  }
];

export const MORNING_ROUTINE = ['1', '5', '12', '21', '26', '35'];
export const EVENING_ROUTINE = ['2', '9', '10', '13', '25', '32'];

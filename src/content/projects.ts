import type { Project } from '@/types/project';

export const projects: Project[] = [
  {
    slug: 'living-layers',
    title: 'Living Layers',
    subtitle: 'Regenerative Co-Living Retreat',
    year: '2025',
    course: 'AR5802 Options Design Research Studio 2',
    institution: 'National University of Singapore',
    location: 'Sabah, Malaysia',
    typology: 'Regenerative Retreat',
    featured: true,
    order: 1,
    heroImage: '/images/projects/living-layers/perspective-5.png',
    thumbnailImage: '/images/projects/living-layers/perspective-1.png',
    concept:
      'Architecture not as isolated object, but as ecology — moving in rhythm with the land, responding to its flows, giving back more than it takes.',
    overview: `Living Layers proposes a regenerative co-living retreat embedded within the ecologically sensitive RAMSAR-listed wetlands of Sabah, Malaysia. Working within a landscape shaped by extraordinary biodiversity and indigenous cultural heritage — from the Danum Valley rainforest to the slopes of Mount Kinabalu — the project treats architecture not as an imposition but as a participant in an existing ecosystem.

The design is organised around a circular loop: rainwater is captured, organic waste is transformed, and food is cultivated — a continuous cycle that sustains both the building's inhabitants and the land it occupies. Co-living becomes not merely a spatial strategy but a social framework, bringing local communities and international visitors into shared daily rhythms across five interconnected programme layers: the Skyline Deck, Shared Layers, Co-Living Apartments, Harvest Ground, and Liquid Canopy.

The project adopts Prefinished Prefabricated Volumetric Construction (PPVC) using Mass Engineered Timber (MET). Off-site fabrication minimises on-site waste, construction time, and noise disruption — critical on an ecologically sensitive wetland site. MET provides excellent thermal insulation and humidity regulation suited to the tropical climate, while passive cooling strategies and rainwater harvesting substantially reduce operational energy demand.`,
    tags: ['regenerative', 'co-living', 'mass-timber', 'tropical', 'sustainability'],
    images: [
      {
        src: '/images/projects/living-layers/intro.jpg',
        alt: 'Site context — Sabah RAMSAR wetlands',
        caption: 'Sabah, Malaysia — RAMSAR-listed wetland landscape',
        type: 'context',
        layout: 'half',
        annotation:
          'Sabah, Malaysia — a RAMSAR-listed wetland landscape defined by extraordinary biodiversity and indigenous cultural heritage, from the Danum Valley rainforest to the slopes of Mount Kinabalu. The project treats this site not as an obstacle but as a teacher — a model of ecological reciprocity that the architecture must learn from.',
      },
      {
        src: '/images/projects/living-layers/section.png',
        alt: 'Building section',
        caption: 'Section',
        type: 'section',
        layout: 'full',
      },
      {
        src: '/images/projects/living-layers/structural-diagram.png',
        alt: 'Structural diagram showing PPVC and Mass Engineered Timber system',
        caption: 'Structural diagram — PPVC with Mass Engineered Timber',
        type: 'diagram',
        layout: 'full',
      },
      {
        src: '/images/projects/living-layers/overall.png',
        alt: 'Overall view of the retreat',
        caption: 'Overall view',
        type: 'render',
        layout: 'full',
      },
      {
        src: '/images/projects/living-layers/top-view.png',
        alt: "Bird's eye view of masterplan",
        caption: "Bird's eye plan",
        type: 'plan',
        layout: 'half',
      },
      {
        src: '/images/projects/living-layers/legend.png',
        alt: 'Programme legend',
        caption: 'Programme legend',
        type: 'diagram',
        layout: 'half',
      },
      {
        src: '/images/projects/living-layers/perspective-3.png',
        alt: 'Shared Layers',
        caption: 'Shared Layers',
        type: 'render',
        layout: 'full',
      },
      {
        src: '/images/projects/living-layers/perspective-1.png',
        alt: 'Skyline Deck',
        caption: 'Skyline Deck',
        type: 'render',
        layout: 'half',
      },
      {
        src: '/images/projects/living-layers/perspective-4.png',
        alt: 'Co-Living Apartment',
        caption: 'Co-Living Apartment',
        type: 'render',
        layout: 'half',
      },
      {
        src: '/images/projects/living-layers/perspective-5.png',
        alt: 'Harvest Ground',
        caption: 'Harvest Ground',
        type: 'render',
        layout: 'half',
      },
      {
        src: '/images/projects/living-layers/perspective-6.png',
        alt: 'Liquid Canopy — the fifth programme layer',
        caption: 'Liquid Canopy',
        type: 'render',
        layout: 'half',
      },
    ],
  },

  {
    slug: 'beyond-earth',
    title: 'Beyond Earth',
    subtitle: 'Seven-Storey Office Building',
    year: '2025',
    course: 'AR5321 Advanced Architectural Integration',
    institution: 'National University of Singapore',
    location: 'Darmstadt, Germany',
    typology: 'Office',
    collaborators: 'Group project',
    featured: true,
    order: 2,
    heroImage: '/images/projects/beyond-earth/cover.png',
    thumbnailImage: '/images/projects/beyond-earth/cover.png',
    concept:
      'Letting the material intelligence of the earth define the building\'s climate response — rammed earth and mass timber as passive thermal strategy.',
    overview: `Beyond Earth is a seven-storey office building designed for Darmstadt, Germany, developed as part of an Advanced Architectural Integration studio at NUS. The project investigates how vernacular materials — specifically rammed earth and mass engineered timber — can be redeployed in a contemporary office context to address the thermal and structural demands of a central European climate.

Rammed earth walls provide thermal mass: absorbing solar heat during the day and releasing it slowly at night, substantially reducing mechanical heating and cooling loads. The structural integration of mass timber with the earthen wall system is explored through three system diagrams, which document the material logic from structural bay to facade panel to building section.

This project was developed as a group collaboration, with a focus on passive environmental strategy and facade material integration.`,
    tags: ['office', 'rammed-earth', 'mass-timber', 'passive', 'germany'],
    images: [
      {
        src: '/images/projects/beyond-earth/diagram-1.png',
        alt: 'Material and structural system diagram',
        caption: 'Material and structural system',
        type: 'diagram',
        layout: 'full',
      },
      {
        src: '/images/projects/beyond-earth/diagram-2.png',
        alt: 'Environmental strategy diagram',
        caption: 'Environmental strategy',
        type: 'diagram',
        layout: 'full',
      },
      {
        src: '/images/projects/beyond-earth/diagram-3.png',
        alt: 'Facade integration diagram',
        caption: 'Facade integration',
        type: 'diagram',
        layout: 'full',
      },
    ],
  },

  {
    slug: 'windwave',
    title: 'Windwave',
    subtitle: 'Wind-Harvesting Arts Cultural Centre',
    year: '2024',
    course: 'AR3102 Design 6',
    institution: 'National University of Singapore',
    location: 'Gardens by the Bay, Singapore',
    typology: 'Cultural Centre',
    featured: true,
    order: 3,
    heroImage: '/images/projects/windwave/axo.png',
    thumbnailImage: '/images/projects/windwave/cover.png',
    concept:
      'Form derived from the intelligence of natural aerodynamics — wind not as constraint, but as architect.',
    overview: `Windwave is an arts and cultural centre sited at Gardens by the Bay, Singapore, designed from the aerodynamic logic of wind. The project begins not with a building typology but with a natural system: the feather morphology of birds, specifically the way individual feather elements negotiate airflow through overlapping geometry and variable surface angles.

A sequence of formal studies translates these aerodynamic principles into architectural geometry, developing a building envelope whose profile actively channels prevailing winds through the structure. Computational Fluid Dynamics (CFD) simulations validate the aerodynamic performance of the form, demonstrating both passive cooling potential and the capacity to harvest wind energy as a supplement to the building's operational energy load.

The spatial organisation flows from the section — the wind-driven envelope geometry shapes gallery volumes, public terraces, and circulation paths. Ground floor and upper floor plans reveal a building that turns its back to the road and opens toward the bay, with facades calibrated to the prevailing wind direction. The axonometric presents the building as a single resolved form: fluid, directional, and aerodynamically coherent.`,
    tags: ['cultural', 'parametric', 'wind', 'cfd', 'singapore'],
    images: [
      {
        src: '/images/projects/windwave/cover.png',
        alt: 'Windwave — exterior view',
        caption: '',
        type: 'render',
        layout: 'half',
        annotation:
          'Windwave is an arts and cultural centre sited at Gardens by the Bay, Singapore, designed from the aerodynamic logic of wind. The project begins with a natural system: the feather morphology of birds, and how individual feather elements negotiate airflow through overlapping geometry and variable surface angles.',
      },
      {
        src: '/images/projects/windwave/bird-morpho.png',
        alt: 'Bird feather morphology study — formal derivation sequence',
        caption: 'Bird feather morphology — formal derivation',
        type: 'process',
        layout: 'half',
        annotation:
          'Bird feather morphology study: each feather\'s overlapping structure negotiates airflow through variable surface angles, providing lift and directional control. This aerodynamic logic — studied across five formal iterations — becomes the generative principle for the building\'s envelope geometry.',
      },
      {
        src: '/images/projects/windwave/bird-morpho-2.png',
        alt: 'Bird feather morphology study 2',
        caption: '',
        type: 'process',
        layout: 'third',
      },
      {
        src: '/images/projects/windwave/bird-morpho-3.png',
        alt: 'Bird feather morphology study 3',
        caption: '',
        type: 'process',
        layout: 'third',
      },
      {
        src: '/images/projects/windwave/bird-morpho-4.png',
        alt: 'Bird feather morphology study 4',
        caption: '',
        type: 'process',
        layout: 'half',
      },
      {
        src: '/images/projects/windwave/bird-morpho-5.png',
        alt: 'Bird feather morphology study 5',
        caption: '',
        type: 'process',
        layout: 'half',
      },
      {
        src: '/images/projects/windwave/cfd-1.png',
        alt: 'CFD simulation — wind flow analysis',
        caption: 'CFD simulation — wind flow analysis',
        type: 'diagram',
        layout: 'half',
      },
      {
        src: '/images/projects/windwave/cfd-2.png',
        alt: 'CFD simulation — pressure distribution',
        caption: 'CFD simulation — pressure distribution',
        type: 'diagram',
        layout: 'half',
      },
      {
        src: '/images/projects/windwave/ground-fp.png',
        alt: 'Ground floor plan',
        caption: 'Ground floor plan',
        type: 'plan',
        layout: 'full',
      },
      {
        src: '/images/projects/windwave/second-thirdfp.png',
        alt: 'Second and third floor plans',
        caption: 'Second and third floor plans',
        type: 'plan',
        layout: 'full',
      },
      {
        src: '/images/projects/windwave/axo.png',
        alt: 'Axonometric view of the cultural centre',
        caption: 'Axonometric',
        type: 'render',
        layout: 'full',
      },
    ],
  },

  {
    slug: 'boundless-horizons',
    title: 'Boundless Horizons',
    subtitle: 'Cultural Library and Pottery Workshop',
    year: '2023',
    course: 'ARE3058 Design Studio',
    institution: 'Hanyang University (NUS Exchange)',
    location: 'Seochon, Seoul, South Korea',
    typology: 'Cultural Library',
    featured: false,
    order: 4,
    heroImage: '/images/projects/boundless-horizons/perspective-1.png',
    thumbnailImage: '/images/projects/boundless-horizons/perspective-1.png',
    concept:
      'Architecture that negotiates the historic layers of Seochon — courtyards as quiet social contracts between past and present.',
    overview: `Boundless Horizons proposes a cultural library and pottery workshop in Seochon, one of Seoul's most historically preserved urban neighbourhoods. Designed during an exchange semester at Hanyang University, the project draws directly from the physical logic of the site — the hierarchy of existing alleys, the rhythm of traditional courtyard houses, and the gentle topography of the hillside.

The building does not impose a foreign typology but weaves itself into the existing urban grain. Courtyards become the generative element: public, semi-public, and private thresholds are organised through a sequence of progressively inward-facing outdoor spaces. The library occupies the upper levels, with views across the Seochon roofscape, while the pottery workshop at ground floor opens onto the alleyway, connecting the building to the neighbourhood's artisan culture.

Four floor plans document the spatial layering from public street level through to the elevated reading rooms. The section and southern elevation reveal the building's relationship to the ground — stepping with the topography, opening to light, and maintaining a contextual scale alongside its neighbours.`,
    tags: ['cultural', 'contextual', 'seoul', 'exchange', 'library'],
    images: [
      {
        src: '/images/projects/boundless-horizons/axo.jpg',
        alt: 'Axonometric overview of the cultural library',
        caption: 'Axonometric overview',
        type: 'render',
        layout: 'full',
      },
      {
        src: '/images/projects/boundless-horizons/perspective-2.png',
        alt: 'Courtyard',
        caption: 'Courtyard',
        type: 'render',
        layout: 'half',
      },
      {
        src: '/images/projects/boundless-horizons/perspective-3.png',
        alt: 'Library interior',
        caption: 'Library interior',
        type: 'render',
        layout: 'half',
      },
      {
        src: '/images/projects/boundless-horizons/perspective-4.png',
        alt: 'Pottery workshop — ground floor',
        caption: 'Pottery workshop',
        type: 'render',
        layout: 'half',
      },
      {
        src: '/images/projects/boundless-horizons/perspective-5.png',
        alt: 'Reading room — elevated level',
        caption: 'Reading room',
        type: 'render',
        layout: 'half',
      },
      {
        src: '/images/projects/boundless-horizons/first-fp.jpg',
        alt: 'Ground floor plan',
        caption: 'Ground floor plan',
        type: 'plan',
        layout: 'half',
      },
      {
        src: '/images/projects/boundless-horizons/second-fp.jpg',
        alt: 'Second floor plan',
        caption: 'Second floor plan',
        type: 'plan',
        layout: 'half',
      },
      {
        src: '/images/projects/boundless-horizons/third-fp.jpg',
        alt: 'Third floor plan',
        caption: 'Third floor plan',
        type: 'plan',
        layout: 'half',
      },
      {
        src: '/images/projects/boundless-horizons/forth-fp.jpg',
        alt: 'Fourth floor plan',
        caption: 'Fourth floor plan',
        type: 'plan',
        layout: 'half',
      },
      {
        src: '/images/projects/boundless-horizons/section-b.jpg',
        alt: 'Section through the building',
        caption: 'Section',
        type: 'section',
        layout: 'half',
      },
      {
        src: '/images/projects/boundless-horizons/south-elevation.jpg',
        alt: 'South elevation',
        caption: 'South elevation',
        type: 'elevation',
        layout: 'half',
      },
    ],
  },

  {
    slug: 'dynamicscape',
    title: 'DynamicScape',
    subtitle: 'Adaptive Facade Retrofit',
    year: '2023',
    course: 'AR2102 Design 4',
    institution: 'National University of Singapore',
    location: 'Nan Hua High School, Singapore',
    typology: 'Educational Retrofit',
    collaborators: 'Ng Guang Ze',
    featured: false,
    order: 5,
    heroImage: '/images/projects/dynamicscape/cover.png',
    thumbnailImage: '/images/projects/dynamicscape/cover.png',
    concept:
      'A facade that breathes — designed at the convergence of real-world physical testing and computational environmental simulation.',
    overview: `DynamicScape addresses a persistent condition in Singapore's existing school buildings: inadequate natural ventilation and daylighting in the classroom corridors and common areas of Nan Hua High School. Rather than replacing the existing structure, the project proposes a kinetic facade retrofit — a system of adaptive perforated panels that modulate airflow and light penetration in response to environmental conditions.

The design process integrates physical box-testing with Computational Fluid Dynamics (CFD) and illuminance simulations. A scaled physical model validated airflow strategies before computational tools refined the panel geometry and perforation patterns. The simulation outputs directly informed the final facade design: panel angles, perforation ratios, and the spatial organisation of the opening system.

The result is an envelope layer that responds to Singapore's equatorial climate by providing shade when the sun is high, channelling cross-ventilation when wind conditions allow, and maintaining visual connection to the landscape. Designed in collaboration with Ng Guang Ze.`,
    tags: ['educational', 'parametric', 'facade', 'computational', 'retrofit'],
    images: [
      {
        src: '/images/projects/dynamicscape/analysis.png',
        alt: 'Site and environmental analysis',
        caption: 'Site and environmental analysis',
        type: 'process',
        layout: 'full',
      },
      {
        src: '/images/projects/dynamicscape/airflow-simulation.png',
        alt: 'CFD airflow simulation',
        caption: 'CFD airflow simulation',
        type: 'diagram',
        layout: 'half',
      },
      {
        src: '/images/projects/dynamicscape/illuminance-simulation.png',
        alt: 'Illuminance simulation',
        caption: 'Illuminance simulation',
        type: 'diagram',
        layout: 'half',
      },
      {
        src: '/images/projects/dynamicscape/box-test.png',
        alt: 'Physical box test model — airflow validation',
        caption: 'Physical box test — airflow validation',
        type: 'process',
        layout: 'full',
      },
      {
        src: '/images/projects/dynamicscape/diagram-1.png',
        alt: 'Adaptive panel system diagram',
        caption: 'Adaptive panel system',
        type: 'diagram',
        layout: 'half',
      },
      {
        src: '/images/projects/dynamicscape/diagram.png',
        alt: 'Facade overview diagram',
        caption: 'Facade overview',
        type: 'diagram',
        layout: 'half',
      },
      {
        src: '/images/projects/dynamicscape/diagram-2.png',
        alt: 'Panel configuration strategy diagram',
        caption: 'Panel configuration strategy',
        type: 'diagram',
        layout: 'full',
      },
    ],
  },

  {
    slug: 'diverging-paths',
    title: 'Diverging Paths',
    subtitle: 'Collective Dwelling',
    year: '2022',
    course: 'AR2101 Design 3',
    institution: 'National University of Singapore',
    location: 'Singapore',
    typology: 'Housing',
    featured: false,
    order: 6,
    heroImage: '/images/projects/diverging-paths/cover.jpg',
    thumbnailImage: '/images/projects/diverging-paths/cover.jpg',
    concept:
      'Running away versus reaching out — a dwelling born from the spatial tension of a short film.',
    overview: `Diverging Paths is a collective dwelling developed in response to the Singaporean short film Sandcastle (2010, directed by Boo Junfeng). The film's central tension — between the desire to escape and the pull of community — becomes a spatial diagram: the house as a field of solids and voids, each threshold negotiating between private withdrawal and shared belonging.

The massing strategy begins with aggregation: a series of discrete volumes accumulated and eroded to produce a building that reads simultaneously as one structure and many. The exploded axonometric reveals the formal logic — each unit retains its own identity while contributing to a collective silhouette. Alleyways, bridges, and shared courts form the connective tissue between them.

The ground floor plan and emotive section document the building's spatial narrative: the way natural light falls between volumes, the way movement through the building oscillates between exposure and enclosure. The emotive section translates the film's tonal arc into architectural cross-section — from the tight private spaces at the building's edges to the open communal heart at its centre.`,
    tags: ['housing', 'narrative', 'collective', 'massing', 'film-reference'],
    images: [
      {
        src: '/images/projects/diverging-paths/intro-1.jpg',
        alt: 'Concept context',
        caption: 'Concept context',
        type: 'context',
        layout: 'half',
        objectFit: 'contain',
      },
      {
        src: '/images/projects/diverging-paths/intro-2.jpg',
        alt: 'Spatial narrative reference',
        caption: '',
        type: 'context',
        layout: 'half',
        objectFit: 'contain',
      },
      {
        src: '/images/projects/diverging-paths/massing-aggregation.jpg',
        alt: 'Massing aggregation study',
        caption: 'Massing aggregation',
        type: 'diagram',
        layout: 'full',
      },
      {
        src: '/images/projects/diverging-paths/exploded-massing.jpg',
        alt: 'Exploded massing diagram',
        caption: 'Exploded massing',
        type: 'diagram',
        layout: 'dominant',
      },
      {
        src: '/images/projects/diverging-paths/ground-floor-plan.jpg',
        alt: 'Ground floor plan',
        caption: 'Ground floor plan',
        type: 'plan',
        layout: 'half',
      },
      {
        src: '/images/projects/diverging-paths/section.jpg',
        alt: 'Building section',
        caption: 'Section',
        type: 'section',
        layout: 'half',
      },
      {
        src: '/images/projects/diverging-paths/emotive-section.jpg',
        alt: 'Emotive section drawing',
        caption: 'Emotive section',
        type: 'section',
        layout: 'full',
      },
    ],
  },

  {
    slug: 'tropivilla-r',
    title: 'TropiVillaR',
    subtitle: 'Tropical Villa Design',
    year: '2023',
    course: '[needs Zoey input]',
    institution: 'National University of Singapore',
    location: '[needs Zoey input]',
    typology: 'Residential',
    featured: false,
    order: 7,
    thumbnailImage: '/images/projects/tropivilla-r/diagram.jpg',
    concept: '[needs Zoey input — concept statement for TropiVillaR]',
    overview: '[needs Zoey input — project description for TropiVillaR]',
    tags: ['residential', 'tropical'],
    images: [
      {
        src: '/images/projects/tropivilla-r/diagram.jpg',
        alt: 'TropiVillaR concept diagram',
        caption: 'Concept diagram',
        type: 'diagram',
        layout: 'full',
      },
    ],
  },
];

Tsunamis — An Advanced Course
══════════════════════════════════════════

Introduction
─────────────────────────────────

A tsunami is a train of long-period gravity waves generated when a large volume of water is displaced impulsively, most often by vertical motion of the seafloor during a subduction-zone earthquake, but also by submarine and subaerial landslides, volcanic eruptions and flank collapses, moving atmospheric pressure disturbances and, very rarely, bolide impacts. What sets tsunamis apart from wind waves is scale: wavelengths of tens to hundreds of kilometres, periods of roughly five minutes to over an hour, and the involvement of the entire water column from surface to seabed. In the deep ocean an earthquake tsunami may be less than a metre high and pass unnoticed beneath a ship, yet it carries enough energy across an ocean basin to flood coastlines thousands of kilometres from its source.

The modern science of tsunamis is barely seventy years old as an organised discipline. The 1946 Aleutian tsunami, which killed about 160 people in Hawaii nearly five hours after the earthquake, led directly to the first operational warning system in 1949. The 1960 Chile and 1964 Alaska earthquakes established that great tsunamis are produced by megathrust ruptures on subduction zones. The 2004 Indian Ocean catastrophe, with roughly 230,000 dead, exposed the absence of warning infrastructure outside the Pacific, while the 2011 Tōhoku tsunami showed that even the best-prepared nation could be overwhelmed when a hazard assessment underestimated the largest possible event. More recent events, such as the 2018 Palu and Anak Krakatau tsunamis and the 2022 Hunga Tonga–Hunga Haʻapai eruption, have pushed attention towards non-seismic and atmospheric sources that conventional warning systems were not designed to detect.

This course treats tsunamis as a problem in geophysical fluid dynamics, seismology, observation, engineering and risk governance. It assumes familiarity with calculus, basic fluid mechanics and elementary seismology. Equations are given in SI units with g = 9.81 m/s² and seawater density ρ ≈ 1,025 kg/m³ unless otherwise stated. Death tolls and physical parameters for historical events are frequently uncertain; where reputable sources disagree, ranges are given.

In this course, you will:

  1. Derive the long-wave (shallow-water) approximation, the speed c = √(gh), and the conditions under which dispersion matters
  2. Relate earthquake source parameters (seismic moment, slip, fault geometry) to the initial sea-surface displacement and tsunami energy
  3. Compare the physics of landslide, volcanic, meteorological and impact tsunamis with seismic tsunamis, including tsunami earthquakes
  4. Describe how tsunamis are propagated numerically and how travel-time and maximum-amplitude maps are produced
  5. Apply Green's law, refraction and resonance concepts to explain amplification near coasts and in harbours
  6. Estimate run-up, inundation flow depths and hydrodynamic loads on structures
  7. Use tsunami magnitude and intensity scales and the basics of probabilistic tsunami hazard analysis
  8. Explain how seismic networks, DART bottom-pressure recorders, tide gauges, cabled observatories and GNSS feed into warning centres
  9. Evaluate inundation mapping, evacuation planning, vertical evacuation structures and coastal defences
  10. Interpret paleotsunami deposits and apply the lessons of historical case studies

─────────────────────────────────
Lesson 1: Long-Wave Theory and Tsunami Speed
─────────────────────────────────

📌 Key idea of this section:

        When the wavelength is much longer than the water depth, the wave speed is c = √(gh) and depends only on depth

Linear surface gravity waves

For small-amplitude waves on water of uniform depth h, linear potential-flow theory gives the dispersion relation linking angular frequency ω and wavenumber k = 2π/λ. The phase speed c = ω/k and group speed c_{g} = ∂ω/∂k follow directly. Tsunamis are surface gravity waves like any other; what distinguishes them is where they sit on this curve.

        ω² = g k tanh(kh)
        c = √( (g/k) tanh(kh) )
        c_{g} = (c/2) [ 1 + 2kh / sinh(2kh) ]

In deep water (kh ≫ 1), tanh(kh) → 1 and c = √(g/k), so long wind waves outrun short ones and the group speed is half the phase speed. In shallow water (kh ≪ 1, conventionally h < λ/20), tanh(kh) → kh and the relation collapses to c = c_{g} = √(gh): the waves are non-dispersive and travel at a speed set only by depth. Because typical tsunami wavelengths (50–500 km) greatly exceed even abyssal depths (about 4 km on average, 11 km at most), earthquake tsunamis are shallow-water waves everywhere in the ocean.

        Depth h        c = √(gh)       c (km/h)
        7,000 m        262 m/s         943
        4,000 m        198 m/s         713
        1,000 m        99 m/s          357
        100 m          31 m/s          113
        10 m           9.9 m/s         36

The shallow-water equations

The long-wave limit can be derived by depth-averaging the Navier–Stokes equations under the assumption that vertical accelerations are negligible, so pressure is hydrostatic. In one horizontal dimension, with surface elevation η, depth-averaged velocity u and total depth H = h + η, the nonlinear shallow-water equations (NSWE) read:

        ∂η/∂t + ∂(Hu)/∂x = 0
        ∂u/∂t + u ∂u/∂x + g ∂η/∂x = −τ_{b}/(ρH)

The first is mass conservation and the second momentum conservation, with τ_{b} a bottom stress usually parameterised by a Manning coefficient n as τ_{b} = ρ g n² u|u| / H^{1/3}. In the open ocean, amplitude-to-depth ratios are of order 10^{-4}, so the advective and friction terms are negligible and the equations reduce to the linear wave equation with speed √(gh). Nonlinearity and friction become important only within a few tens of kilometres of the shore. Large-scale codes add the Coriolis term and solve on a sphere; for trans-oceanic tsunamis Coriolis has a modest effect on the far-field waveform but cannot be ignored in detailed modelling.

Orbital motion and the water column

In a shallow-water wave the horizontal particle velocity is nearly uniform from surface to seabed and is related to amplitude by u ≈ η √(g/h). A 0.5 m tsunami over 4,000 m depth therefore moves water at only about 2.5 cm/s, back and forth over a full period. This is why ships in deep water feel nothing and why harbours are evacuated by sending vessels out to sea. Near the shore the same relation produces currents of several metres per second, strong enough to move large vessels, scour foundations and carry debris.

Dispersion and its limits

The shallow-water approximation is not exact. Expanding the dispersion relation for small kh gives c ≈ √(gh) [1 − (kh)²/6], so shorter components lag slightly behind. Over a trans-Pacific path, the leading waves of a great earthquake tsunami become measurably dispersed, and modern forecasts account for this with Boussinesq-type terms or by exploiting numerical dispersion in finite-difference schemes. For sources whose horizontal dimension is comparable to the depth, as with many landslide and volcanic tsunamis, dispersion is a first-order effect: the initial hump breaks up into a dispersive train of shorter waves whose energy decays far faster with distance than that of an earthquake tsunami.

The ratio of nonlinearity to dispersion is measured by the Ursell number Ur = Aλ²/h³, where A is amplitude. When Ur is of order 1 or larger, as on continental shelves, nonlinear steepening competes with dispersion and the leading wave may split into a train of short undular-bore waves; when Ur ≪ 1, dispersion dominates. This undular-bore fission was filmed during the 2004 and 2011 events, appearing as several breaking crests riding on the main tsunami front.

✏️ Your Turn

(a) A tsunami with a period of 20 minutes crosses an ocean of depth 4,000 m. Find its speed in m/s and km/h, its wavelength, and the value of kh. Is the shallow-water approximation justified? (b) A landslide generates a wave of wavelength 5 km in water 1,000 m deep. Compute the phase speed from the full dispersion relation and compare it with √(gh).

Answers: (a) c = √(9.81 × 4,000) ≈ 198 m/s ≈ 713 km/h. The wavelength is λ = cT ≈ 198 × 1,200 ≈ 238 km, so kh = 2π × 4,000 / 237,700 ≈ 0.106. Since kh ≪ 1 (h/λ ≈ 1/59, well below 1/20), the approximation holds; the dispersive correction (kh)²/6 is under 0.2 %. (b) k = 2π/5,000 = 1.257 × 10^{-3} m^{-1}, kh = 1.257, tanh(1.257) ≈ 0.850, so c = √(9.81 × 0.850 / 1.257 × 10^{-3}) ≈ 81.5 m/s. The shallow-water value is √(9.81 × 1,000) ≈ 99.0 m/s, so the true speed is only about 82 % of it: the wave is strongly dispersive and long-wave theory would overpredict its speed by about 22 %.

─────────────────────────────────
Lesson 2: Earthquake Generation and Seafloor Deformation
─────────────────────────────────

📌 Key idea of this section:

        M_{0} = μ A D,   Mw = (2/3)(log₁₀ M_{0} − 9.1),   E_{tsunami} = ½ ρ g ∫ η² dA

Megathrust earthquakes

Roughly four-fifths of damaging tsunamis recorded historically were generated by earthquakes, and nearly all great earthquake tsunamis originate on subduction-zone megathrusts, the shallow-dipping plate interfaces where oceanic lithosphere descends beneath an overriding plate. Between earthquakes, friction on the locked interface drags the leading edge of the overriding plate down and back; during rupture, the stored elastic strain is released and the seaward part of the overriding plate rebounds upward while the region farther landward subsides. Plafker's field mapping after the 1964 Alaska earthquake documented uplift of up to about 11.5 m on Montague Island and subsidence of about 2 m around the Kenai Peninsula, providing one of the clearest demonstrations of this elastic-rebound pattern.

The size of an earthquake is quantified by the seismic moment M_{0} = μAD, where μ is the rigidity of the rock near the fault (typically 30–50 GPa for subduction interfaces), A the rupture area and D the average slip. Moment magnitude follows from the Hanks–Kanamori relation, written in SI units as Mw = (2/3)(log₁₀ M_{0} − 9.1). Each unit increase in Mw corresponds to about a 32-fold increase in moment. A great megathrust earthquake of Mw 9 typically ruptures a fault 400–1,000 km long and 100–200 km wide with average slips of 10–30 m.

From fault slip to seafloor uplift

The static displacement of the seafloor caused by slip on a rectangular dislocation in an elastic half-space is given by closed-form expressions published by Okada (1985), which remain the standard way to convert finite-fault models into tsunami initial conditions. The vertical uplift pattern depends on dip, depth, slip and rake: a shallow thrust produces a narrow, high uplift lobe above the up-dip edge of slip and a broader, lower subsidence trough landward. Horizontal seafloor motion also contributes where the seabed slopes steeply, as on the inner trench wall; Tanioka and Satake (1996) showed that the term u_{h} · ∇h, the horizontal seafloor displacement multiplied by the bathymetric gradient, can add significantly to effective uplift for shallow ruptures near trenches.

Because rupture velocities of 2–3 km/s are far faster than tsunami speeds, most earthquake tsunamis can be modelled with an instantaneous initial condition: the sea surface is assumed to copy the seafloor uplift at t = 0, with zero initial velocity. This fails for very slow ruptures and for long faults like the 2004 Sumatra–Andaman rupture, where slip took about 8–10 minutes to propagate roughly 1,300 km northward and a time-dependent (kinematic) source improves fits to observations.

The Kajiura filter

The sea surface does not copy small-scale seafloor features exactly. Kajiura (1963) showed that a seafloor displacement with horizontal wavenumber k transmits to the surface attenuated by a factor 1/cosh(kh). Features with a horizontal scale comparable to or smaller than the water depth are smoothed out, while features tens of times wider than the depth are transmitted almost unchanged.

        η_{surface}(k) = η_{seafloor}(k) / cosh(kh)

For a seafloor bump with a wavelength of twice the water depth (kh = π), only 1/cosh(π) ≈ 9 % of the amplitude reaches the surface; for a wavelength ten times the depth (kh ≈ 0.63), about 83 % does. Modern practice applies this filter to Okada displacements, especially for deep-water sources and for the short-wavelength uplift associated with splay faults.

Tsunami energy

The potential energy of the initial displacement, relative to a flat sea, is E = ½ ρ g ∫ η² dA; for a propagating linear wave the energy is shared equally between potential and kinetic forms. Only a small fraction of seismic energy, typically of order 1 % or less, ends up in the tsunami, but because E scales with the square of uplift and with area, a great megathrust earthquake produces tsunami energies of order 10^{14}–10^{16} J (estimates for 2004 and 2011 are a few times 10^{15} J). Rupture depth and the share of slip near the trench matter enormously: two earthquakes of identical Mw can produce tsunamis differing by an order of magnitude in amplitude depending on how much slip reaches the shallow, compliant part of the interface.

Directivity

A long rupture radiates tsunami energy preferentially perpendicular to its strike, much as a long antenna beams radio waves. The initial wavefront is roughly an elongated ridge, and the waves that leave it broadside remain coherent and high, whereas those travelling along strike spread more quickly. This is why the 2004 tsunami was devastating in Sri Lanka, India and Thailand, perpendicular to the north–south rupture, but weak at comparable distances to the north along the rupture axis, and why the 2011 Tōhoku tsunami beamed energy south-eastward across the Pacific.

✏️ Your Turn

(a) A megathrust rupture is 400 km long and 150 km wide with an average slip of 20 m on a fault with rigidity 40 GPa. Compute M_{0} and Mw. (b) Approximate the initial sea-surface uplift as a uniform 2 m over a 200 km × 100 km area. Estimate the potential energy of the tsunami.

Answers: (a) M_{0} = 4.0 × 10^{10} Pa × (4.0 × 10^{5} m × 1.5 × 10^{5} m) × 20 m = 4.8 × 10^{22} N·m. Then Mw = (2/3)(log₁₀ 4.8 × 10^{22} − 9.1) = (2/3)(22.68 − 9.1) ≈ 9.05, a great earthquake comparable to Tōhoku 2011. (b) E = ½ × 1,025 × 9.81 × (2)² × (2.0 × 10^{5} × 1.0 × 10^{5}) ≈ 4.0 × 10^{14} J, roughly the energy of 100 kilotonnes of TNT (1 kt ≈ 4.18 × 10^{12} J). A real uplift pattern is non-uniform, which concentrates energy because E depends on η².

─────────────────────────────────
Lesson 3: Tsunami Earthquakes and Non-Seismic Sources
─────────────────────────────────

📌 Key idea of this section:

        Source size, duration and geometry, not magnitude alone, control tsunami size; non-seismic sources are local, dispersive and poorly warned

Tsunami earthquakes

Kanamori (1972) introduced the term tsunami earthquake for events whose tsunamis are far larger than their surface-wave magnitude Ms would suggest. The type example is the 15 June 1896 Meiji Sanriku earthquake: shaking was weak enough that many people did not evacuate, yet run-up reached about 38 m and some 22,000 people died. Similar events include the 1946 Aleutian (Mw about 8.6), 1992 Nicaragua (Mw 7.6), 1994 and 2006 Java (Mw 7.8 and 7.7) and 2010 Mentawai (Mw 7.8) earthquakes. They share slow rupture velocities (about 1–1.5 km/s), long source durations, depletion of high-frequency seismic radiation, and slip concentrated at shallow depth near the trench, often within weak sediments where low rigidity means a given moment requires large slip. Their danger is twofold: people feel little shaking, and early magnitude estimates based on short-period waves underestimate the event. Broadband long-period methods such as the W-phase inversion (Kanamori and Rivera 2008) and the ratio of radiated energy to moment (Newman and Okal 1998) were developed partly to identify such events quickly.

Splay faults and outer-rise events

Slip partitioned onto steep splay faults branching from the megathrust produces steeper, more localised uplift and larger near-field waves; splay rupture has been proposed for the 1944 Tōnankai earthquake and for parts of the 2004 rupture. Normal-faulting earthquakes in the outer rise, seaward of the trench, also generate large tsunamis, most notably the 1933 Shōwa Sanriku earthquake (Mw about 8.4), which killed about 3,000 people.

Landslide tsunamis

Submarine and subaerial landslides displace water by the motion of the slide mass, so their tsunamis depend on slide volume, velocity, acceleration, thickness and water depth. The Froude number of the slide, its speed divided by √(gh), is a key parameter: when it approaches 1 the slide and the wave it generates travel together and the wave grows strongly. Landslide sources are small compared with earthquake ruptures, so they produce short, highly dispersive waves with very high near-field amplitudes but rapid decay with distance. Notable examples include the giant Storegga slides off Norway, about 8,150 years ago, which mobilised roughly 2,400–3,200 km³ of sediment and left tsunami deposits more than 20 m above contemporary sea level in Shetland; the 17 July 1998 Papua New Guinea tsunami, in which a submarine slump triggered by an Mw 7.0 earthquake produced run-up of about 15 m and killed about 2,200 people at Sissano Lagoon; and the 1958 Lituya Bay event in Alaska, in which about 30 million m³ of rock fell into the head of a fjord and drove water to a trimline 524 m above sea level, the highest run-up ever documented.

Volcanic tsunamis

Volcanoes generate tsunamis by at least seven mechanisms: pyroclastic density currents entering the sea, flank and caldera collapse, submarine explosions, volcanic earthquakes, lahars, shock and pressure waves coupling to the ocean, and lava entry. Volcanic tsunamis account for only a few per cent of recorded tsunamis but a disproportionate share of deaths in some regions; the 1883 Krakatau eruption alone killed about 36,000 people, mostly by tsunami. On 22 December 2018 a lateral collapse of the south-western flank of Anak Krakatau, estimated at about 0.2–0.3 km³, generated a tsunami that struck the coasts of the Sunda Strait within roughly half an hour to an hour and killed more than 400 people without any warning, because no earthquake had occurred to trigger the seismic-based system.

Meteotsunamis

Meteotsunamis are long waves in the tsunami frequency band forced by moving atmospheric disturbances such as squall lines, gravity waves or pressure jumps. A static pressure anomaly of 1 hPa raises sea level by only about 1 cm (the inverse barometer effect), but if the disturbance moves at a speed U close to the local long-wave speed, energy is continuously pumped into the forced wave. This Proudman resonance occurs where U ≈ √(gh). Further amplification on shelves (Greenspan resonance with edge waves) and in harbours can produce oscillations of several metres. Examples include the rissaga of Ciutadella, Menorca (about 4 m in June 1984 and again in 2006), the 1978 Vela Luka event in Croatia (about 6 m) and other Adriatic events, and frequent Great Lakes and US East Coast meteotsunamis. The 2022 Hunga Tonga eruption produced a global atmospheric Lamb wave that generated a planetary-scale meteotsunami, discussed in the case studies.

Impact tsunamis

Asteroid impacts into the ocean generate short-wavelength, extremely high but strongly dispersive waves; the relevant scaling depends on cavity diameter relative to depth. The Chicxulub impact about 66 million years ago produced a tsunami whose deposits are found around the Gulf of Mexico. For objects of a few hundred metres, current modelling suggests that impact tsunamis decay rapidly and are less destructive at long range than early estimates implied, but uncertainties remain large and planetary defence studies treat them as a low-probability, high-consequence hazard.

✏️ Your Turn

(a) A squall line moves across a shelf sea at 25 m/s. At what depth would Proudman resonance occur? (b) A 3 hPa pressure jump moves over water whose depth matches resonance. If the forced wave grows linearly with time as η ≈ (η_{s}/2)(x/L) for a path length x, where η_{s} is the static inverse-barometer response and L is the disturbance length scale, estimate η after the disturbance has travelled ten times its own length.

Answers: (a) Resonance requires U = √(gh), so h = U²/g = 625/9.81 ≈ 64 m, a typical mid-shelf depth. (b) The static response is η_{s} ≈ 3 cm (1 cm per hPa). With x/L = 10, η ≈ (0.03/2) × 10 = 0.15 m. Subsequent shoaling and harbour resonance can multiply this by a further factor of several, which is how a pressure jump of a few hPa can produce a damaging metre-scale rissaga.

─────────────────────────────────
Lesson 4: Propagation Modelling and Travel-Time Maps
─────────────────────────────────

📌 Key idea of this section:

        Travel time T = ∫ ds / √(g h(s)) along the fastest ray path; amplitude follows energy beaming by source and bathymetry

Travel-time maps

Because tsunami speed depends only on depth, travel times can be computed from bathymetry alone before any event occurs. Travel time along a path is the integral of slowness, and the arrival of the wavefront at each point is found by solving the eikonal equation |∇T| = 1/c(x, y) with Huygens-type wavefront construction or fast-marching algorithms. Travel-time maps, drawn as isochrons of hours from a source, are among the oldest and most useful products of warning centres: they tell coastal officials how long they have, and they are robust because they do not depend on knowing the source magnitude. They predict the arrival of the first motion, not of the largest wave, which may arrive hours later.

Numerical propagation models

Operational and research models solve the linear or nonlinear shallow-water equations, sometimes with dispersive Boussinesq corrections, on nested grids that refine from arc-minute resolution in the open ocean to tens of metres or less at the coast. Widely used codes include MOST (Method of Splitting Tsunami, NOAA), TUNAMI (Tohoku University), COMCOT (Cornell), GeoClaw (adaptive mesh refinement finite-volume, University of Washington), and dispersive models such as FUNWAVE-TVD and NHWAVE. Finite-volume schemes handle shocks (bores) and the moving wet–dry boundary at the shoreline robustly. Accuracy depends above all on the source model and on the bathymetry and topography: high-resolution coastal elevation models with sub-metre vertical accuracy are needed for inundation, and errors in nearshore bathymetry translate directly into errors in arrival time and amplitude.

Energy beaming and maximum-amplitude maps

The energy radiated from a source is not distributed uniformly. Beyond source directivity, mid-ocean ridges, seamount chains and continental margins act as waveguides because waves refract towards shallower water, where they travel more slowly. Maps of maximum modelled amplitude show these effects vividly: after the 2011 Tōhoku earthquake, energy was channelled along the Emperor Seamounts and East Pacific ridges towards the Americas. Late-arriving waves trapped on continental shelves as edge waves, or scattered from distant features, can cause the largest amplitudes many hours after first arrival; on the US West Coast in 2011 and in Chile in 1960, the largest waves arrived hours after the first.

Far-field geometrical spreading

For an isotropic point source over uniform depth, energy conservation in a radially spreading wave gives amplitude decay A ∝ r^{-1/2}. On a sphere, the wavefront converges again at the antipode, and amplitudes are partially refocused there; the 1960 Chile tsunami was strongly focused near Japan, roughly 17,000 km away, where it killed about 140 people almost a day after the earthquake.

Inverse problems

Tsunami waveforms recorded at tide gauges and pressure sensors can be inverted for the slip distribution on the fault, complementing seismic and geodetic data. Because tsunami propagation is linear in the deep ocean, Green's functions for unit sources can be precomputed and combined linearly. Tsunami data are particularly sensitive to shallow slip near the trench, which onshore GNSS cannot resolve; joint inversions for the 2004, 2010 Chile and 2011 Tōhoku earthquakes have shown that the largest slip was located at shallow depth, closer to the trench than older models assumed.

✏️ Your Turn

(a) The great-circle distance from the 1960 Chile source region to Hilo, Hawaii is roughly 10,600 km. Assuming an average depth of 4,000 m, estimate the travel time and compare it with the observed arrival of about 15 hours. (b) A coastal town lies behind 200 km of shelf with mean depth 100 m, beyond which lie 1,000 km of ocean at 4,000 m depth from the source. Estimate the travel time and identify which part of the path dominates.

Answers: (a) T = 10.6 × 10^{6} m / 198 m/s ≈ 53,500 s ≈ 14.9 h, in good agreement with the observed arrival of roughly 15 hours. (b) Ocean leg: 1.0 × 10^{6} / 198 ≈ 5,050 s (1.4 h). Shelf leg: c = √(9.81 × 100) ≈ 31.3 m/s, so 2.0 × 10^{5} / 31.3 ≈ 6,390 s (1.8 h). Total ≈ 11,400 s ≈ 3.2 h. The shelf, only 17 % of the distance, takes more than half of the travel time, which is why accurate shelf bathymetry is critical for arrival forecasts.

─────────────────────────────────
Lesson 5: Shoaling, Refraction and Resonance
─────────────────────────────────

📌 Key idea of this section:

        Green's law:   A₂/A₁ = (h₁/h₂)^{1/4} (b₁/b₂)^{1/2}

Shoaling and Green's law

As a tsunami moves into shallower water, it slows down, its wavelength shortens (λ = T√(gh) with the period T unchanged), and its amplitude grows. For a slowly varying channel of depth h and width b between wave rays, conservation of energy flux in the linear long-wave limit requires that ½ρgA² · b · √(gh) remains constant along the ray. Hence amplitude varies as h^{-1/4} b^{-1/2}, a result first obtained by George Green in 1838. The h^{-1/4} dependence is weak, which is why tsunamis that are 0.5 m in the open ocean grow to only a few metres on gently sloping coasts unless other effects intervene, and why the most destructive near-field waves derive their height from large source amplitudes rather than from shoaling alone.

Green's law fails close to shore when the wave becomes nonlinear (A/h no longer small), when the bathymetry changes over distances comparable to a wavelength (causing reflection), and when the wave breaks. Steep continental slopes reflect a significant fraction of incident energy, while wide gentle shelves dissipate it through friction.

Refraction and focusing

Because speed decreases with depth, wavefronts turn to become parallel with depth contours. Submarine ridges and headlands focus rays and raise amplitudes; canyons and embayments with deep axes defocus them. Small features such as seamounts and shoals can act as lenses: during the 1946 and 1960 tsunamis, Hilo Bay amplified the incoming waves, and in 2011 the ria coast of Sanriku, with its V-shaped bays, funnelled the tsunami to extreme run-up. In a narrowing bay the factor (b₁/b₂)^{1/2} can dominate over the depth term.

Harbour and shelf resonance

Bays, harbours and continental shelves have natural modes of oscillation, or seiches. A tsunami contains a broad spectrum of periods; any component near a natural period of the basin excites a resonance that can greatly exceed the incident amplitude and persist for many hours. For a narrow rectangular basin of length L and uniform depth h, Merian's formula gives the natural periods:

        Closed basin:              T_{n} = 2L / (n √(gh)),           n = 1, 2, 3 …
        Open at one end (bay):     T_{n} = 4L / ((2n − 1) √(gh))

Crescent City, California, is the archetypal example. Its harbour and the adjacent shelf have resonant periods of roughly 20 minutes and longer shelf modes that match typical Pacific tsunami periods; in 1964 the fourth wave flooded the town and killed 11 people, and in 2011 the harbour was again heavily damaged. Hilo Bay, Hawaii, similarly has a fundamental mode of about 30 minutes. Edge waves trapped against a coast by refraction propagate slowly along the shore and can produce the largest waves late in an event.

Bores and breaking

On gentle slopes, nonlinear steepening transforms the front of the tsunami into a turbulent bore, a moving hydraulic jump that advances like a wall of water. On steep coasts the tsunami often surges without breaking and floods like a rapidly rising tide. Bores also propagate far up rivers; in 2011 the tsunami travelled more than 40 km up the Kitakami River.

✏️ Your Turn

(a) A tsunami of amplitude 0.5 m in 4,000 m of water moves without change in ray spacing to a depth of 10 m. Use Green's law to estimate its amplitude and give the wavelength at both depths for a 20-minute period. (b) A bay 20 km long and 30 m deep is open to the sea at its mouth. Estimate its fundamental resonant period.

Answers: (a) A₂ = 0.5 × (4,000/10)^{1/4} = 0.5 × 4.47 ≈ 2.2 m. Wavelengths: at 4,000 m, λ = 198 × 1,200 ≈ 238 km; at 10 m, c ≈ 9.9 m/s so λ ≈ 11.9 km. The wave is compressed twentyfold, and A/h ≈ 0.22, so linear theory is already marginal. (b) c = √(9.81 × 30) ≈ 17.2 m/s; T₁ = 4L/c = 80,000/17.2 ≈ 4,660 s ≈ 78 minutes. A tsunami with significant energy near this period would be strongly amplified; a closed basin of the same size would have T₁ = 2L/c ≈ 39 minutes.

─────────────────────────────────
Lesson 6: Run-Up, Inundation and Forces on Structures
─────────────────────────────────

📌 Key idea of this section:

        Synolakis run-up law:   R/d = 2.831 √(cot β) (H/d)^{5/4};   drag force F = ½ ρ C_{d} B h u²

Definitions

Field surveys distinguish several quantities, which are frequently confused in reporting. Run-up height R is the ground elevation, above a reference sea level (usually the tide at the time of arrival), at the maximum landward limit of flooding. Inundation distance is the horizontal distance from the shoreline to that limit. Flow depth is the water depth above the local ground, and tsunami height or inundation height is the water surface elevation above the reference sea level at a given point. Water marks on buildings, debris lines, scars on vegetation and eyewitness video are used to measure them; international post-tsunami survey teams follow protocols published by UNESCO's Intergovernmental Oceanographic Commission.

Analytical run-up

Carrier and Greenspan (1958) found exact solutions of the nonlinear shallow-water equations on a uniform slope by a hodograph transformation. Using this approach, Synolakis (1987) derived the run-up of a non-breaking solitary wave of height H in water of depth d climbing a plane beach of slope angle β:

        R/d = 2.831 √(cot β) (H/d)^{5/4}

This law, verified in laboratory experiments, captures the essential roles of incident amplitude and slope, and it remains a benchmark for numerical codes. Real tsunamis are not solitary waves; their long periods mean they behave more like N-waves or long single pulses, and Tadepalli and Synolakis (1994) showed that leading-depression N-waves (where the sea first withdraws) run up somewhat higher than leading-elevation waves of equal amplitude. The withdrawal of the sea before a leading-depression wave is the best-known natural warning sign.

Inundation and the role of land cover

Inundation is controlled by topography, surface roughness and the volume of water delivered, which depends on both amplitude and period. Long-period tsunamis on low-lying coasts can penetrate several kilometres; in 2011 the tsunami flooded up to about 5 km inland on the Sendai plain. Roughness from buildings and vegetation is commonly modelled with an equivalent Manning coefficient (around 0.025 for open land and much higher for dense urban areas), although explicit building-resolving simulations show strong channelling of flow along streets, with local velocities well above the area-averaged value.

Hydrodynamic and debris loads

The forces exerted by a tsunami on structures include hydrostatic pressure, buoyancy, hydrodynamic drag, the surge impulse at the bore front, impact by floating debris such as vehicles, logs and shipping containers, and scour around foundations. The drag force on a structural element of width B in a flow of depth h and velocity u is F = ½ ρ_{s} C_{d} B h u², where ρ_{s} is the density of sediment-laden water (design codes typically take about 1.1 times that of seawater) and C_{d} a drag coefficient of order 1–2 depending on shape. The momentum flux h u² is the controlling variable, and the Froude number Fr = u/√(gh) characterises the flow; field measurements from video in 2004 and 2011 found onshore velocities typically of 2–10 m/s and Froude numbers near or above 1 at the bore front. Buoyancy is a common failure mode for wooden houses, which float off their foundations once flow depth exceeds about 2 m, while reinforced concrete buildings frequently survive structurally but may overturn if their windows remain closed and air is trapped.

Empirical fragility

Post-event surveys of tens of thousands of buildings in 2004 and 2011 have produced fragility curves relating probability of damage states to flow depth. A widely cited finding from Tōhoku is that the probability of a building being washed away rose sharply once flow depths exceeded about 2 m, and that mortality rose steeply in municipalities where flow depths exceeded roughly 4–5 m, a threshold above which survival depends almost entirely on evacuation before arrival.

✏️ Your Turn

(a) Using the Synolakis law, estimate the run-up of a solitary wave with H/d = 0.02 at a depth d = 10 m on a 1:50 beach. (b) A flow 2 m deep moving at 5 m/s strikes a wall 10 m wide. With ρ_{s} = 1,100 kg/m³ and C_{d} = 2, compute the drag force and the Froude number.

Answers: (a) cot β = 50, √50 = 7.07; (0.02)^{1.25} = e^{1.25 ln 0.02} ≈ 7.52 × 10^{-3}. So R/d = 2.831 × 7.07 × 7.52 × 10^{-3} ≈ 0.151 and R ≈ 1.5 m, about 7.5 times the incident wave height of 0.2 m. (b) F = ½ × 1,100 × 2 × 10 × 2 × 5² = 5.5 × 10^{5} N ≈ 0.55 MN, equivalent to the weight of about 56 tonnes. Fr = 5/√(9.81 × 2) ≈ 1.13, so the flow is supercritical, typical of an advancing bore front.

─────────────────────────────────
Lesson 7: Magnitude, Intensity and Probabilistic Hazard
─────────────────────────────────

📌 Key idea of this section:

        Mt = log₁₀ H + log₁₀ Δ + 5.80 (Abe 1981);   P(at least one event in t years) = 1 − e^{−t/T}

Tsunami magnitude

Several scales have been proposed. The Imamura–Iida magnitude, developed for Japanese tsunamis, is m = log₂ H_{max}, where H_{max} is the maximum observed height in metres along the coast; Soloviev's intensity I = log₂(√2 H̄), with H̄ the mean coastal height, extended this to global catalogues. These scales describe coastal effects and are sensitive to sampling. Abe defined a tsunami magnitude Mt from tide-gauge amplitudes that is calibrated to match Mw for typical earthquakes: in the formulation commonly used for the Pacific (Abe 1981), Mt = log₁₀ H + log₁₀ Δ + 5.80, where H is the maximum single (crest or trough) amplitude in metres measured at a tide gauge and Δ the distance in kilometres along the ocean from the epicentre. Tsunami earthquakes are those with Mt exceeding Ms by half a unit or more; for 1896 Sanriku, Abe estimated Mt more than a full unit above the surface-wave magnitude Ms of about 7.2.

Intensity scales

The Integrated Tsunami Intensity Scale of Papadopoulos and Imamura (2001) has twelve degrees, analogous to macroseismic scales, based on effects on people, objects including boats, and buildings. Intensity scales allow historical events to be compared using written accounts when no instrumental data exist.

Statistics of occurrence

Global catalogues maintained by NOAA's National Centers for Environmental Information (NCEI) and by the Novosibirsk tsunami laboratory list thousands of events over more than 4,000 years, though completeness falls off steeply before the twentieth century. Since 1900, a large majority of tsunamis with deaths have occurred in the Pacific, around 70–80 % depending on the catalogue and criteria, with the Mediterranean, Indonesian and Caribbean regions also active. Fatal tsunamis occur on average a few times per decade, but deaths are dominated by rare extreme events: 2004 alone accounts for more tsunami deaths than all other events since 1900 combined. This heavy-tailed distribution means that average annual losses are a poor guide to risk.

Probabilistic tsunami hazard analysis

Probabilistic tsunami hazard analysis (PTHA) follows the logic of probabilistic seismic hazard analysis: enumerate all credible sources with rates of occurrence (from Gutenberg–Richter magnitude–frequency relations, geodetic slip-deficit rates, paleoseismology and source-specific models), simulate the tsunami from each, incorporate tides and modelling uncertainties, and integrate to obtain the annual rate at which a given flow depth or run-up is exceeded at each site. Uncertainty in maximum magnitude and in shallow slip dominates. Treating occurrence as a Poisson process, the probability of at least one exceedance during an exposure time t, for an event with mean return period T, is 1 − e^{−t/T}. ASCE 7-16, the first US building standard with a tsunami loads chapter, adopts a Maximum Considered Tsunami with a 2,475-year mean recurrence interval, about 2 % probability of exceedance in 50 years. Japan, after 2011, distinguishes Level 1 tsunamis (return periods of roughly tens to about 150 years), against which coastal structures are designed, from Level 2 tsunamis, the largest possible events with return periods of several hundred to over a thousand years, for which the strategy is evacuation and land-use planning rather than defence.

Epistemic humility

The 2011 disaster is the defining lesson in maximum-magnitude assessment. Japanese national hazard assessments had judged the Japan Trench off Miyagi and Fukushima to be capable of earthquakes of about magnitude 7.5–8.2 on individual segments, not a multi-segment Mw 9. Yet the 869 Jōgan tsunami deposits, published from the 1990s onward, had shown that the Sendai plain had been inundated several kilometres inland before. Global analyses (for example McCaffrey 2008) had argued that any long subduction zone may be capable of Mw ≥ 9, and that short historical records cannot exclude it.

✏️ Your Turn

(a) A tide gauge 1,000 km from an epicentre records a maximum amplitude of 1.0 m. Compute Mt. Repeat for 0.3 m at 6,000 km. (b) What is the probability that a coastal site will experience the 500-year tsunami at least once during a 50-year building life? Repeat for the ASCE 7 Maximum Considered Tsunami.

Answers: (a) Mt = log₁₀ 1.0 + log₁₀ 1,000 + 5.80 = 0 + 3 + 5.80 = 8.8. For the second gauge, Mt = log₁₀ 0.3 + log₁₀ 6,000 + 5.80 = −0.52 + 3.78 + 5.80 ≈ 9.1. Consistent estimates from many gauges are averaged in practice. (b) P = 1 − e^{−50/500} = 1 − e^{−0.1} ≈ 0.095, almost 10 %. For a 2,475-year return period, P = 1 − e^{−50/2,475} ≈ 0.020, or 2 %.

─────────────────────────────────
Lesson 8: Detection, Forecasting and Warning Centres
─────────────────────────────────

📌 Key idea of this section:

        Warning is a race: seismic detection in minutes, sea-level confirmation in tens of minutes, local arrivals in 10–30 minutes

The origins of warning

The 1 April 1946 Aleutian earthquake destroyed the Scotch Cap lighthouse on Unimak Island, killing its five keepers, with run-up of about 40 m, and nearly five hours later struck Hawaii, where about 159 people died, 96 of them in Hilo. In response, the US Coast and Geodetic Survey established the Seismic Sea Wave Warning System in 1949, now the Pacific Tsunami Warning Center (PTWC) in Hawaii. After the 1960 Chile tsunami killed 61 people in Hilo despite a warning, and some 140 in Japan, UNESCO's Intergovernmental Oceanographic Commission created the International Coordination Group for the Pacific warning system and the International Tsunami Information Center in 1965. After 1964, a centre for Alaska was set up in Palmer in 1967, now the National Tsunami Warning Center. Following 2004, intergovernmental systems were established for the Indian Ocean, the North-East Atlantic and Mediterranean, and the Caribbean; the Indian Ocean Tsunami Warning and Mitigation System became operational in 2011, with regional service providers in Australia, India and Indonesia.

Seismic detection and magnitude saturation

The first information always comes from seismology. Location and an initial magnitude are available within minutes, but magnitudes based on short-period body waves or the first seconds of rupture saturate for great earthquakes: the initial Japan Meteorological Agency estimate for 11 March 2011, issued three minutes after origin, was M 7.9, and the first warning predicted heights of 3–6 m. Long-period W-phase inversions, now standard at PTWC and elsewhere, give reliable Mw and fault mechanism within roughly 10–30 minutes for great events, and real-time GNSS displacement inversions can provide magnitude without saturation within a few minutes, as demonstrated retrospectively for 2011.

DART bottom-pressure recorders

The Deep-ocean Assessment and Reporting of Tsunamis (DART) system, developed by NOAA's Pacific Marine Environmental Laboratory, uses a bottom pressure recorder on the seafloor at depths of about 1,000–6,000 m, linked acoustically to a surface buoy that relays data by Iridium satellite. Pressure is measured with a resolution equivalent to about 1 mm of water. Over a 6,000 m column, a tsunami of 1 cm amplitude changes bottom pressure by about 100 Pa against an ambient pressure of about 60 MPa, so the measurement requires extreme stability; the long-wave tsunami signal is cleanly separated from short wind waves because their pressure signal decays with depth and from tides by its period. In standard mode the system records 15-minute values and transmits them every six hours; when an internal detection algorithm or a command from a warning centre triggers event mode, data at 15-second and 1-minute intervals are transmitted. The international network comprises several dozen stations, though maintaining it is costly and some stations are inoperative at any given time.

Tide gauges, cables and geodesy

Coastal tide gauges, now sampling at one minute or faster, confirm the tsunami at the coast but are affected by local resonance and are often destroyed by large waves. Cabled seafloor observatories offer real-time, high-rate data with no buoy: Japan's S-net, completed in 2017, has 150 stations of seismometers and pressure gauges along the Japan Trench and Kuril margin, and DONET covers the Nankai Trough; Canada's NEPTUNE and other systems serve Cascadia. GNSS buoys off Japan recorded the 2011 tsunami before it reached shore. Satellite altimetry captured the 2004 tsunami crossing the Bay of Bengal about two hours after the earthquake, with an amplitude of about 0.5–0.6 m, but revisit times are too long for warning. Ionospheric disturbances detected by GNSS total electron content, caused by acoustic-gravity waves launched upward by the tsunami, are under research as a detection tool for open oceans. HF coastal radars can detect tsunami currents tens of kilometres offshore.

Forecasting by inversion of precomputed sources

NOAA's SIFT forecast system (Titov et al. 2005) uses a database of precomputed unit-source tsunamis, each from a 100 km × 50 km fault segment with 1 m slip along global subduction zones. When DART data arrive, the observed waveforms are fit by a linear combination of unit sources, giving a data-constrained source; high-resolution inundation models for specific harbours then predict local amplitudes. This approach correctly forecast amplitudes at Hawaii within tens of per cent in 2011. Japan's system uses a database of about 100,000 precomputed scenarios selected by earthquake location and magnitude and updated with offshore observations.

The near-field problem

For coasts close to the source, the tsunami may arrive within 10–30 minutes, or within a few minutes for landslide-generated waves, leaving no time for sea-level confirmation. Warning must therefore rely on conservative seismic estimates and, above all, on public education: strong or long shaking, an unusual sea withdrawal or a loud roar are the warning, and people should evacuate without waiting for an official message. Messaging must also avoid cry-wolf fatigue from frequent false alarms; warning centres face an unavoidable trade-off between missed and false warnings.

✏️ Your Turn

(a) A DART station lies 300 km from an epicentre in water 5,000 m deep. How long after the earthquake does the tsunami reach it? (b) What bottom-pressure change does a 1 cm tsunami produce, and what fraction is this of the hydrostatic pressure at 4,000 m depth?

Answers: (a) c = √(9.81 × 5,000) ≈ 221 m/s; t = 300,000 / 221 ≈ 1,355 s ≈ 23 minutes. Adding transmission and analysis time, a DART-constrained forecast would be available roughly 30–40 minutes after origin, adequate for distant coasts but too late for the nearest ones. (b) Δp = ρgη = 1,025 × 9.81 × 0.01 ≈ 101 Pa. The ambient pressure is about 1,025 × 9.81 × 4,000 ≈ 4.0 × 10^{7} Pa, so the signal is about 2.5 × 10^{-6} of the background.

─────────────────────────────────
Lesson 9: Risk Reduction, Evacuation and Coastal Engineering
─────────────────────────────────

📌 Key idea of this section:

        Evacuation reach ≈ walking speed × (arrival time − warning delay − reaction time); structures reduce but do not eliminate risk

Inundation mapping

Tsunami evacuation zones are based on inundation maps derived from scenario or probabilistic modelling, historical inundation and paleotsunami evidence, with a safety margin. In the United States, the National Tsunami Hazard Mitigation Program, created in 1995, supports state inundation mapping; ASCE 7-16 Chapter 6 defines Tsunami Design Zones and prescribes loads for critical and higher-risk structures in Alaska, Washington, Oregon, California and Hawaii. Maps must be clear about what they represent: a single-scenario map can create a false boundary of safety, as in 2011, when many victims were outside mapped hazard zones that had been based on smaller expected events.

Evacuation planning

The core equation of tsunami evacuation is simple: people must reach safety before the waves arrive. Agent-based models and GIS least-cost-distance analyses estimate evacuation times using pedestrian speeds of roughly 0.7–1.3 m/s, slower for elderly or disabled people, and account for congestion. Car evacuation can fail catastrophically through gridlock, as observed in 2011 and in Palu. Signage, regular drills and clearly marked routes are crucial. In Japan, the Sanriku saying tsunami tendenko, roughly that everyone should flee independently without waiting for others, encodes the lesson that families searching for each other die together; in Kamaishi in 2011, school-based education was credited with the survival of the vast majority of pupils present at school. On Simeulue Island in 2004, oral traditions of smong, the local word for tsunami dating from a 1907 event, prompted immediate flight; only a handful of the island's roughly 78,000 people died despite its proximity to the rupture.

Vertical evacuation

Where high ground is too distant, vertical evacuation structures provide refuge: purpose-built towers, reinforced berms, or hardened multi-storey buildings designed for tsunami loads. FEMA P-646 (third edition, 2019) gives US guidance on siting and design, including the requirement that refuge elevations exceed the maximum expected inundation with a safety margin. Vertical evacuation saved many lives in Sendai and Ishinomaki in 2011, but some designated shelters were overtopped, underscoring the need for conservative design heights.

Coastal defences

Seawalls, breakwaters and river gates reduce flooding from moderate tsunamis and delay arrival during larger ones. Their limitations were starkly shown in 2011. The 10 m double seawall at Taro, Miyako, built over decades following the 1896 and 1933 tsunamis, was overtopped and partly destroyed. The Kamaishi offshore breakwater, completed in 2009 in water about 63 m deep and then the world's deepest, was heavily damaged but is estimated to have reduced the tsunami height inside the bay and delayed the arrival by several minutes. Seawalls may also foster complacency or block views of the sea, and failures under overflow, especially by scour of the landward toe, must be designed against. Post-2011 practice in Japan aims for resilient structures that do not collapse catastrophically when overtopped.

Nature-based solutions and land use

Coastal forests, mangroves and dunes reduce flow velocities and trap debris for moderate tsunamis, though their effect diminishes for large events and trees can themselves become dangerous debris; the famous pine forest at Rikuzentakata, about 70,000 trees, was destroyed in 2011, with one survivor, the so-called miracle pine. Land-use planning, such as relocating housing to higher ground while keeping ports and fisheries at the coast, is the most reliable long-term measure. After 2011, many Sanriku towns raised land by several metres and moved residential districts uphill at enormous cost.

Policy frameworks

The Sendai Framework for Disaster Risk Reduction 2015–2030 sets global targets for reducing disaster mortality, and the United Nations designated 5 November as World Tsunami Awareness Day, commemorating the Japanese story of Inamura-no-hi, in which a villager burned his rice sheaves to lure others to high ground during the 1854 Ansei-Nankai tsunami. UNESCO's Tsunami Ready programme recognises communities that meet indicators for hazard assessment, preparedness and response, and the UN Ocean Decade Tsunami Programme aims for all communities at risk to be prepared by 2030.

✏️ Your Turn

(a) A tsunami is expected 20 minutes after an earthquake. Official warning reaches residents 5 minutes after the earthquake and people take 5 minutes to begin moving. With a walking speed of 1.0 m/s, how far can residents travel? (b) A neighbourhood is 1.2 km from high ground. If elderly residents walk at 0.6 m/s, what is the shortfall, and what policy options exist?

Answers: (a) Available walking time = 20 − 5 − 5 = 10 min = 600 s, so the reach is 1.0 × 600 = 600 m. Areas farther than 600 m from safe ground need vertical evacuation refuges or must rely on self-evacuation triggered by shaking, which would add 5 minutes and extend the reach to 900 m. (b) At 0.6 m/s, 600 s gives only 360 m, leaving a shortfall of 840 m; reaching high ground would take 2,000 s ≈ 33 minutes. Options include vertical evacuation structures within about 300 m, assisted evacuation plans, natural-warning education so that people leave immediately, and long-term relocation of vulnerable facilities.

─────────────────────────────────
Lesson 10: Paleotsunamis and Open Research Questions
─────────────────────────────────

📌 Key idea of this section:

        Geological records extend tsunami histories from centuries to millennia, revealing the largest events that written records miss

Tsunami deposits

Tsunamis carry marine sand and gravel inland and deposit them as sheets that typically thin and fine landward, often with sharp or erosional bases, rip-up clasts of underlying soil, marine or brackish diatoms and foraminifera, and multiple graded layers corresponding to successive waves. In coastal marshes and lakes, such layers can be dated by radiocarbon, optically stimulated luminescence, tephra layers and dendrochronology. Distinguishing tsunami deposits from storm deposits remains a central challenge: storm deposits tend to be confined closer to the shore, show more internal laminations from many short waves, and are related to storm surge levels, but no single criterion is definitive.

Cascadia and the orphan tsunami

Brian Atwater's work beginning in the 1980s found buried marsh soils and overlying tsunami sands along the Washington coast, showing that the coast had subsided suddenly during great earthquakes. Drowned ghost forests of western red cedar, dated by tree rings, placed the last event between the 1699 and 1700 growing seasons. Satake and colleagues (1996) then matched this to an orphan tsunami recorded in Japan with no local earthquake, dating the Cascadia earthquake to about 21:00 local time on 26 January 1700 and estimating its magnitude at about 9. Turbidite records offshore suggest some 40 or more great Cascadia earthquakes over about 10,000 years, with average recurrence of several hundred years, though the exact count and the segmentation of the margin remain debated.

Jōgan 869 and other records

Deposits of the 869 Jōgan tsunami extend up to several kilometres inland on the Sendai plain, comparable to 2011, and repeated older layers suggested recurrence of large events every several centuries. Similar studies have extended records in Chile, Sumatra, Thailand, Alaska, Kamchatka, New Zealand, Portugal and the Mediterranean. Boulder deposits on rocky coasts can record extreme events but are difficult to distinguish from storm emplacement.

Open research questions

Major open problems include: forecasting near-field tsunamis within the first few minutes using GNSS, seafloor pressure and possibly machine learning on dense networks; detecting and warning for non-seismic tsunamis from landslides and volcanoes, which produce no clear seismic precursor; quantifying shallow megathrust slip and its control on tsunami size; resolving the source and recurrence of rare events such as Lisbon 1755 and Cascadia ruptures; coupling ocean and atmosphere models for volcanic and meteorological tsunamis; better representing debris, sediment transport and building-scale flow in inundation models; and incorporating sea-level rise, which raises the base level over which future tsunamis will run and increases the frequency of damaging inundation from moderate events. Social science questions are equally pressing: why people fail to evacuate, how to sustain preparedness over intervals of generations, and how to communicate uncertainty without inducing complacency.

✏️ Your Turn

(a) A coastal marsh core shows four tsunami sand layers within the last 2,000 years, all of them laterally extensive. Estimate the mean recurrence interval and the probability of at least one such event in the next 50 years under a Poisson assumption. (b) Why might this estimate be biased?

Answers: (a) Mean recurrence ≈ 2,000/4 = 500 years. P = 1 − e^{−50/500} ≈ 0.095, about 10 %. (b) Deposits may be eroded, reworked or not preserved; smaller tsunamis may not reach the site; dating uncertainties may merge or split events; and earthquake occurrence may be clustered or quasi-periodic rather than Poissonian, so the conditional probability given the time since the last event could be higher or lower than the Poisson value.

═════════════════════════════════════════════
Case Studies
═════════════════════════════════════════════

The following case studies illustrate the range of tsunami sources, from megathrust ruptures to landslides and volcanic eruptions, and how each event reshaped the science and practice of tsunami risk reduction. Numbers for older events are reconstructions and should be treated as approximate.

1755 Lisbon, Portugal — the Great Lisbon Earthquake

On the morning of 1 November 1755, All Saints' Day, a great earthquake struck offshore of south-western Iberia, with a magnitude estimated at about Mw 8.5–9.0 from damage and tsunami observations. The source remains debated: candidates include the Gorringe Bank, the Horseshoe Abyssal Plain thrust, the Marquês de Pombal fault and a proposed subduction interface beneath the Gulf of Cádiz. In Lisbon, strong shaking was followed by fires that burned for days and by a tsunami that arrived roughly 30–40 minutes after the earthquake, reportedly preceded by a withdrawal of the sea that drew people onto the exposed riverbed of the Tagus.

Tsunami heights were roughly 5–15 m along the Portuguese coast, highest in the Algarve and near Cape St Vincent, and significant waves struck Cádiz and the Moroccan coast; the tsunami crossed the Atlantic to the Caribbean in about 9–10 hours. Estimates of total deaths, including those from shaking, fire and tsunami, range widely from about 30,000 to over 60,000 in Lisbon, and higher figures across the region.

The disaster had an outsized intellectual impact: it challenged philosophical optimism in Voltaire's work and is often considered a founding event of modern seismology because the Marquis of Pombal distributed a questionnaire to parishes on the timing and effects of the earthquake. The reconstruction of Lisbon introduced the Pombaline cage, an early seismically resistant timber frame. Paleotsunami deposits in the Algarve and computer modelling continue to refine the source, and the event underpins tsunami hazard planning for the North-East Atlantic and Mediterranean warning system.

1883 Krakatau, Indonesia — a volcanic tsunami

The climactic phase of the Krakatau eruption on 26–27 August 1883, a VEI 6 event, culminated in a series of enormous explosions on the morning of 27 August, the loudest heard nearly 4,800 km away on Rodrigues Island. Tsunamis with run-up of up to about 30–40 m devastated the coasts of the Sunda Strait, destroying some 165 villages and killing about 36,000 people according to the official Dutch count, the great majority by the waves. The steamship Berouw was carried about 2.5–3 km inland up a river valley.

The generation mechanism is still debated. Leading hypotheses include massive pyroclastic flows entering the sea, caldera collapse, and phreatomagmatic submarine explosions; several mechanisms probably operated. The eruption was also a scientific milestone: the atmospheric pressure wave was recorded on barographs worldwide as it circled the globe several times, and sea-level oscillations appeared at distant tide gauges, some arriving faster than a free long wave could travel, implying atmospheric coupling. The Royal Society's 1888 report compiled these observations, which were reinterpreted after the similar phenomena of 2022.

1960 Chile — the largest instrumentally recorded earthquake

On 22 May 1960, a megathrust rupture roughly 800–1,000 km long off south-central Chile produced the largest earthquake recorded instrumentally, with Mw about 9.4–9.6 (commonly cited as 9.5). Local tsunami heights reached about 10–25 m and arrived within minutes. Deaths in Chile, from both shaking and tsunami, are uncertain, with estimates ranging from about 1,000 to about 6,000.

The tsunami crossed the Pacific, reaching Hilo about 15 hours later with run-up of about 10 m and killing 61 people; warnings had been issued but were not understood or heeded by many. It struck Japan about 22 hours after the earthquake, killing about 140 people, and also caused deaths in the Philippines. The event demonstrated the danger of trans-oceanic tsunamis and led to the international coordination of Pacific tsunami warning under UNESCO in 1965. It also motivated research into subduction-zone mechanics and coastal subsidence, documented by Plafker and Savage.

1958 and 1964, Alaska — a megatsunami and a megathrust

On 9 July 1958, an earthquake of about M 7.8 on the Fairweather fault triggered a rockslide of about 30 million m³ that fell from up to roughly 900 m into Gilbert Inlet at the head of Lituya Bay. The impact drove water up the opposite slope to a height of 524 m, stripping forest and soil, and a wave of several tens of metres swept down the bay. Two people on one of three fishing boats in the bay died; the others survived, including a father and son whose boat rode the wave. Laboratory experiments by Fritz and colleagues (2001) reproduced the run-up, confirming the impact-wave mechanism.

On 27 March 1964, Good Friday, the Mw 9.2 Great Alaska earthquake ruptured about 800 km of the Aleutian megathrust. It produced a tectonic tsunami across the Gulf of Alaska and the Pacific and numerous local landslide tsunamis in fjords such as Valdez, Seward and Whittier, where waves arrived during the shaking. About 130 people died, the large majority from tsunamis, including 11 in Crescent City, California, and four in Oregon. Plafker's mapping of coseismic uplift and subsidence was pivotal in establishing that great earthquakes occur on subduction megathrusts. The event led to the creation of the Alaska tsunami warning centre in 1967.

2004 Sumatra–Andaman, Indian Ocean

The Mw 9.1–9.3 earthquake of 26 December 2004 ruptured about 1,300–1,600 km of the Sunda megathrust from northern Sumatra to the Andaman Islands over roughly 8–10 minutes. Seafloor uplift of several metres generated a tsunami that struck Aceh within about 15–30 minutes, with run-up exceeding 30 m near Lhoknga, then Thailand and Sri Lanka after about 1.5–2 hours, and Somalia about 7 hours later. Satellite altimeters measured an open-ocean amplitude of about 0.5–0.6 m in the Bay of Bengal.

Estimates of the dead and missing are about 227,000–230,000 in 14 countries, making it the deadliest tsunami in recorded history; roughly three-quarters were in Indonesia, with large losses also in Sri Lanka, India and Thailand. There was no warning system for the Indian Ocean, and although PTWC detected the earthquake, there were no established channels to warn coastal populations. Women and children died at disproportionately high rates in many communities.

The disaster transformed the field: it led to the Indian Ocean Tsunami Warning and Mitigation System, expansion of the DART network, systematic post-tsunami surveys, and global attention to tsunami education. It also revealed that the largest subduction earthquakes may occur on zones previously thought incapable of them.

2011 Tōhoku, Japan

The Mw 9.0–9.1 Tōhoku-oki earthquake of 11 March 2011 at 14:46 JST ruptured an area roughly 400–500 km long and 200 km wide on the Japan Trench megathrust. Slip near the trench exceeded 50 m, as confirmed by repeat bathymetric surveys showing horizontal seafloor displacement of about 50 m and vertical uplift of 7–10 m near the trench axis. Offshore pressure gauges recorded a two-stage rise of about 5 m. The tsunami reached the Sanriku coast within about 30 minutes, with surveyed run-up of about 40 m in Iwate Prefecture and inundation up to about 5 km inland on the Sendai plain.

About 15,900 people died and more than 2,500 remain missing; more than 90 % of the identified dead drowned. Additional disaster-related deaths in the years after brought the total figure to over 22,000. The tsunami flooded the Fukushima Daiichi nuclear plant, whose design basis tsunami was about 5.7 m, with inundation heights of about 13–15 m, causing station blackout and three reactor meltdowns. Economic losses were estimated at about US$210–235 billion, making it the costliest natural disaster in history at the time.

The initial magnitude estimate of 7.9 led to warnings of 3–6 m, upgraded to over 10 m about half an hour later, after many communication systems had failed. The disaster led to a fundamental reorientation of Japanese policy: the Level 1/Level 2 approach, much larger hazard scenarios for the Nankai Trough, the S-net cable network and nationwide revision of evacuation plans.

2018 Palu, Sulawesi, Indonesia

On 28 September 2018, an Mw 7.5 strike-slip earthquake on the Palu-Koro fault, with an exceptionally fast supershear rupture, produced a tsunami in the narrow Palu Bay with run-up of up to roughly 10 m that arrived within a few minutes. Strike-slip earthquakes rarely generate large tsunamis, and the leading explanations involve a combination of coastal and submarine landslides, vertical displacement due to the bay's geometry and fault bends, and possibly liquefaction-induced slope failures. Inland, liquefaction flow slides at Petobo and Balaroa destroyed entire neighbourhoods. Including the missing, the death toll was about 4,300.

A tsunami warning was issued but was ended after roughly half an hour, by which time the waves had already struck, and power and communication failures meant that many residents never received it. Palu exposed the limits of warning systems built around megathrust scenarios and highlighted the need for local awareness that any strong shaking near the coast warrants immediate evacuation.

2022 Hunga Tonga–Hunga Haʻapai, Tonga

The submarine eruption of Hunga Tonga–Hunga Haʻapai on 15 January 2022 produced the most powerful atmospheric explosion recorded by modern geophysical instruments, with a pressure wave comparable to that of Krakatau in 1883. Its plume reached about 57 km, into the mesosphere. The explosion launched an atmospheric Lamb wave travelling at about 310–320 m/s that circled the Earth several times and was recorded on barometers worldwide. Local tsunamis, generated by explosions, possible collapse and pyroclastic flows, reached run-up heights of up to about 15–20 m on some Tongan islands, and destroyed villages; few people died in Tonga, but deaths also occurred in Peru, where two people drowned.

The Lamb wave generated a global meteotsunami that arrived in the Pacific, Atlantic, Caribbean and Mediterranean hours before any long-wave tsunami could, because the atmospheric wave travelled faster than √(gh). Amplification was strongest where ocean depth produced Proudman resonance. Warning centres, designed around earthquake tsunamis, could not forecast these arrivals. The event has prompted development of coupled atmosphere-ocean models and new monitoring of volcanic sources.

═════════════════════════════════════════════
References
═════════════════════════════════════════════

  1. Abe, K. (1981). Physical size of tsunamigenic earthquakes of the northwestern Pacific. Physics of the Earth and Planetary Interiors, 27, 194–205.
  2. American Society of Civil Engineers (2017). Minimum Design Loads and Associated Criteria for Buildings and Other Structures, ASCE/SEI 7-16, Chapter 6: Tsunami Loads and Effects. ASCE.
  3. Atwater, B. F. (1987). Evidence for great Holocene earthquakes along the outer coast of Washington State. Science, 236, 942–944.
  4. Atwater, B. F., Musumi-Rokkaku, S., Satake, K., Tsuji, Y., Ueda, K., and Yamaguchi, D. K. (2005). The Orphan Tsunami of 1700: Japanese Clues to a Parent Earthquake in North America. U.S. Geological Survey Professional Paper 1707.
  5. Bao, H., Ampuero, J.-P., Meng, L., et al. (2019). Early and persistent supershear rupture of the 2018 magnitude 7.5 Palu earthquake. Nature Geoscience, 12, 200–205.
  6. Bernard, E. N., and Robinson, A. R. (eds.) (2009). The Sea, Volume 15: Tsunamis. Harvard University Press.
  7. Carrier, G. F., and Greenspan, H. P. (1958). Water waves of finite amplitude on a sloping beach. Journal of Fluid Mechanics, 4, 97–109.
  8. FEMA (2019). Guidelines for Design of Structures for Vertical Evacuation from Tsunamis, 3rd ed. FEMA P-646. Federal Emergency Management Agency.
  9. Fritz, H. M., Hager, W. H., and Minor, H.-E. (2001). Lituya Bay case: rockslide impact and wave run-up. Science of Tsunami Hazards, 19(1), 3–22.
  10. Fujiwara, T., Kodaira, S., No, T., et al. (2011). The 2011 Tohoku-Oki earthquake: displacement reaching the trench axis. Science, 334, 1240.
  11. Kajiura, K. (1963). The leading wave of a tsunami. Bulletin of the Earthquake Research Institute, University of Tokyo, 41, 535–571.
  12. Kanamori, H. (1972). Mechanism of tsunami earthquakes. Physics of the Earth and Planetary Interiors, 6, 346–359.
  13. Kanamori, H., and Rivera, L. (2008). Source inversion of W phase: speeding up seismic tsunami warning. Geophysical Journal International, 175, 222–238.
  14. Lay, T., Kanamori, H., Ammon, C. J., et al. (2005). The great Sumatra-Andaman earthquake of 26 December 2004. Science, 308, 1127–1133.
  15. Levin, B., and Nosov, M. (2016). Physics of Tsunamis, 2nd ed. Springer.
  16. Matoza, R. S., Fee, D., Assink, J. D., et al. (2022). Atmospheric waves and global seismoacoustic observations of the January 2022 Hunga eruption, Tonga. Science, 377, 95–100.
  17. McCaffrey, R. (2008). Global frequency of magnitude 9 earthquakes. Geology, 36, 263–266.
  18. Miller, D. J. (1960). Giant Waves in Lituya Bay, Alaska. U.S. Geological Survey Professional Paper 354-C.
  19. Monserrat, S., Vilibić, I., and Rabinovich, A. B. (2006). Meteotsunamis: atmospherically induced destructive ocean waves in the tsunami frequency band. Natural Hazards and Earth System Sciences, 6, 1035–1051.
  20. Okada, Y. (1985). Surface deformation due to shear and tensile faults in a half-space. Bulletin of the Seismological Society of America, 75, 1135–1154.
  21. Plafker, G. (1965). Tectonic deformation associated with the 1964 Alaska earthquake. Science, 148, 1675–1687.
  22. Satake, K., Shimazaki, K., Tsuji, Y., and Ueda, K. (1996). Time and size of a giant earthquake in Cascadia inferred from Japanese tsunami records of January 1700. Nature, 379, 246–249.
  23. Synolakis, C. E. (1987). The runup of solitary waves. Journal of Fluid Mechanics, 185, 523–545.
  24. Tanioka, Y., and Satake, K. (1996). Tsunami generation by horizontal displacement of ocean bottom. Geophysical Research Letters, 23, 861–864.
  25. Titov, V. V., González, F. I., Bernard, E. N., et al. (2005). Real-time tsunami forecasting: challenges and solutions. Natural Hazards, 35(1), 41–58.

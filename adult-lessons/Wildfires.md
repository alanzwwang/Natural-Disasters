Wildfires — An Advanced Course
══════════════════════════════════════════

Introduction
─────────────────────────────────

Landscape fire is one of the oldest Earth-system processes on a vegetated planet. Charcoal appears in the geological record soon after land plants, some 420 million years ago, and fire has shaped the evolution of grasslands, savannas, conifer forests and eucalypt woodlands ever since. Satellite products show that something like 3.5 to 5 million square kilometres of land burn every year, an area roughly half the size of the contiguous United States, with the majority of it in the tropical savannas of Africa. Most of that burning is ecologically routine. A small fraction of fires, however, escape control, run into communities and become disasters: they kill people, destroy thousands of structures in a single afternoon, pour smoke over whole continents, and impose economic losses that now reach tens of billions of US dollars per event.

Wildfire science is unusually interdisciplinary. The flame itself is a problem in combustion chemistry and heat transfer; whether it spreads depends on the structure and moisture of porous fuel beds; how fast it spreads depends on wind, slope and the atmosphere above; and whether a town survives depends on ember transport, building materials, warnings, evacuation and the long history of land management and settlement. Fire behaviour is also unusually difficult to predict, because the fire modifies its own environment: a large fire builds its own convection column, draws in its own winds, can generate its own thunderstorm, and throws burning material kilometres ahead of itself.

This course treats wildland fire at the level expected of a graduate student or a practitioner in fire management, emergency planning or atmospheric science. It starts from the physics of flaming combustion, builds up to the operational spread and intensity models used by fire agencies, examines the weather and climate that set fire danger, and then turns to extreme fire behaviour, the wildland–urban interface, remote sensing, fire ecology and management, climate change and smoke. Eight case studies, from Peshtigo in 1871 to Los Angeles in 2025, show these processes at work in real events.

In this course, you will:

  1. Describe the chemistry of flaming and smouldering combustion and quantify radiative, convective and conductive heat transfer from a flame front
  2. Characterise wildland fuels by loading, particle size, packing and moisture, and explain timelag classes and fuel models
  3. Apply the Rothermel surface spread model and empirical rules of thumb to estimate rates of spread
  4. Compute Byram's fireline intensity and flame length, and use Van Wagner's criteria for crown fire initiation and spread
  5. Explain how wind, humidity, atmospheric stability, foehn winds and topography control fire behaviour
  6. Calculate and interpret fire danger indices from the Canadian, Australian and US rating systems
  7. Analyse plume-dominated fires, pyrocumulonimbus, fire whirls and long-range spotting
  8. Explain how structures ignite in the wildland–urban interface and what reduces losses
  9. Use satellite active-fire, fire radiative power and burn-severity products quantitatively
  10. Evaluate fire regimes, suppression and prescribed burning, climate-driven trends and the health burden of smoke

─────────────────────────────────
Lesson 1: Combustion and Heat Transfer
─────────────────────────────────

📌 Key idea of this section:

        Fuel + O₂ + heat → pyrolysis gases → flame → CO₂ + H₂O + heat (≈ 18–20 MJ per kg of dry wood)

The fire triangle and the fire tetrahedron

The familiar fire triangle of fuel, oxygen and heat is a useful summary of the necessary conditions for combustion; removing any side extinguishes the fire, which is the logic of every suppression tactic from fuel breaks (fuel), to smothering with soil (oxygen), to water (heat). Combustion scientists add a fourth element, the self-sustaining chain reaction of free radicals in the gas phase, giving the fire tetrahedron. Some chemical retardants and halogenated agents act on that fourth side by scavenging radicals, although long-term wildland retardants based on ammonium phosphate work mainly by altering the pyrolysis of cellulose so that it yields more char and less flammable gas.

Wildland fuel is mostly lignocellulose: cellulose (roughly 40–50 % of dry wood mass), hemicelluloses (20–30 %) and lignin (20–30 %), with small fractions of extractives such as resins, waxes and terpenes. An idealised overall reaction for cellulose, whose monomer is C₆H₁₀O₅, is

        C₆H₁₀O₅ + 6 O₂ → 6 CO₂ + 5 H₂O + heat

The heat of combustion of dry wood is close to 18–20 MJ/kg on a higher-heating-value basis; foliage rich in oils and waxes, such as eucalyptus leaves or chaparral shrubs, can exceed 20 MJ/kg. Fire models usually adopt a single nominal low heat content: Rothermel used 8,000 Btu/lb (18,608 kJ/kg) and Byram's intensity calculations commonly use about 18,000 kJ/kg, reduced somewhat to allow for the latent heat of water vapour and incomplete combustion.

Phases of combustion

A heated fuel particle passes through distinct stages. Below about 100 °C it dries, and as long as free water remains its temperature is pinned near the boiling point. Between roughly 200 and 300 °C hemicellulose and then cellulose begin to decompose thermally (pyrolysis), releasing a mixture of combustible gases (CO, H₂, CH₄ and heavier volatiles including tars) and leaving char. When the volatile flux is large enough to form a flammable mixture with air and a pilot flame or ember is present, flaming ignition occurs, typically with surface temperatures of about 300–400 °C for piloted ignition of wood. The flame is a diffusion flame: fuel gases and oxygen mix at the flame sheet, and visible flame temperatures in wildland fires are typically 800–1,200 °C. After the volatiles are exhausted, the remaining char burns by heterogeneous surface oxidation (glowing combustion), and duff, peat and large logs may sustain smouldering combustion for days to months at low temperatures and with very high emissions of CO and particulate matter per kilogram burned.

Modified combustion efficiency, MCE = ΔCO₂ / (ΔCO₂ + ΔCO), measured in smoke plumes, is a practical indicator of the balance between flaming (MCE near 0.99) and smouldering (MCE around 0.8 or below). Peat fires in Indonesia and smouldering duff in the boreal zone have low MCE and therefore disproportionate effects on air quality.

Heat transfer: radiation, convection, conduction

A fire spreads because the burning zone delivers enough heat to unburned fuel ahead of it to dry it, pyrolyse it and ignite it. Three mechanisms compete. Radiation from flames and hot surfaces follows the Stefan–Boltzmann law,

        q″ = ε σ T⁴     σ = 5.67 × 10⁻⁸ W m⁻² K⁻⁴

where ε is the flame emissivity (approaching 1 for flames thicker than a few metres, which are optically thick because of soot) and T is the absolute temperature. The flux received by a target is reduced by the geometric view factor between flame and target and by absorption in smoke and water vapour. Convection transfers heat by the flow of hot gases: in wind-driven or upslope fires the flames lean over the fuel bed and hot gases bathe it directly, which is why convective heating dominates many rapid spread events. Laboratory work since the 2010s (for example by Finney, Cohen and colleagues at the US Missoula Fire Sciences Laboratory) has shown that in fine fuels, ignition generally requires direct flame contact or convective heating by intermittent flame "bursts" at the base of the fire; radiation alone preheats and dries fuel but often cannot ignite fine particles because they also lose heat rapidly by convective cooling. Conduction within individual fuel particles matters mainly for the heating of thick fuels, soils and structural materials.

Thresholds of radiant heat flux are central to human safety and building design. Commonly used reference values include roughly 1 kW/m² (comparable to bright summer sunshine), around 4–5 kW/m² as an approximate upper limit for short exposure of protected firefighters, and about 12.5 kW/m² as an approximate threshold for piloted ignition of wood over prolonged exposure. The Australian building standard AS 3959 uses Bushfire Attack Levels (BAL-LOW, BAL-12.5, BAL-19, BAL-29, BAL-40 and BAL-FZ, the flame zone), each number denoting the expected radiant heat flux in kW/m².

Energy needed to ignite moist fuel

Water is the most important fire retardant in nature. Raising 1 kg of water from 20 °C to 100 °C and evaporating it requires

        Q = c_{w} ΔT + L_{v} = 4.18 × 80 + 2,257 ≈ 2,590 kJ/kg

Rothermel expressed the heat of pre-ignition per unit mass of fuel as a linear function of fuel moisture content M_{f} (a fraction of dry mass):

        Q_{ig} = 581 + 2,594 M_{f}     (kJ/kg)

so a fine fuel at 30 % moisture requires about 60 % more energy to bring to ignition than the same fuel at 10 %.

✏️ Your Turn

(a) Estimate the radiant flux emitted by an optically thick flame at 1,100 K, and compare it with the threshold for piloted ignition of wood. (b) Using Rothermel's expression, compute the heat of pre-ignition for fine fuel at 10 % and 30 % moisture content.

Answers: (a) q″ = σT⁴ = 5.67 × 10⁻⁸ × 1,100⁴ = 5.67 × 10⁻⁸ × 1.464 × 10¹² ≈ 8.3 × 10⁴ W/m², about 83 kW/m², roughly 6–7 times the ~12.5 kW/m² ignition threshold. A target at some distance receives only a fraction of this, set by the view factor, which is why separation distance is so effective. (b) At M_{f} = 0.10, Q_{ig} = 581 + 259 ≈ 840 kJ/kg; at M_{f} = 0.30, Q_{ig} = 581 + 778 ≈ 1,359 kJ/kg, about 1.6 times as much.

─────────────────────────────────
Lesson 2: Wildland Fuels and Fuel Moisture
─────────────────────────────────

📌 Key idea of this section:

        Fire behaviour depends on how much fuel there is, how finely divided and tightly packed it is, and above all how wet it is

Fuel loading, particle size and packing

Wildland fuels are porous arrays of particles: grass blades, needles, leaves, twigs, branches, logs, bark and decomposing litter and duff. Fire scientists describe them with a few physical properties. Fuel loading w is the oven-dry mass per unit ground area, given in kg/m² or tonnes per hectare (1 kg/m² = 10 t/ha); fine fuel loadings range from about 0.1–0.5 kg/m² in grasslands to 1–2 kg/m² or more in eucalypt forest litter and elevated shrubs, while total loadings in heavy logging slash or old-growth conifer forest can exceed 10 kg/m². The surface-area-to-volume ratio σ measures particle fineness; for cylinders σ = 4/d, so a 1 mm grass blade has σ ≈ 4,000 m⁻¹ while a 10 cm log has σ ≈ 40 m⁻¹. Fine particles heat quickly, dry quickly and burn almost completely in the flaming front, which is why the fine fraction controls the rate of spread.

The packing ratio β = ρ_{b}/ρ_{p} is the fraction of the fuel bed volume occupied by fuel, where ρ_{b} is the bulk density of the bed and ρ_{p} the particle density (typically about 500 kg/m³ for wood). Typical β values are of order 0.001–0.05. Too loose a bed and particles are too far apart to heat each other; too tight and oxygen cannot reach the reaction zone. Rothermel found an optimum packing ratio that decreases with increasing fineness, β_{op} = 3.348 σ^{−0.8189} (σ in ft⁻¹).

Fuel strata and continuity

Fuels are stratified into ground fuels (duff, peat, roots), surface fuels (litter, grass, shrubs and downed woody debris), ladder fuels (small trees, shrubs and bark that connect the surface to the canopy) and canopy fuels. Canopy fuels are characterised by canopy base height (CBH, the height of the lowest continuous canopy fuel), canopy bulk density (CBD, kg/m³ of fine foliage within the crown layer, typically 0.05–0.3 kg/m³ in conifer forests) and foliar moisture content. Horizontal continuity matters as much as quantity: breaks in fuel continuity, such as roads, rock, recent burns and irrigated land, are the anchor points of control lines.

Dead fuel moisture and timelag classes

Dead fuel moisture content (FMC, mass of water as a percentage of oven-dry mass) responds to the atmosphere by absorption and desorption of water vapour, by wetting from rain and dew, and by solar heating. In a constant environment it approaches an equilibrium moisture content (EMC) set mainly by relative humidity and temperature; EMC is roughly 2–5 % at relative humidity below 10 %, about 10 % near 50 % relative humidity and approaches the fibre saturation point (around 30–35 %) near saturation. The approach to equilibrium is approximately exponential,

        M(t) = M_{e} + (M_{0} − M_{e}) e^{−t/τ}

where τ is the timelag, the time required to cover 1 − 1/e ≈ 63 % of the difference between the initial and equilibrium moisture. Because τ scales with particle size, US fire danger practice groups dead fuels into four standard timelag classes:

        Class       Diameter               Response time
        1-hour      < 0.64 cm (¼ in)       hours (fine litter, grass)
        10-hour     0.64–2.5 cm            about a day
        100-hour    2.5–7.6 cm             days
        1000-hour   7.6–20 cm              weeks to a season

Fine fuels track the diurnal cycle of humidity almost exactly, reaching their driest in mid-afternoon, which is why so many destructive runs occur between about 13:00 and 18:00 local time. The 1000-hour class and duff integrate weeks to months of weather and are good indicators of seasonal drought and of how much heavy fuel will burn once ignited.

Live fuel moisture

Living foliage holds water under physiological control. Live fuel moisture in new spring growth can exceed 200–250 %, falling during the dry season to 60–80 % in drought-stressed chaparral and sagebrush. Values below roughly 60–80 % in Californian chaparral are widely associated with large fire growth. Conifer foliar moisture usually lies between about 80 % and 130 %, with a seasonal minimum in spring (the "spring dip" related to carbohydrate changes) that has been linked to enhanced crown fire activity in boreal forests.

Moisture of extinction and fuel models

Each fuel type has a moisture of extinction M_{x}, above which a fire will not spread with a sustained flame front. For dead fuels M_{x} ranges from about 12–15 % in fine grass to 25–40 % in some shrub and litter types. To make fire models usable in practice, fuels are summarised as standard fuel models: Anderson (1982) described the 13 original models used with the Rothermel model (grass models 1–3, shrub models 4–7, timber litter 8–10 and logging slash 11–13), and Scott and Burgan (2005) added a set of 40 models including dynamic grass and shrub models in which live herbaceous fuel cures and transfers to the dead class. Canada's Fire Behaviour Prediction (FBP) System uses 16 empirically calibrated fuel types such as C-2 (boreal spruce) and O-1 (grass), and Australian systems use vegetation-specific models such as the Dry Eucalypt Forest Fire Model (Project Vesta).

✏️ Your Turn

(a) A 10-hour fuel stick is at 20 % moisture when humidity drops abruptly; the new equilibrium moisture content is 6 %. Estimate its moisture after 10 h and after 20 h. (b) A 1-hour fuel under the same change: what is its moisture after 3 h? (c) A grass blade has a diameter of 0.5 mm. What is its surface-area-to-volume ratio?

Answers: (a) M(10 h) = 6 + 14 e^{−1} = 6 + 5.15 ≈ 11.2 %; M(20 h) = 6 + 14 e^{−2} ≈ 7.9 %. (b) M(3 h) = 6 + 14 e^{−3} ≈ 6.7 %, essentially at equilibrium. (c) σ = 4/d = 4/(5 × 10⁻⁴ m) = 8,000 m⁻¹ (about 2,440 ft⁻¹), typical of fine grasses.

─────────────────────────────────
Lesson 3: Rate of Spread Models
─────────────────────────────────

📌 Key idea of this section:

        R = I_{R} ξ (1 + φ_{w} + φ_{s}) / (ρ_{b} ε Q_{ig})     (heat received ÷ heat needed to ignite)

The heat balance behind Rothermel's model

The most widely used operational surface fire spread model in the world was published by Richard Rothermel of the US Forest Service in 1972. It starts from a conservation-of-energy argument due to Frandsen (1971): in steady spread, the rate at which heat arrives at unburned fuel must equal the rate at which that fuel must absorb heat to reach ignition. The heat required per unit volume of fuel bed is ρ_{b} ε Q_{ig}, where ε is the effective heating number (the fraction of each particle that must be heated to ignition, which is close to 1 for fine particles and smaller for coarse ones; ε = exp(−138/σ) with σ in ft⁻¹). The heat received is the propagating flux ξ I_{R}, where I_{R} is the reaction intensity (heat release rate per unit area of the flaming zone, kW/m²) and ξ is the propagating flux ratio, the fraction of that heat that reaches the unburned fuel in the absence of wind and slope. Wind and slope enhance the propagating flux through the dimensionless factors φ_{w} and φ_{s}.

Rothermel determined the functional forms empirically from wind tunnel experiments in beds of excelsior and sieved wood particles, with Albini (1976) and later authors extending and documenting the model. Key ingredients include:

        Reaction intensity      I_{R} = Γ′ w_{n} h η_{M} η_{s}
        Moisture damping        η_{M} = 1 − 2.59 r_{M} + 5.11 r_{M}² − 3.52 r_{M}³,  r_{M} = M_{f}/M_{x}
        Slope factor            φ_{s} = 5.275 β^{−0.3} (tan θ)²
        Wind factor             φ_{w} = C U^{B} (β/β_{op})^{−E}

Here Γ′ is the optimum reaction velocity, w_{n} the net fuel loading, h the heat content, η_{s} a mineral damping coefficient, θ the slope angle and U the midflame wind speed; C, B and E are functions of σ. The moisture damping coefficient falls to zero when the fuel moisture reaches the moisture of extinction. The model assumes a homogeneous, continuous surface fuel bed and a steady fire, and it predicts the forward rate of spread of the head of a surface fire. It is the engine inside BehavePlus, FARSITE, FlamMap and many decision-support systems, and Andrews (2018) gives a comprehensive modern account.

Why slope and wind matter so much

Upslope, the flame leans closer to the fuel ahead and the convective plume bathes it; downslope the effect reverses. The slope factor grows with the square of tan θ. Australian field guidance from McArthur's work summarises the effect as a doubling of spread rate for every 10° of upslope gradient and a halving for every 10° downslope, valid for moderate slopes up to about 20°. On steep slopes and in narrow canyons, attached plumes and flow channelling can generate eruptive fire behaviour, an acceleration far beyond what steady-state models predict; the 1994 South Canyon fire in Colorado (14 firefighter deaths) and the 1949 Mann Gulch fire in Montana (13 deaths) are classic examples.

Wind is the dominant control on spread in most destructive fires. Empirical studies in grassland (Cheney, Gould and Catchpole) show spread rate rising roughly in proportion to wind speed above a threshold, and in fully cured continuous grass under severe conditions head fire spread can reach 3–6 m/s (10–20 km/h). For forests and shrublands, Cruz and Alexander (2019) proposed a useful first approximation: under dry conditions, the forward rate of spread of a wind-driven wildfire is about 10 % of the average 10-metre open wind speed, in the same units.

Fire shape and the spread of flanks and back

A point-ignited fire in uniform conditions grows into an approximately elliptical shape, with a length-to-breadth ratio that increases with wind speed (roughly 1–1.5 in light winds, 2–4 in moderate winds, and 5–8 or more in strong winds over grass). Fire growth simulators such as FARSITE and Prometheus propagate the perimeter using Huygens' principle: each point on the front acts as a source of a small elliptical wavelet, and the envelope of those wavelets gives the new perimeter. Flank and back fires have much lower intensities than the head, which is why suppression usually begins from an anchor point on the flank and works toward the head.

Physics-based models

Empirical models break down where fires interact with the atmosphere, terrain and heterogeneous fuels. Coupled fire–atmosphere models (WRF-SFIRE, WRF-Fire, ACCESS-Fire) link a spread model to a numerical weather model so that the fire's heat release modifies the winds. Computational fluid dynamics models such as the US National Institute of Standards and Technology's WFDS and the Los Alamos FIRETEC resolve combustion and flow in three dimensions but at a computational cost far too high for real-time operations. Machine-learning emulators are an active research area.

✏️ Your Turn

(a) A forest fire is driven by a 10-m open wind of 50 km/h under dry conditions. Use the 10 % rule to estimate its rate of spread in km/h, m/min and m/s. (b) Using McArthur's slope rule, by what factor does the spread rate increase on a 20° upslope compared with flat ground? (c) For a fuel bed with β = 0.005, compute the Rothermel slope factor on a slope with tan θ = 0.5 (about 27°).

Answers: (a) R ≈ 0.10 × 50 = 5 km/h = 83 m/min ≈ 1.4 m/s. (b) Two doublings: 2 × 2 = 4 times as fast. (c) φ_{s} = 5.275 × 0.005^{−0.3} × 0.5² = 5.275 × 4.90 × 0.25 ≈ 6.5, so in the absence of wind the head fire would spread (1 + 6.5)/1 ≈ 7.5 times faster than on flat ground, which shows how strongly Rothermel's formulation weights steep slopes.

─────────────────────────────────
Lesson 4: Fireline Intensity, Flame Length and Crown Fire
─────────────────────────────────

📌 Key idea of this section:

        I = H w R     L = 0.0775 I^{0.46}     (I in kW/m, L in m)

Byram's fireline intensity

In 1959 George Byram defined fireline intensity as the rate of heat release per unit length of the fire front,

        I = H w R

with H the heat yield (kJ/kg), w the mass of fuel consumed in the flaming front (kg/m²) and R the forward rate of spread (m/s). The units are kW/m. Fireline intensity is the single most useful descriptor of a fire's suppression difficulty and of its effects on vegetation. It spans more than five orders of magnitude, from below 10 kW/m in a creeping backing fire in litter to more than 100,000 kW/m in the most violent crown fires.

Byram related intensity to the observable flame length L (the distance from the base of the flame to its tip, measured along the flame axis). In SI units his relation is

        L = 0.0775 I^{0.46}

Other correlations exist (for example Thomas's L ∝ I^{2/3}), and flame length is notoriously hard to estimate in the field, but Byram's form is embedded in US operational practice.

Interpreting intensity for suppression

Andrews and Rothermel's fire characteristics chart and associated guidance translate intensity into tactical limits:

        Intensity (kW/m)     Flame length (m)    Interpretation
        < 350                < 1.2               Direct attack at head and flanks with hand tools
        350–1,700            1.2–2.4             Too intense for hand crews; equipment and aircraft
        1,700–3,500          2.4–3.4             Serious control problems; torching, crowning, spotting
        > 3,500              > 3.4               Control efforts at the head likely ineffective

Australian and Canadian guidance is similar: fires above about 4,000 kW/m are generally beyond direct attack by any means, and fires above about 10,000 kW/m typically develop into fully active crown fires in forests, with massive spotting.

Crown fire initiation and spread

A surface fire transitions to a crown fire when its flames and hot gases reach and ignite the canopy. Van Wagner (1977) derived a criterion for the surface fireline intensity required to initiate crowning,

        I_{0} = (0.010 CBH (460 + 25.9 FMC))^{1.5}

with CBH in metres and the foliar moisture content FMC in percent. Torching of individual trees (passive crown fire) can then occur. Sustained active crown fire, in which flames move through the canopy in step with the surface fire, requires a minimum rate of spread for the crown layer to maintain a sufficient mass flow rate of fuel into the flame zone:

        R_{0} = 3.0 / CBD     (R in m/min, CBD in kg/m³)

Crown fires in boreal and western North American conifer forests commonly spread at 15–100 m/min with intensities of 10,000–100,000 kW/m. Reducing surface fuels, raising canopy base height by pruning and thinning, and reducing canopy bulk density are the physical rationale for fuel treatments intended to keep fires on the ground.

✏️ Your Turn

(a) A fire consumes 1.0 kg/m² of fuel with heat yield 18,000 kJ/kg and spreads at 0.5 m/s. Compute its fireline intensity and flame length, and interpret it. (b) Compute Van Wagner's critical intensity for crown fire initiation for CBH = 4 m and FMC = 100 %, and for CBH = 2 m. (c) What minimum spread rate is required for active crowning when CBD = 0.15 kg/m³?

Answers: (a) I = 18,000 × 1.0 × 0.5 = 9,000 kW/m; L = 0.0775 × 9,000^{0.46} ≈ 5.1 m. This is far beyond the 3,500 kW/m threshold: suppression at the head is ineffective and crowning and spotting are likely. (b) For CBH = 4 m: 0.010 × 4 × (460 + 2,590) = 122; I_{0} = 122^{1.5} ≈ 1,350 kW/m. For CBH = 2 m: 61^{1.5} ≈ 476 kW/m. Halving canopy base height lowers the threshold by a factor of 2^{1.5} ≈ 2.8. (c) R_{0} = 3.0/0.15 = 20 m/min (1.2 km/h).

─────────────────────────────────
Lesson 5: Fire Weather and Topography
─────────────────────────────────

📌 Key idea of this section:

        Dry fuel + strong wind + low humidity + unstable air aloft = the conditions for catastrophic fire

Temperature, humidity and wind

Fire weather integrates processes on timescales from seconds to seasons. Over months, rainfall deficits and evaporative demand dry the heavy fuels and soils and cure grasses. Over days, persistent ridges of high pressure bring heat waves, subsidence and low humidity. Within a day, fine fuel moisture follows the diurnal cycle of relative humidity, so that the afternoon minimum humidity, often below 15 % and in extreme events below 5 %, sets peak fire activity. Wind supplies oxygen, tilts the flame over the fuel, transports embers and is the most important variable in the spread of destructive fires. Vapour pressure deficit (VPD), the difference between the saturation vapour pressure and the actual vapour pressure, has emerged as a particularly good predictor of fire activity in the western United States because it combines temperature and humidity in a single measure of atmospheric drying power.

Atmospheric stability and the Haines Index

The vertical structure of the atmosphere controls how readily a fire's convection column can grow. An unstable, dry lower troposphere lets plumes rise vigorously, increases indraft winds and promotes erratic behaviour. Haines (1988) proposed the Lower Atmosphere Severity Index, the Haines Index, which sums a stability term (the temperature difference between two pressure levels) and a moisture term (the dew-point depression at the lower level), each scored 1–3, giving values from 2 to 6; values of 5–6 indicate a high potential for large plume-dominated fire growth. The Continuous Haines Index used in Australia removes the cap and is more discriminating. More recent research uses the full vertical profile, for example the pyrocumulonimbus firepower threshold developed by Tory and Kepert, which estimates the minimum heat release needed for a plume to reach its condensation level and grow into a fire thunderstorm.

Foehn and downslope winds

Many of the most destructive fires in the world are driven by warm, dry downslope winds. When air descends the lee of a mountain range it warms at the dry-adiabatic lapse rate of about 9.8 K per km while its water vapour mixing ratio stays constant, so its relative humidity falls sharply. Regional examples include the Santa Ana and Sundowner winds of southern California, the Diablo winds of northern California (critical in the 2017 Tubbs and 2018 Camp fires), the east winds of the Pacific Northwest, the Chinook of the Rocky Mountain front, downslope winds in the lee of the West Maui Mountains (Lahaina 2023), and hot north-westerly winds ahead of cold fronts in south-eastern Australia. Strong downslope windstorms are favoured when a stable layer or inversion near ridge-top height lets the flow behave like a hydraulic jump, accelerating down the lee slope.

Fronts and wind changes

In south-eastern Australia, the deadliest days typically feature hot, dry north-westerly winds ahead of a cold front, followed by an abrupt south-westerly wind change. The long eastern flank of a fire that has run to the south-east under north-westerlies becomes, within minutes of the change, a head fire several kilometres to tens of kilometres wide. This sequence occurred on Ash Wednesday (16 February 1983) and on Black Saturday (7 February 2009). Similar abrupt wind shifts from thunderstorm outflows and sea breezes have caused many firefighter entrapments.

Topography

Terrain controls fire behaviour directly through slope and indirectly through its effects on wind, insolation and fuel. South- and west-facing slopes in the Northern Hemisphere (north- and west-facing in the Southern Hemisphere) receive more solar radiation, have drier fuels and often burn more intensely. Narrow valleys and chimneys channel wind and plumes, saddles accelerate flows, and ridge tops are where wind and fire converge. Nocturnal down-valley drainage winds and daytime up-valley winds produce strong diurnal cycles of fire behaviour in mountain terrain, and night-time thermal belts on mid-slopes can keep humidity low and fires active overnight.

✏️ Your Turn

(a) Air at 2,000 m above sea level has a temperature of 5 °C and relative humidity 60 %. It descends to sea level as a dry foehn wind. Using the dry-adiabatic lapse rate of 9.8 K/km, a pressure of about 795 hPa at 2,000 m, and the Magnus formula e_{s}(T) = 6.112 exp(17.67 T / (T + 243.5)) hPa, estimate the temperature and relative humidity on arrival at 1,013 hPa. (b) Why does the absolute amount of water vapour not change during the descent?

Answers: (a) T = 5 + 9.8 × 2.0 ≈ 24.6 °C. At the start e_{s}(5 °C) ≈ 8.72 hPa, so e = 0.60 × 8.72 ≈ 5.23 hPa. Because the mixing ratio is conserved, vapour pressure scales with total pressure: e ≈ 5.23 × 1,013/795 ≈ 6.67 hPa. At 24.6 °C, e_{s} ≈ 30.9 hPa, so RH ≈ 6.67/30.9 ≈ 22 %. The air arrives almost 20 K warmer and with humidity cut from 60 % to about 22 %. (b) In unsaturated descent there is no condensation or evaporation, so the water vapour mixing ratio is conserved; only the saturation vapour pressure changes with temperature. If the air had lost moisture as precipitation on the windward side, the foehn would be drier still.

─────────────────────────────────
Lesson 6: Fire Danger Rating Systems
─────────────────────────────────

📌 Key idea of this section:

        Fire danger indices convert weather and fuel moisture into an expected difficulty of control, not a prediction of any single fire

Purpose and structure

Fire danger rating systems are used to set readiness levels, declare total fire bans, pre-position resources and warn the public. They are empirical frameworks built on decades of experimental fires and calibrated to regional fuels. The three most influential are the Canadian Forest Fire Danger Rating System, Australia's McArthur meters and their successor, and the US National Fire Danger Rating System.

The Canadian Forest Fire Weather Index System

The Canadian Fire Weather Index (FWI) System, documented by Van Wagner (1987), is the most widely used fire danger system worldwide and underpins the European EFFIS service and many climate studies. From daily noon temperature, relative humidity, 10-m wind speed and 24-h rainfall it tracks three moisture codes representing fuel layers with different drying rates: the Fine Fuel Moisture Code (FFMC, surface litter, timelag about two-thirds of a day), the Duff Moisture Code (DMC, loosely compacted organic layers, about 15 days) and the Drought Code (DC, deep compact organic matter, about 52 days). These combine into the Initial Spread Index (ISI, from FFMC and wind), the Buildup Index (BUI, from DMC and DC), and finally the FWI, a dimensionless measure of potential fireline intensity. The FFMC is converted to a fine fuel moisture content and the ISI computed as

        m = 147.2 (101 − FFMC) / (59.5 + FFMC)
        ISI = 0.208 f(W) f(F),   f(W) = e^{0.05039 W},   f(F) = 91.9 e^{−0.1386 m} (1 + m^{5.31}/(4.93 × 10⁷))

with W in km/h. An FWI above about 30 is high to extreme in most Canadian forests; values above 50 occur in the most severe events.

McArthur's Forest Fire Danger Index and the AFDRS

A. G. McArthur of the Australian Forestry and Timber Bureau developed fire danger meters in the 1960s; Noble, Bary and Gill (1980) fitted them with equations. The Forest Fire Danger Index is

        FFDI = 2 exp(−0.450 + 0.987 ln D − 0.0345 H + 0.0338 T + 0.0234 V)

where D is a drought factor (0–10), H relative humidity (%), T air temperature (°C) and V the 10-m wind speed (km/h). McArthur scaled the index so that 100 corresponded to the worst conditions he knew, those of Black Friday, 13 January 1939, in Victoria. On Black Saturday in 2009 FFDI exceeded 100 at many locations, and afterwards a new "Catastrophic" (in Victoria "Code Red") category was introduced for FFDI ≥ 100. In September 2022 Australia replaced the McArthur-based ratings nationally with the Australian Fire Danger Rating System (AFDRS), which uses eight fuel-specific fire behaviour models and four public warning levels: Moderate, High, Extreme and Catastrophic.

The US National Fire Danger Rating System

The US NFDRS, first implemented in 1972 and revised in 1978, 1988 and 2016, uses fuel models and the Rothermel equations to compute indices including the Spread Component, the Energy Release Component (ERC, a measure of the potential available energy in the flaming zone strongly linked to heavier fuel and live fuel moisture), the Ignition Component, and the Burning Index (BI, proportional to ten times the predicted flame length in feet). The 2016 version replaced the earlier moisture models with the Nelson dead fuel moisture model and a growing-season-index model for live fuels. Seasonal ERC percentiles are widely used by managers to judge how a season compares with climatology.

Limitations

Indices are not fire behaviour predictions. They assume standard fuels and flat terrain, use point weather observations, and say nothing about ignitions or the wildland–urban interface. Extreme events are often driven by processes the indices do not represent, such as pyroconvection, mid-level dryness or wind changes. Research on the Hot-Dry-Windy Index (Srock and colleagues, 2018), which uses the near-surface layer of a weather model, and on probabilistic and machine-learning approaches, aims to fill some of these gaps.

✏️ Your Turn

(a) Compute the FFDI for T = 45 °C, H = 8 %, V = 60 km/h and D = 10, and compare it with a mild day of T = 25 °C, H = 40 %, V = 20 km/h, D = 8. (b) Compute the FFMC-derived fine fuel moisture content and the ISI for FFMC = 92 with winds of 20 km/h and 40 km/h.

Answers: (a) Extreme day: exponent = −0.450 + 0.987 × ln 10 − 0.0345 × 8 + 0.0338 × 45 + 0.0234 × 60 = −0.450 + 2.273 − 0.276 + 1.521 + 1.404 = 4.472, so FFDI = 2 e^{4.472} ≈ 175, deep in the Catastrophic range. Mild day: exponent = −0.450 + 2.052 − 1.380 + 0.845 + 0.468 = 1.535, FFDI ≈ 9.3 (low to moderate). (b) m = 147.2 × 9/151.5 ≈ 8.7 %. Then f(F) ≈ 91.9 × e^{−1.212} × 1.002 ≈ 27.4; for W = 20 km/h, ISI = 0.208 × e^{1.008} × 27.4 ≈ 15.6; for W = 40 km/h, ISI ≈ 0.208 × e^{2.016} × 27.4 ≈ 42.8. Doubling wind speed nearly triples the expected rate of spread, because the wind function is exponential.

─────────────────────────────────
Lesson 7: Extreme Fire Behaviour, Pyroconvection and Spotting
─────────────────────────────────

📌 Key idea of this section:

        N_{c} = 2 g I / (ρ c_{p} T_{a} (U − R)³)     (N_{c} ≫ 1: plume-dominated; N_{c} < 1: wind-driven)

Wind-driven and plume-dominated fires

Byram recognised two broad regimes of large fire behaviour. In a wind-driven fire, the kinetic energy of the ambient wind dominates and the column is bent over; spread is fast and fairly predictable in direction. In a plume-dominated fire, the buoyant energy released by the fire dominates, the column stands nearly vertical, and the fire's own indraft winds can control spread, making behaviour erratic and sometimes extremely rapid in all directions. Byram's convection number compares the rate of buoyant energy production with the rate of kinetic energy flow in the ambient wind relative to the fire, as given above, with g gravitational acceleration, I in W/m, ρ and c_{p} the density and specific heat of air, T_{a} ambient temperature (K), U the wind speed and R the spread rate. Because of the cube of relative wind speed, a fire of fixed intensity can switch regime as the wind drops or rises. Interpretation thresholds in the literature vary (some authors use N_{c} > 10 for strongly plume-dominated fires and N_{c} < 2 for wind-driven), and the number is best regarded as indicative.

Pyrocumulus and pyrocumulonimbus

When a buoyant smoke plume rises to its lifting condensation level, water vapour from the ambient air, supplemented by water released in combustion, condenses into a pyrocumulus cloud. If the plume penetrates higher and its updraft is sustained, it can grow into a pyrocumulonimbus (pyroCb): a fire-generated thunderstorm with tops in the upper troposphere or lower stratosphere, lightning, strong downdrafts and sometimes hail or black hail of charred material. Fromm et al. (2010) brought these "untold" storms to wide attention by showing that pyroCbs inject smoke into the stratosphere much as moderate volcanic eruptions inject ash and sulphate. PyroCb downdrafts produce strong, gusty surface winds in all directions, spawn new ignitions by lightning and can collapse onto the fireground with little warning. They are now monitored operationally with geostationary satellites and lightning networks; dozens of pyroCb events are recorded globally in most years, mainly in boreal North America, Siberia and south-eastern Australia.

The Australian Black Summer of 2019–20 produced a pyroCb "super outbreak" between 29 December 2019 and 4 January 2020, documented by Peterson et al. (2021). The resulting smoke mass in the stratosphere was comparable to that of a moderate volcanic eruption; one coherent smoke vortex self-lofted by solar heating to about 35 km altitude over the following months. The Pacific Northwest pyroCb outbreak of August 2017 had shown similar behaviour on a smaller scale.

Fire whirls and fire tornadoes

Vortices form where a fire's strong buoyant updraft stretches existing horizontal or vertical vorticity, for example from wind shear, terrain eddies or the convergence of indrafts. Most fire whirls are small, metres to tens of metres across, but some are tornado-strength. On 18 January 2003 a pyroCb associated with the fires around Canberra produced a pyrotornado documented by McRae and colleagues. On 26 July 2018 the Carr Fire near Redding, California, generated a vortex about 300 m wide; Doppler radar and damage surveys indicated winds equivalent to an EF3 tornado, estimated at up to about 230 km/h (143 mph), and Lareau et al. (2018) described it as a case of pyrotornadogenesis, the vortex being linked to a deep pyrocumulonimbus column.

Spotting and ember transport

Spotting, the ignition of new fires by burning firebrands carried ahead of the main front, is the main way fires breach rivers, highways and fuel breaks, and the main way houses ignite. Short-range spotting (tens to hundreds of metres) by bark flakes, twigs and cones occurs in most intense fires and greatly increases the effective spread rate. Long-range spotting depends on lofting in the convection column and the availability of firebrands that burn long enough to arrive alive; the long, ribbon-like bark of candlebark and other eucalypts and the fibrous bark of stringybarks are notorious. Spot fires in excess of 10 km ahead of the front are documented in many severe Australian fires, and distances of more than 30 km have been reported in the most extreme. Albini (1979) developed physical models of maximum spotting distance from torching trees and burning piles that are still used in BehavePlus. Ember showers can produce thousands of ignitions per hectare, merging into "mass spotting", which makes the front effectively discontinuous and impossible to contain.

✏️ Your Turn

(a) Compute Byram's convection number for a fire of intensity 20,000 kW/m spreading at 1 m/s in a 5 m/s wind (ρ = 1.1 kg/m³, c_{p} = 1,005 J kg⁻¹ K⁻¹, T_{a} = 300 K, g = 9.81 m/s²). (b) Repeat for a wind of 12 m/s, and comment.

Answers: (a) N_{c} = 2 × 9.81 × 2.0 × 10⁷ / (1.1 × 1,005 × 300 × 4³) = 3.92 × 10⁸ / 2.12 × 10⁷ ≈ 18.5, strongly plume-dominated. (b) With U − R = 11 m/s, (U − R)³ = 1,331 and N_{c} ≈ 0.89, wind-driven. Merely raising the wind from 5 to 12 m/s changes the regime by a factor of about 21, because of the cubic dependence; a fire burning in a dying wind in the evening can become plume-dominated and erratic.

─────────────────────────────────
Lesson 8: The Wildland–Urban Interface and Structure Ignition
─────────────────────────────────

📌 Key idea of this section:

        Whether a house burns depends mainly on the house and its surroundings within about 30 m, not on the wildfire itself

Defining the WUI

The wildland–urban interface (WUI) is the zone where houses meet or intermingle with undeveloped wildland vegetation. In the United States, Radeloff et al. (2018) found that the WUI grew from about 30.8 million to 43.4 million houses between 1990 and 2010, a 41 % increase, making it the fastest-growing land-use type in the conterminous US. Similar expansion is under way around cities in Australia, the Mediterranean, Chile and South Africa. Because most ignitions are human-caused, WUI growth increases both the number of ignitions and the number of exposed buildings.

How structures ignite

There are three exposure pathways. Embers (firebrands) landing in gutters, on decks, against walls, in vents or on combustible mulch are responsible for the large majority of house losses in post-fire surveys from Australia and the US; ember attack can begin well before the fire front arrives and continue for hours after it has passed. Radiant heat from burning vegetation or, more often, from adjacent burning buildings can crack and break windows (ordinary annealed glass can crack after a few minutes at roughly 10 kW/m² or more) and ignite exposed timber. Direct flame contact from burning vegetation, fences, sheds, vehicles or neighbouring houses completes the set. Jack Cohen of the US Forest Service combined modelling with crown fire experiments. His radiation model indicated that even a large crown fire flame front would not ignite a wooden wall by radiation from more than about 40 m away, and even at that distance only after about 10 minutes of sustained exposure, far longer than a front usually burns at one spot. Experimental crown fires suggested the model overestimates this distance: wall sections about 10 m from the burning forest edge did not ignite without direct flame contact. Cohen also introduced the concept of the home ignition zone: the house and its surroundings within about 30 m (100 ft), whose condition largely determines whether the house survives (Cohen 2000).

Urban conflagration

In wind-driven events with heavy ember loads, once a fraction of houses in a dense neighbourhood ignite, house-to-house spread by radiation, flame contact and embers from burning buildings can dominate. Paradise (2018), Lahaina (2023) and Altadena and Pacific Palisades (2025) all show this transition from a wildfire to an urban conflagration, in which the fuel is the town itself and conventional wildland suppression is largely irrelevant. Spacing between buildings, the combustibility of fences and outbuildings, and the number of firefighters available per burning structure become decisive.

Reducing structure losses

Building codes for bushfire- and wildfire-prone areas, such as Australia's AS 3959 and California's Chapter 7A (in force since 2008), specify ember-resistant vents, non-combustible or ignition-resistant cladding and roofing, enclosed eaves, tempered or multi-pane glazing and protection of subfloors and decks, with requirements scaled to expected exposure. Defensible space regulations in California require clearance of vegetation up to 30 m (100 ft) from structures, and a non-combustible "zone zero" within about 1.5 m (5 ft) of the walls is increasingly emphasised. Studies of houses exposed in the 2018 Camp Fire and other events found that structures built to newer codes, and those with fewer combustibles in the immediate surroundings, survived at substantially higher rates. Community-scale measures include fuel breaks, evacuation route planning, early warning, shelter-in-place refuges and, for power utilities, public safety power shutoffs and covered conductors to reduce ignitions under extreme fire weather.

Evacuation and warnings

Deaths in wildfires are concentrated among people who leave late, become trapped in vehicles on congested roads, or shelter in houses that fail. After Black Saturday, Australian policy shifted away from a "stay and defend or leave early" choice presented as equally valid, towards a strong emphasis on leaving early on days of the highest danger, with designated neighbourhood safer places as a last resort. Wireless emergency alerts, zone-based evacuation systems and clear, actionable warnings are essential, but the speed of wind-driven fires (Paradise, Lahaina) can outrun warning systems entirely.

✏️ Your Turn

(a) Treat a burning house as a point source radiating P = 5 MW uniformly in all directions. At what distance does the incident flux fall to 12.5 kW/m²? To 40 kW/m²? (b) Explain why the point-source approximation underestimates the hazard close to a large flame front.

Answers: (a) q = P/(4πd²), so d = √(P/(4πq)). For 12.5 kW/m²: d = √(5 × 10⁶ / (4π × 12,500)) = √31.8 ≈ 5.6 m. For 40 kW/m²: d ≈ 3.2 m. Adjacent buildings closer than about 5–6 m are therefore at serious risk of ignition from a burning neighbour within minutes. (b) Close to an extended flame front the flux is set by the view factor of a large radiating panel, which falls much more slowly than 1/d² until the distance becomes comparable to the flame dimensions; near the front the receiver may "see" an almost hemispherical field of flame.

─────────────────────────────────
Lesson 9: Detection, Mapping and Remote Sensing
─────────────────────────────────

📌 Key idea of this section:

        λ_{max} = 2,898 µm·K / T: flames peak near 3–4 µm, the land near 10 µm; mid-infrared channels detect fire

Physical basis

Wien's displacement law places the peak emission of a body at about 1,000 K near 2.9 µm, while the Earth's surface at about 300 K peaks near 9.7 µm. A sub-pixel fire covering only a small fraction of a pixel therefore raises the brightness temperature in a mid-infrared channel near 4 µm far more than in a thermal channel near 11 µm. Active fire algorithms exploit this contrast together with contextual tests against neighbouring pixels and masks for clouds, water, sun glint and hot bare ground.

Polar-orbiting and geostationary sensors

The MODIS instruments on NASA's Terra (launched 1999) and Aqua (2002) satellites provide global active-fire detections at about 1 km resolution several times a day (Giglio et al. 2003, 2016), and a long-running burned area product (MCD64A1). The VIIRS instruments on Suomi NPP (2011), NOAA-20 (2017) and NOAA-21 (2022) detect fires at 375 m resolution (Schroeder et al. 2014), sensitive enough to pick up fires of a few tens of square metres under good conditions. Geostationary sensors, including the Advanced Baseline Imager on NOAA's GOES-R series (GOES-16 from 2016), Himawari-8/9 over Asia and Australia and the Meteosat series, observe at 2 km resolution every 5–15 min and as often as every minute in mesoscale sectors, giving the timing of fire growth and pyroCb development. NASA's FIRMS system distributes detections in near real time. Landsat (30 m) and Sentinel-2 (10–20 m) map fire perimeters and severity, airborne infrared line scanners map perimeters at night for incident teams, and new constellations of small satellites aim to reduce detection latency to minutes.

Fire radiative power

Each detection carries an estimate of fire radiative power (FRP, MW), derived from the excess mid-infrared radiance. Integrating FRP over time gives fire radiative energy (FRE). Experiments by Wooster et al. (2005) showed that dry matter combustion is approximately proportional to FRE, with a factor of about 0.368 kg per MJ. FRP-based emissions underpin global systems such as the Copernicus Global Fire Assimilation System, while the Global Fire Emissions Database (GFED) uses burned area combined with biogeochemical modelling of fuel consumption.

Burned area and severity

Burn severity, the degree of change to vegetation and soil, is commonly mapped with the Normalized Burn Ratio,

        NBR = (NIR − SWIR) / (NIR + SWIR)

using near-infrared and shortwave-infrared (around 2.2 µm) reflectance. Healthy vegetation reflects strongly in the NIR and weakly in the SWIR; burned surfaces do the opposite. The difference between pre-fire and post-fire values, dNBR, and its relativised variants are calibrated against field plots using the Composite Burn Index (Key and Benson 2006). The US Monitoring Trends in Burn Severity (MTBS) programme maps all large US fires since 1984 with Landsat.

Detection on the ground and ignition sources

Lightning detection networks locate cloud-to-ground strikes and are used to anticipate "holdover" fires that smoulder for days before emerging. Networks of high-definition cameras on mountain tops, increasingly with automated smoke detection by machine vision, now supplement fire lookouts. Across most regions, human activity causes the majority of ignitions (for example about 84 % of US wildfires in 1992–2012 according to Balch and colleagues), but lightning causes most of the area burned in remote boreal forests.

✏️ Your Turn

(a) Find the wavelength of peak emission for a flame at 1,000 K and for the land surface at 300 K. (b) A fire sustains an average FRP of 1,000 MW for 1 hour. Estimate the mass of dry fuel consumed. (c) Before a fire a pixel has NIR = 0.30 and SWIR = 0.12; afterwards NIR = 0.15 and SWIR = 0.25. Compute pre-fire NBR, post-fire NBR and dNBR.

Answers: (a) 2,898/1,000 ≈ 2.9 µm; 2,898/300 ≈ 9.7 µm. (b) FRE = 1,000 MW × 3,600 s = 3.6 × 10⁶ MJ; mass ≈ 0.368 × 3.6 × 10⁶ ≈ 1.32 × 10⁶ kg, about 1,300 t of dry matter. (c) Pre-fire NBR = 0.18/0.42 ≈ 0.43; post-fire NBR = −0.10/0.40 = −0.25; dNBR = 0.43 − (−0.25) ≈ 0.68 (often reported multiplied by 1,000, i.e. ≈ 680), in the high-severity range of commonly used thresholds.

─────────────────────────────────
Lesson 10: Fire Regimes, Management, Climate Change and Smoke
─────────────────────────────────

📌 Key idea of this section:

        Fire risk = hazard (weather × fuel × ignition) × exposure × vulnerability; climate change is lengthening and intensifying fire weather

Fire regimes and ecology

A fire regime describes the typical frequency, intensity, severity, season, size and pattern of fires in an ecosystem. Historically, many dry ponderosa pine and mixed-conifer forests of western North America experienced frequent low- to moderate-severity surface fires every few years to few decades; lodgepole pine and many boreal forests experience infrequent stand-replacing crown fires at intervals of roughly 50–300 years; tropical savannas may burn every one to three years; and tropical rainforests and many deserts historically burned rarely. Species are adapted to their regime: serotinous cones of lodgepole and jack pine open in the heat of fire; many eucalypts resprout from epicormic buds beneath thick bark or from lignotubers; and some shrubs require heat or smoke chemicals (karrikins) to germinate. Indigenous peoples on every inhabited continent used fire deliberately for hunting, travel, food production and safety, and in Australia and North America cultural burning is being revived in partnership with land agencies.

Suppression and the fire paradox

After the 1910 Big Burn, the US Forest Service adopted a policy of full suppression, codified in 1935 as the "10 a.m. policy" that every fire should be controlled by 10 a.m. on the day after it was reported. Fire exclusion was largely successful in reducing burned area for decades, but in frequent-fire forests it allowed surface fuels and dense young trees to accumulate, converting open forests into ones prone to crown fire. This "fire paradox", that excluding fire in the short term increases the severity of fire in the long term, was formally recognised in the US in the 1960s and 1970s, and federal fire policy since 1995 has accepted fire as an essential ecological process. Today about 95–98 % of US wildfires are still controlled at initial attack, while the few per cent that escape account for most of the area burned and cost.

Suppression tactics include direct attack on the fire edge, indirect attack with control lines built at a distance and burnout or backburning operations to remove fuel ahead of the fire, and aerial attack with water and long-term retardant. Aerial drops are effective mainly in light fuels and moderate conditions with ground crews following up; under extreme conditions no amount of aircraft can halt a head fire.

Prescribed burning and fuel treatments

Prescribed (planned) fire and mechanical thinning reduce fuel loads and continuity. The evidence from both field studies and modelling is that treatments can substantially reduce fire severity within the treated area and for several years afterwards, but their effect declines as fuels re-accumulate (often within 5–15 years) and they are least effective under the most extreme weather, when fire spread is dominated by wind and spotting. Australian research finds that the reduction in house loss and area burned per unit of area treated, the "leverage", varies widely between regions. Prescribed burns carry their own risks: the 2022 Hermits Peak–Calf Canyon fire in New Mexico, the largest in that state's recorded history, began as two escaped US Forest Service burns, a broadcast prescribed burn and a holdover from a pile burn.

Climate change and fire seasons

Warming increases atmospheric evaporative demand, lengthens snow-free seasons and dries fuels. Jolly et al. (2015) found that the global mean length of the fire weather season increased by about 19 % between 1979 and 2013. Abatzoglou and Williams (2016) estimated that anthropogenic warming roughly doubled the cumulative forest area burned in the western United States between 1984 and 2015 relative to what would otherwise have occurred. The IPCC Sixth Assessment Report concluded with medium to high confidence that fire weather has become more frequent in some regions, and projects further increases in many regions with each increment of warming. Attribution studies of individual seasons, such as the Australian Black Summer and the 2023 Canadian season, have found that the extreme fire weather was made substantially more likely by climate change, although the quantitative results depend on the index and method and carry wide uncertainties. Fire activity is not increasing everywhere: global burned area estimated from satellites declined by about a quarter between the late 1990s and the mid-2010s, mainly because of agricultural expansion and landscape fragmentation in tropical savannas, even as fires in forests have become more severe in many regions.

Smoke and health

Wildfire smoke contains fine particulate matter (PM₂.₅), carbon monoxide, ozone precursors and hundreds of organic compounds. PM₂.₅ is the main health concern, associated with increased respiratory and cardiovascular hospital admissions, exacerbated asthma, and excess mortality. Johnston et al. (2012) estimated that landscape fire smoke causes about 339,000 deaths per year worldwide (range roughly 260,000 to 600,000), most of them in sub-Saharan Africa and South-East Asia. For comparison, the World Health Organization's 2021 air quality guidelines recommend that annual mean PM₂.₅ not exceed 5 µg/m³ and 24-hour means not exceed 15 µg/m³; wildfire smoke episodes routinely produce 24-h concentrations of hundreds of µg/m³ in affected communities. Because smoke affects far more people than flames do, smoke forecasting, clean-air shelters, portable air cleaners and public messaging are an increasingly important part of fire risk management.

✏️ Your Turn

(a) A town's 24-hour mean PM₂.₅ during a smoke episode is 180 µg/m³. By what factor does this exceed the WHO 24-hour guideline? (b) In a region where 97 % of fires are contained at initial attack, 1,000 fires occur in a season. How many escape? If the escaped fires account for 95 % of the 200,000 ha burned, what is the mean size of an escaped fire and of a contained fire?

Answers: (a) 180/15 = 12 times the guideline. (b) 3 % of 1,000 = 30 fires escape. They burn 0.95 × 200,000 = 190,000 ha, a mean of about 6,330 ha each; the 970 contained fires burn 10,000 ha, a mean of about 10 ha. The heavy-tailed size distribution is typical: a handful of fires dominate area, cost and impact.

═════════════════════════════════════════════
Case Studies
═════════════════════════════════════════════

The eight events below span more than 150 years in North America, Hawaii and Australia. They were chosen to illustrate distinct mechanisms: drought and land clearing, synoptic wind events, foehn winds, boreal crown fire, utility ignitions, pyroconvection and urban conflagration. Casualty and loss figures for historical fires are often uncertain, and ranges are given where sources disagree.

1871 Peshtigo, Wisconsin — the deadliest fire in US history

On the night of 8 October 1871, a firestorm swept through the lumber town of Peshtigo in north-eastern Wisconsin and surrounding settlements on both sides of Green Bay. The summer and autumn had been exceptionally dry across the upper Midwest, and the landscape was littered with logging slash and land-clearing debris; small clearing fires had been smouldering for weeks. A deep, fast-moving low-pressure system crossing the region on 8 October brought strong south-westerly winds that merged these fires into a single conflagration.

The fire burned roughly 1.2 million acres (about 490,000 ha). Deaths are uncertain because records were destroyed and many victims were itinerant workers, but estimates range from about 1,200 to 2,400, making Peshtigo the deadliest wildfire in recorded US history. Survivors described whirlwinds of flame, and many in the town survived only by standing in the Peshtigo River for hours. On the same night the Great Chicago Fire burned much of that city, and major fires also burned in Michigan, a coincidence that reflects a shared regional drought and the same windstorm rather than any single exotic cause.

Peshtigo is the archetype of a fire in which human land use created a continuous, flammable landscape and a synoptic wind event drove fire into settlements with no warning system and no escape routes. It remains a reference case in the study of mass fires and firestorms, and its meteorology has been reconstructed as an example of a fire-weather pattern dominated by a strong mid-latitude cyclone.

1910 Idaho and Montana — the Big Burn

During the dry summer of 1910 thousands of fires burned across the northern Rockies. On 20–21 August a dry cold front brought hurricane-force south-westerly winds, and the fires coalesced. In about two days roughly 3 million acres (about 1.2 million ha) burned in Idaho, Montana and neighbouring areas. At least 85 people died (figures of 85–87 are given), most of them firefighters, about 78 according to Forest Service accounts. A third of the town of Wallace, Idaho, burned. Ranger Ed Pulaski led a crew of about 45 men into an abandoned mine tunnel near Wallace and, by his own account, kept them there at gunpoint as the fire passed; all but a handful survived.

The Big Burn was a formative event for the five-year-old US Forest Service. It strengthened the case for a federal role in fire protection, which the Weeks Act of 1911 extended through cooperative agreements with the states, and entrenched a policy of aggressive suppression that culminated in the 1935 10 a.m. policy. Many historians, notably Stephen Pyne, regard the policy legacy of 1910 as central to the fuel accumulation and fire paradox that shape western US fire today.

2009 Victoria, Australia — Black Saturday

On 7 February 2009, after more than a decade of drought and a record-breaking heat wave in late January, Victoria experienced some of the worst fire weather ever recorded. Melbourne reached 46.4 °C, its highest temperature on record; relative humidity fell into single digits; and strong, hot north-westerly winds blew ahead of a cold front. FFDI values exceeded 100 at many stations, beyond the top of McArthur's scale. Several of the major fires, including the Kilmore East fire, were ignited by failures of electricity distribution assets.

The Kilmore East fire ran several tens of kilometres to the south-east in its first hours. When the south-westerly change arrived in the late afternoon, its long eastern flank became a broad head fire that swept through Kinglake, Strathewen, St Andrews and other communities. Cruz et al. (2012) reconstructed rates of spread of several kilometres per hour, fireline intensities of the order of tens of thousands of kW/m, a large pyroconvective column, and spot fires many kilometres ahead of the front. In total 173 people died, 119 of them in the Kilmore East fire and about 40 in the Murrindindi fire that destroyed much of Marysville; more than 2,000 houses were destroyed, and roughly 430,000–450,000 ha burned.

The 2009 Victorian Bushfires Royal Commission found that many deaths occurred in or near houses, often among people who had planned to stay and defend or who left too late. Its recommendations reshaped Australian practice: a new Catastrophic (Code Red) danger rating, greater emphasis on leaving early, neighbourhood safer places, revised building standards (AS 3959), replacement of high-risk power lines, and higher prescribed burning targets. A class action over the Kilmore East fire was settled in 2014 for about A$494 million.

2016 Fort McMurray and 2023 Canada — boreal fire at scale

The Horse River fire was detected south-west of Fort McMurray, Alberta, on 1 May 2016, in an unusually warm and dry spring with little snow cover and deciduous trees not yet in leaf. On 3 May, with temperatures above 30 °C, relative humidity in the teens and strong, gusty winds, it crossed into the city, spotting across the Athabasca River and a major highway, and generated pyrocumulonimbus clouds. About 88,000 people were evacuated, the largest wildfire evacuation in Alberta's history, along roads through the fire. Roughly 2,400 structures were destroyed. There were no deaths directly from the fire, but two evacuees died in a vehicle collision. The fire eventually burned about 590,000 ha, and insured losses of around CAD 3.6–3.7 billion made it the costliest disaster in Canadian history at the time.

Seven years later, the 2023 Canadian season broke every national record. Fires burned from British Columbia to Nova Scotia and especially in Quebec, where an early June lightning outbreak ignited hundreds of fires in boreal forest. Official totals reached roughly 15–18 million ha depending on the compilation and date, more than double the previous record set in 1989. Jain et al. (2024) attributed the season to early snowmelt, record warmth, persistent drought and fire-favourable weather, and reported more than 200,000 evacuees, including the entire city of Yellowknife, and eight firefighter deaths. Byrne et al. (2024) estimated carbon emissions of roughly 650 Tg C, more than the annual fossil-fuel emissions of every country except China, the United States and India. Smoke from Quebec produced some of the worst air quality ever measured in New York City and much of the north-eastern United States in early June 2023.

These events show the distinctive features of boreal fire: crown fires spreading through black spruce with intensities of tens of thousands of kW/m, overwintering ("zombie") fires smouldering in peat, huge carbon emissions, and growing exposure of remote and Indigenous communities that often have a single road out.

2018 Camp Fire, Paradise, California

At about 06:30 on 8 November 2018 a worn hook on a Pacific Gas and Electric (PG&E) transmission tower on the Caribou–Palermo line failed in strong north-easterly downslope winds near Pulga in the Feather River canyon. The autumn rains had not arrived, fine fuels were extremely dry, and gusts reached about 80 km/h. Driven by the wind and by long-range spotting, the fire reached the eastern edge of Paradise, a ridge-top town of about 26,000 people, within roughly 90 minutes. Ember showers ignited houses across the town nearly simultaneously, and house-to-house spread followed. Evacuation of Paradise and neighbouring communities, about 50,000 people in total, was impeded by gridlock on the few roads off the ridge, and some people died in their vehicles.

The Camp Fire killed 85 people, making it the deadliest US wildfire in a century at the time, destroyed 18,804 structures and burned about 62,000 ha (153,336 acres). Total losses were estimated at about US$16.5 billion. PG&E filed for bankruptcy in January 2019 and in 2020 pleaded guilty to 84 counts of involuntary manslaughter. A detailed NIST case study reconstructed the fire's progression and documented the dominance of ember ignition and structure-to-structure spread. The event accelerated public safety power shutoffs, undergrounding and covered conductors, the expansion of defensible space requirements, and research on community-scale evacuation.

2019–20 South-eastern Australia — the Black Summer

2019 was Australia's hottest and driest year on record, with a strong positive Indian Ocean Dipole and a negative Southern Annular Mode suppressing rainfall in the south-east. Fires began in Queensland and northern New South Wales in September 2019 and continued until heavy rain in February 2020. Across all states about 24 million ha burned, including about 21 % of Australia's temperate broadleaf and mixed forest biome (Boer et al. 2020), a fraction without precedent in the satellite record for any forest biome.

Thirty-three people died directly in the fires, including firefighters and three US aerial firefighters whose air tanker crashed; more than 3,000 homes were destroyed. Smoke was a still larger hazard: Borchers Arriagada and colleagues (2020) estimated 417 excess deaths and thousands of hospital admissions from smoke exposure in eastern Australia. A study commissioned by WWF estimated that close to 3 billion vertebrate animals were killed or displaced. The pyroCb super outbreak of late December 2019 and early January 2020 (Lesson 7) injected smoke into the stratosphere, where it spread across the Southern Hemisphere and produced measurable radiative and ozone effects.

The Royal Commission into National Natural Disaster Arrangements (2020) recommended a nationally consistent fire danger rating system (realised as the AFDRS in 2022), better national coordination of aerial firefighting and improved emergency information. Attribution studies found that the extreme fire weather was made substantially more likely by anthropogenic warming, with large uncertainties in the magnitude.

2023 Lahaina, Maui, Hawaii

On 8 August 2023 a strong pressure gradient between high pressure to the north and Hurricane Dora passing far to the south, combined with a low inversion, produced intense downslope winds in the lee of the West Maui Mountains, with gusts of roughly 100 km/h. Much of the landscape around Lahaina consisted of former sugarcane and pineapple plantations colonised by highly flammable non-native grasses such as guinea grass, cured by drought. A fire that started early that morning near downed Hawaiian Electric power lines was declared contained, then re-ignited in the afternoon and was driven into the town.

The fire destroyed about 2,200 structures, most of them homes, and killed 102 people, making it the deadliest US wildfire since the 1918 Cloquet fire in Minnesota. Many victims were trapped in vehicles on Front Street or sought refuge in the ocean. Reviews criticised the failure to sound outdoor sirens, the loss of power and communications, road blockages and the loss of water pressure. Lahaina exemplifies a growing class of disasters in which grass-dominated, fire-prone landscapes created by land-use change abut towns not historically considered to be at high fire risk.

2025 Los Angeles — the Palisades and Eaton fires

On 7 January 2025 an exceptionally strong Santa Ana wind event, with gusts locally of roughly 130–160 km/h in the mountains and foothills, coincided with one of the driest starts to the rainy season on record in Southern California, following two wet winters that had produced abundant grass and shrub growth. The Palisades Fire in the Santa Monica Mountains and the Eaton Fire above Altadena both ran into dense urban neighbourhoods. Together they burned roughly 15,000 ha, destroyed more than 16,000 structures (about 6,800 in the Palisades Fire and about 9,400 in the Eaton Fire) and killed about 30 people. Aircraft were grounded for long periods by the winds, and urban water systems designed for structure fires could not supply the simultaneous demand of hundreds of burning buildings.

Economic loss estimates varied widely, but insured losses alone were estimated at roughly US$30–45 billion, making these the costliest wildfires on record. Investigations focused on electrical transmission equipment as the likely ignition of the Eaton Fire, and on the rekindling of the small Lachman Fire of 1 January as the origin of the Palisades Fire; in October 2025 federal prosecutors charged a local man with deliberately setting the Lachman Fire, and he pleaded not guilty. The event demonstrated, again, that under extreme wind the outcome depends on ember-resistant construction, vegetation and spacing near homes, early evacuation and the prevention of utility ignitions rather than on firefighting capacity.

═════════════════════════════════════════════
References
═════════════════════════════════════════════

  1. Abatzoglou, J. T., & Williams, A. P. (2016). Impact of anthropogenic climate change on wildfire across western US forests. Proceedings of the National Academy of Sciences, 113(42), 11770–11775.
  2. Albini, F. A. (1976). Estimating wildfire behavior and effects. USDA Forest Service General Technical Report INT-30.
  3. Anderson, H. E. (1982). Aids to determining fuel models for estimating fire behavior. USDA Forest Service General Technical Report INT-122.
  4. Andrews, P. L. (2018). The Rothermel surface fire spread model and associated developments: a comprehensive explanation. USDA Forest Service General Technical Report RMRS-GTR-371.
  5. Balch, J. K., Bradley, B. A., Abatzoglou, J. T., Nagy, R. C., Fusco, E. J., & Mahood, A. L. (2017). Human-started wildfires expand the fire niche across the United States. Proceedings of the National Academy of Sciences, 114(11), 2946–2951.
  6. Boer, M. M., Resco de Dios, V., & Bradstock, R. A. (2020). Unprecedented burn area of Australian mega forest fires. Nature Climate Change, 10, 171–172.
  7. Bowman, D. M. J. S., et al. (2009). Fire in the Earth system. Science, 324(5926), 481–484.
  8. Byram, G. M. (1959). Combustion of forest fuels. In K. P. Davis (Ed.), Forest Fire: Control and Use. McGraw-Hill.
  9. Byrne, B., Liu, J., Bowman, K. W., et al. (2024). Carbon emissions from the 2023 Canadian wildfires. Nature, 633, 835–839.
  10. Cohen, J. D. (2000). Preventing disaster: home ignitability in the wildland–urban interface. Journal of Forestry, 98(3), 15–21.
  11. Cruz, M. G., & Alexander, M. E. (2019). The 10% wind speed rule of thumb for estimating a wildfire's forward rate of spread in forests and shrublands. Annals of Forest Science, 76, 44.
  12. Cruz, M. G., Sullivan, A. L., Gould, J. S., et al. (2012). Anatomy of a catastrophic wildfire: the Black Saturday Kilmore East fire in Victoria, Australia. Forest Ecology and Management, 284, 269–285.
  13. Finney, M. A., Cohen, J. D., Forthofer, J. M., et al. (2015). Role of buoyant flame dynamics in wildfire spread. Proceedings of the National Academy of Sciences, 112(32), 9833–9838.
  14. Fromm, M., Lindsey, D. T., Servranckx, R., et al. (2010). The untold story of pyrocumulonimbus. Bulletin of the American Meteorological Society, 91(9), 1193–1209.
  15. Giglio, L., Schroeder, W., & Justice, C. O. (2016). The collection 6 MODIS active fire detection algorithm and fire products. Remote Sensing of Environment, 178, 31–41.
  16. Haines, D. A. (1988). A lower atmosphere severity index for wildland fires. National Weather Digest, 13(2), 23–27.
  17. IPCC (2021). Climate Change 2021: The Physical Science Basis. Contribution of Working Group I to the Sixth Assessment Report of the Intergovernmental Panel on Climate Change. Cambridge University Press.
  18. Jain, P., Barber, Q. E., Taylor, S. W., et al. (2024). Drivers and impacts of the record-breaking 2023 wildfire season in Canada. Nature Communications, 15, 6764.
  19. Johnston, F. H., Henderson, S. B., Chen, Y., et al. (2012). Estimated global mortality attributable to smoke from landscape fires. Environmental Health Perspectives, 120(5), 695–701.
  20. Jolly, W. M., Cochrane, M. A., Freeborn, P. H., et al. (2015). Climate-induced variations in global wildfire danger from 1979 to 2013. Nature Communications, 6, 7537.
  21. Lareau, N. P., Nauslar, N. J., & Abatzoglou, J. T. (2018). The Carr Fire vortex: a case of pyrotornadogenesis? Geophysical Research Letters, 45, 13107–13115.
  22. Noble, I. R., Bary, G. A. V., & Gill, A. M. (1980). McArthur's fire-danger meters expressed as equations. Australian Journal of Ecology, 5, 201–203.
  23. Peterson, D. A., Fromm, M. D., McRae, R. H. D., et al. (2021). Australia's Black Summer pyrocumulonimbus super outbreak reveals potential for increasingly extreme stratospheric smoke events. npj Climate and Atmospheric Science, 4, 38.
  24. Pyne, S. J., Andrews, P. L., & Laven, R. D. (1996). Introduction to Wildland Fire (2nd ed.). John Wiley & Sons.
  25. Radeloff, V. C., Helmers, D. P., Kramer, H. A., et al. (2018). Rapid growth of the US wildland–urban interface raises wildfire risk. Proceedings of the National Academy of Sciences, 115(13), 3314–3319.
  26. Rothermel, R. C. (1972). A mathematical model for predicting fire spread in wildland fuels. USDA Forest Service Research Paper INT-115.
  27. Schroeder, W., Oliva, P., Giglio, L., & Csiszar, I. A. (2014). The New VIIRS 375 m active fire detection data product: algorithm description and initial assessment. Remote Sensing of Environment, 143, 85–96.
  28. Scott, J. H., & Burgan, R. E. (2005). Standard fire behavior fuel models: a comprehensive set for use with Rothermel's surface fire spread model. USDA Forest Service General Technical Report RMRS-GTR-153.
  29. Teague, B., McLeod, R., & Pascoe, S. (2010). 2009 Victorian Bushfires Royal Commission: Final Report. Parliament of Victoria.
  30. Van Wagner, C. E. (1977). Conditions for the start and spread of crown fire. Canadian Journal of Forest Research, 7(1), 23–34.
  31. Van Wagner, C. E. (1987). Development and structure of the Canadian Forest Fire Weather Index System. Canadian Forestry Service, Forestry Technical Report 35.
  32. Wooster, M. J., Roberts, G., Perry, G. L. W., & Kaufman, Y. J. (2005). Retrieval of biomass combustion rates and totals from fire radiative power observations: FRP derivation and calibration relationships between biomass consumption and fire radiative energy release. Journal of Geophysical Research, 110, D24311.

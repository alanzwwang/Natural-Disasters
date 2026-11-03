Avalanches — An Advanced Course
══════════════════════════════════════════

Introduction
─────────────────────────────────

A snow avalanche is the rapid gravitational flow of snow down a slope, with or without entrained ice, rock, soil and vegetation. Most avalanches are small and harmless, but the largest move 10⁵–10⁶ tonnes of snow at speeds that can exceed 50 m s⁻¹ and exert impact pressures of hundreds of kilopascals, enough to demolish reinforced buildings and flatten mature forest. Across the world they kill, on average, a few hundred people each year; in the European Alps the long-term mean has been of the order of 100 deaths per winter, in the United States roughly 25–30, and in Canada roughly a dozen, although year-to-year variability is large and the totals are now dominated by recreational backcountry users rather than residents of mountain villages.

Avalanche science sits at the intersection of several disciplines. Snow is a porous, sintered aggregate of ice existing within a few per cent of its melting point, so it creeps, sinters and recrystallises continuously; understanding its microstructure requires thermodynamics and materials science. The release of a dry slab avalanche is a problem in fracture mechanics, involving the failure of a thin, buried weak layer beneath a cohesive slab. Once released, an avalanche is a granular or turbulent gravity current whose motion is described by depth-averaged continuum models calibrated on full-scale experiments. Forecasting combines meteorology, snowpack modelling, field observation and the psychology of risk; mitigation draws on structural engineering, land-use law and explosives technology; and the survival of buried victims is a question for emergency medicine.

This course treats each of these themes at the level of a graduate student or practising professional. Each lesson develops the physical reasoning and the key quantitative relationships, followed by worked exercises. Eight case studies then show how the concepts appear in real disasters, from railway catastrophes and wartime avalanches to earthquake-triggered ice-rock avalanches in the Andes and Himalaya.

In this course, you will:

  1. Describe snow as a material and classify snow grains using the International Classification for Seasonal Snow on the Ground
  2. Explain equilibrium, kinetic and melt–freeze metamorphism and the formation of persistent weak layers
  3. Compute slope-parallel stresses in a layered snowpack and interpret stability indices
  4. Explain the sequence of failure initiation, crack propagation and slab release, including the anticrack model, and interpret field stability tests
  5. Classify avalanches by release type, moisture and destructive size
  6. Relate avalanche formation and runout to terrain, and apply the α–β runout model
  7. Use the Voellmy friction model to estimate velocities and impact pressures, and explain modern numerical models
  8. Explain regional forecasting, the five-level avalanche danger scale and the role of human factors
  9. Evaluate permanent and temporary mitigation, including defence structures, artificial release and hazard zoning
  10. Interpret avalanche survival curves and the logic of companion rescue and medical management

─────────────────────────────────
Lesson 1: Snow as a Material
─────────────────────────────────

📌 Key idea of this section:

        Seasonal snow is a porous ice skeleton at a homologous temperature above 0.9: φ = 1 − ρ_{s}/ρ_{ice}, ρ_{ice} ≈ 917 kg m⁻³

From snowflake to snowpack

Snow crystals nucleate and grow in clouds by vapour deposition, their habit (plates, columns, dendrites, needles) controlled mainly by temperature and supersaturation, as summarised in the Nakaya diagram. On reaching the ground, crystals are broken by wind, rimed by supercooled droplets or deposited intact. From that moment they are part of the snowpack, a stratified deposit in which each storm, wind event or melt period leaves a layer with its own density, grain type, grain size, hardness and temperature. The avalanche problem is fundamentally a problem of this stratigraphy: a strong, cohesive layer lying over a weak one.

Density and porosity

Snow density ranges over more than an order of magnitude. Freshly fallen snow in calm, cold conditions may have a density of only 30–100 kg m⁻³; settled seasonal snow is typically 200–400 kg m⁻³; wind-packed snow can exceed 400 kg m⁻³; spring snow after repeated melt–freeze cycles reaches 400–550 kg m⁻³; firn spans roughly 550–830 kg m⁻³, the latter value marking pore close-off on the way to glacier ice at about 917 kg m⁻³. Because the ice skeleton has a fixed density, the porosity follows directly:

        φ = 1 − ρ_{s} / ρ_{ice}

A layer of density 250 kg m⁻³ is therefore about 73% air. The load imposed on a slope is usually expressed as the snow water equivalent (SWE), the depth of water that would result from melting the column: SWE = ρ_{s} H in kg m⁻², which is numerically equal to the water depth in millimetres (ρ_{s} in kg m⁻³, H in m).

A material near its melting point

At −10 °C ice is at a homologous temperature T/T_{m} = 263/273 ≈ 0.96. Metals at such homologous temperatures creep rapidly, and so does snow. Under its own weight the snowpack settles (densifies) and, on a slope, creeps downslope, with slope-parallel strain rates of the order of 10⁻⁶–10⁻⁸ s⁻¹ in older layers and faster in new snow. Viscosity rises roughly exponentially with density and falls strongly with temperature. Snow also sinters: ice bonds (necks) grow between grains by vapour transport and surface diffusion, so that a freshly deposited layer gains strength over hours to days. This competition between loading and strengthening is the basis of the observation that most natural avalanches occur during or shortly after storms.

Thermal and mechanical properties

Snow is a good insulator. Sturm and colleagues (1997) fitted an empirical relation for the effective thermal conductivity, valid for 156 ≤ ρ ≤ 600 kg m⁻³:

        k_{eff} = 0.138 − 1.01 ρ + 3.233 ρ²     (k in W m⁻¹ K⁻¹, ρ in g cm⁻³)

At 250 kg m⁻³ this gives about 0.09 W m⁻¹ K⁻¹, some 25 times lower than solid ice (about 2.2 W m⁻¹ K⁻¹). The elastic (Young's) modulus of snow likewise increases steeply with density, from below 1 MPa for very light snow to tens or hundreds of MPa for dense, well-bonded snow, and is strain-rate dependent: at rapid loading rates (above about 10⁻⁴–10⁻³ s⁻¹) snow behaves as a brittle solid, at slow rates as a viscous fluid. Slab avalanche release is a brittle process superimposed on slow viscous creep.

The International Classification for Seasonal Snow on the Ground

Field observations follow the International Classification for Seasonal Snow on the Ground (Fierz et al., 2009), which standardises the recording of grain shape, grain size, hardness, liquid water content and density. The main grain-shape classes and their codes are:

        PP  Precipitation particles        RG  Rounded grains
        MM  Machine-made snow              FC  Faceted crystals
        DF  Decomposing/fragmented         DH  Depth hoar
        SH  Surface hoar                   MF  Melt forms
        IF  Ice formations (crusts, lenses)

Hand hardness is measured by the object that can be pushed into the layer with a moderate force: fist (F), four fingers (4F), one finger (1F), pencil (P), knife blade (K) and ice (I). Liquid water content is recorded in classes: dry (0%), moist (0–3%), wet (3–8%), very wet (8–15%) and soaked (above 15%) by volume. A standard profile records each layer's depth, grain type and size, hardness and temperature, and is drawn as a hardness profile against depth; a soft layer of facets or surface hoar beneath harder layers is the classic signature of slab avalanche potential.

✏️ Your Turn

(a) A 1.2 m deep snowpack has a mean density of 250 kg m⁻³. Calculate its porosity and its snow water equivalent.

(b) Using the Sturm relation, compute k_{eff} for densities of 250 and 400 kg m⁻³ and comment on how the insulation of the snowpack changes as it densifies.

Answers: (a) φ = 1 − 250/917 = 0.727, so the pack is about 73% air by volume; SWE = 250 × 1.2 = 300 kg m⁻², i.e. 300 mm of water. (b) For ρ = 0.25 g cm⁻³: k = 0.138 − 0.2525 + 0.2021 ≈ 0.088 W m⁻¹ K⁻¹. For ρ = 0.40 g cm⁻³: k = 0.138 − 0.404 + 0.517 ≈ 0.25 W m⁻¹ K⁻¹. Densification nearly triples the conductivity, so an old, dense snowpack transmits ground heat and surface cold far more readily than fresh, light snow; thin, low-density early-season snowpacks therefore support the strongest temperature gradients.

─────────────────────────────────
Lesson 2: Snowpack Metamorphism
─────────────────────────────────

📌 Key idea of this section:

        Low temperature gradient → rounding and strengthening; high gradient (≳ 10 °C m⁻¹) → faceting and weakening; liquid water → melt forms

Why snow changes

Snow grains are thermodynamically unstable. Their high specific surface area represents surface free energy, and any spatial variation in temperature produces variations in saturation vapour pressure, so that water molecules sublimate from some ice surfaces and deposit on others. The resulting changes in grain shape and bonding, collectively called metamorphism, determine the strength of each layer. Colbeck (1982) and the review of Schweizer, Jamieson and Schneebeli (2003) give the standard framework of three regimes: equilibrium (low gradient) metamorphism, kinetic (high gradient) metamorphism, and wet-snow (melt–freeze) metamorphism.

Equilibrium metamorphism and rounding

When the temperature gradient is weak, vapour transport is driven primarily by curvature. By the Kelvin (Gibbs–Thomson) effect, the equilibrium vapour pressure over a convex surface exceeds that over a flat or concave surface, so material migrates from crystal tips and branches to concave necks between grains. Dendritic new snow decomposes into fragments (DF) and then into rounded grains (RG) of 0.2–0.5 mm, while the necks grow. The process is faster at warmer temperatures. Rounded, well-sintered layers are strong and typically form good slab material rather than weak layers.

Kinetic metamorphism and faceting

When the temperature gradient across a layer exceeds a threshold commonly quoted as about 10 °C m⁻¹ (with faceting becoming vigorous above roughly 20 °C m⁻¹), vapour flux from warmer to colder grains dominates. Vapour sublimates from the upper side of a warmer grain and deposits on the lower side of the colder grain above it, building angular, faceted crystals (FC) with sharp edges and, if the gradient persists, large striated cup-shaped depth hoar crystals (DH) of several millimetres. These grains grow at the expense of bonds: faceted layers have low cohesion, high porosity and poor ability to sinter, and they can remain weak for weeks or months, which is why they are called persistent weak layers.

What matters physically is the vapour-pressure gradient, which is the temperature gradient multiplied by the slope of the saturation vapour pressure curve. From the Clausius–Clapeyron equation over ice,

        de_{s}/dT = L_{s} e_{s} / (R_{v} T²)

with latent heat of sublimation L_{s} ≈ 2.834 × 10⁶ J kg⁻¹ and R_{v} = 461.5 J kg⁻¹ K⁻¹. Because e_{s} roughly halves every 10 K, the same temperature gradient produces a much larger vapour flux in warm snow near the ground than in cold snow near the surface. Faceting is therefore favoured by thin, early-season snowpacks over relatively warm ground beneath cold, clear skies, the typical situation in continental climates such as the Colorado Rockies, interior British Columbia and the inner Alps.

Surface hoar and near-surface facets

Surface hoar (SH) is the snow equivalent of dew. On clear nights with light winds and humid air, the snow surface cools radiatively below the frost point of the overlying air and feather-like crystals grow by deposition, sometimes to 1–3 cm. Once buried intact by new snow, surface hoar forms one of the most dangerous and persistent weak layers known: a thin, mechanically anisotropic layer of tall crystals standing on end, which can collapse when loaded and may remain reactive for one to two months. Near-surface facets form by strong gradients in the top few centimetres, through diurnal temperature swings or radiation recrystallisation, in which sunlight warms the subsurface while the surface radiates to a cold sky.

Melt–freeze and wet-snow metamorphism

When liquid water is present, small grains melt preferentially and larger ones grow, producing rounded clusters (MF) up to 1–2 mm or more. Wet snow loses cohesion rapidly, especially when water first percolates into previously dry, cold snow and ponds above capillary barriers such as crusts or fine-over-coarse grain transitions. Refreezing produces melt–freeze crusts (MFcr), which are strong, but which commonly create local temperature and vapour-pressure gradients that grow facets immediately above and below them. Facets on crusts are a classic persistent weak layer, and rain-on-snow events typically leave such a crust.

✏️ Your Turn

(a) A 0.5 m snowpack has a base temperature of 0 °C and a surface temperature of −20 °C. Compute the mean temperature gradient and state the expected metamorphic regime.

(b) Saturation vapour pressure over ice is about 402 Pa at −5 °C and 165 Pa at −15 °C. Using Clausius–Clapeyron, compute de_{s}/dT at both temperatures and explain why a 20 °C m⁻¹ gradient is more effective at faceting near the warm base than near the cold surface.

Answers: (a) The gradient is (0 − (−20)) / 0.5 = 40 °C m⁻¹, four times the commonly quoted faceting threshold; strong kinetic metamorphism and depth hoar growth near the base are expected. (b) At −5 °C (268.15 K): de_{s}/dT = 2.834 × 10⁶ × 402 / (461.5 × 268.15²) ≈ 34 Pa K⁻¹. At −15 °C (258.15 K): 2.834 × 10⁶ × 165 / (461.5 × 258.15²) ≈ 15 Pa K⁻¹. A 20 °C m⁻¹ gradient therefore gives a vapour-pressure gradient of about 690 Pa m⁻¹ at −5 °C but only about 300 Pa m⁻¹ at −15 °C, so faceting proceeds more than twice as fast in the warmer basal snow.

─────────────────────────────────
Lesson 3: Slabs, Weak Layers and Snowpack Stress
─────────────────────────────────

📌 Key idea of this section:

        A dry slab avalanche needs a slab, a weak layer, a steep enough bed and a trigger: τ = ρ g D sin ψ, σ_{n} = ρ g D cos ψ

The ingredients of a slab avalanche

Dry slab avalanches cause the great majority of avalanche fatalities. They require a cohesive slab (a layer or set of layers able to store elastic energy and transmit tension), a weak layer or interface beneath it, a bed surface, and a slope steep enough that the slab slides once its basal support is lost. Slab thickness is commonly 0.2–1 m for skier-triggered avalanches, but natural and deep persistent slabs can exceed 2–3 m. The weak layer is typically a few millimetres to a few centimetres thick: buried surface hoar, faceted crystals, depth hoar, facets on a crust, or occasionally poorly bonded new snow such as graupel.

Stresses on an inclined snowpack

For a uniform slab of density ρ and slope-normal thickness D on a slope inclined at ψ, the gravitational stress on the weak layer resolves into a normal stress and a slope-parallel shear stress:

        σ_{n} = ρ g D cos ψ
        τ = ρ g D sin ψ

If depth is measured vertically (as with a ruler pushed vertically into the snow, H_{v}), then D = H_{v} cos ψ. Snow depth on a slope must always be specified as slope-normal or vertical, since the two differ by 20–30% on typical avalanche slopes. Field measurements with shear frames show that weak-layer shear strengths range from a few hundred pascals to a few kilopascals; buried surface hoar can be among the weakest layers, and strength increases with time and overburden as the layer sinters.

Stability indices

A natural stability index is the ratio of shear strength to applied shear stress, S = τ_{p} / τ. Natural release becomes likely as S approaches 1. For skier triggering, Föhn (1987) defined a skier stability index S' = τ_{p} / (τ + Δτ), where Δτ is the additional shear stress caused by a skier, computed from elastic solutions for a line load on an inclined half-space. Because the added stress decays roughly inversely with depth, skiers rarely initiate failures in weak layers deeper than about 1 m, which is why skier-triggered slabs are mostly 0.3–1 m thick. Schweizer and Jamieson (2001) showed that skier-triggered slabs are associated with soft slabs over thin persistent weak layers, large differences in hardness and grain size across the failure interface, and shallow failure depths. Practitioners have summarised such properties as "yellow flags" or "lemons": structural variables such as a large hardness difference, large grain-size difference, persistent grain type and failure depth less than 1 m. Stability indices based on strength alone are, however, incomplete: whether a local failure grows into an avalanche depends on crack propagation, the subject of Lesson 4.

Avalanche problems

Modern forecasting describes hazard in terms of typical avalanche problems. The European Avalanche Warning Services (EAWS) recognise five: new snow, wind-drifted snow, persistent weak layers, wet snow and gliding snow. The North American Conceptual Model of Avalanche Hazard (Statham et al., 2018) uses nine: dry loose, wet loose, storm slab, wind slab, persistent slab, deep persistent slab, wet slab, glide avalanche and cornice fall. Each problem has characteristic locations, sizes, likelihoods of triggering and time scales; for example, wind slabs form on lee slopes and typically stabilise within days, whereas deep persistent slabs are difficult to trigger but can produce very large avalanches weeks after the weak layer was buried.

Spatial variability

The snowpack varies across a slope on scales from centimetres to hundreds of metres, as wind deposition, solar input, vegetation and ground roughness alter layer thickness and grain type. Spatial variability means that a single pit result does not represent a slope: a slope with a widespread persistent weak layer may contain trigger points where the slab is thin and the skier stress reaches the weak layer. Whether variability promotes or hinders release depends on its scale relative to the critical crack length; this remains an active research subject.

✏️ Your Turn

(a) A slab of density 200 kg m⁻³ and slope-normal thickness 0.50 m lies on a 38° slope. Compute the normal and shear stresses on the weak layer.

(b) Shear-frame tests give a weak-layer shear strength of 900 Pa. Compute the natural stability index, and comment.

(c) A vertical depth measurement of 1.5 m was made on the same slope. What is the slope-normal thickness?

Answers: (a) ρ g D = 200 × 9.81 × 0.50 = 981 Pa; σ_{n} = 981 × cos 38° ≈ 773 Pa and τ = 981 × sin 38° ≈ 604 Pa. (b) S = 900 / 604 ≈ 1.49. The slope is unlikely to release naturally, but a value below about 1.5 is generally regarded as poor; the added stress from a skier near the surface of a 0.5 m slab could locally exceed the strength. (c) D = 1.5 × cos 38° ≈ 1.18 m.

─────────────────────────────────
Lesson 4: Fracture Mechanics of Slab Release and Stability Tests
─────────────────────────────────

📌 Key idea of this section:

        Release = failure initiation + onset of crack propagation (a ≥ a_{c}) + dynamic propagation + slab tensile fracture

From shear failure to anticrack

Early slab release models treated the weak layer as failing in pure shear, with a growing shear band driven by gravitational shear stress (the "shear model" developed in the 1970s and 1980s). Two observations challenged this view: the "whumpf" sound accompanying collapse of weak layers on flat ground, and remote triggering of slopes hundreds of metres away from a person standing on low-angle terrain. Neither can be explained by slope-parallel shear, which vanishes on flat terrain. Heierli, Gumbsch and Zaiser (2008) proposed the anticrack model, in which the weak layer fails by volumetric collapse: the slab moves downward into the space created as the porous weak layer crushes, closing the crack faces rather than opening them. The energy released by the falling slab can then drive the crack even on level ground, and gravity on a slope adds a shear component (mixed-mode failure).

The four stages

Release is now described as a sequence. (1) Failure initiation: a localised failure in the weak layer under a skier, snowmobile or natural load such as a cornice fall. (2) Onset of crack propagation: if the failed zone reaches a critical length a_{c}, typically of order 0.1–0.5 m in field tests, the energy released per unit crack advance exceeds the specific fracture energy of the weak layer, of order 0.1–1 J m⁻². (3) Dynamic crack propagation across the slope, at speeds measured from high-speed video of tens of metres per second; recent experiments and simulations indicate that on steep slopes propagation can transition from a sub-Rayleigh anticrack to an intersonic (supershear) crack, with speeds approaching or exceeding 100 m s⁻¹. (4) Slab release: the slab fractures in tension at the crown, the flanks and the stauchwall, and if the friction on the bed surface cannot hold it, which requires roughly ψ > 30°, the slab slides.

Energy balance

In a simple energy balance, the slab loses potential energy as it drops by the collapse height Δh of the weak layer (typically millimetres), and that energy must exceed the work of fracture. Per unit area, the potential energy released is approximately ρ g D Δh. Elastic energy stored in the bending and compression of the slab also contributes, and stiffer, thicker slabs propagate cracks more readily. This explains an apparent paradox: stiff, thick slabs are harder to trigger, because they spread the skier's load, but once failure begins they propagate it farther, producing larger avalanches.

Field stability tests

Stability tests isolate a block of the snowpack and load it to observe failure initiation, propagation, or both. The main tests are:

        Test                    Column size              Measures
        Compression (CT)        30 × 30 cm               initiation
        Extended column (ECT)   90 cm × 30 cm            initiation + propagation
        Propagation saw (PST)   ≥ 1 m × 30 cm            propagation
        Rutschblock (RB)        2 m × 1.5 m              skier-scale loading

In the compression test, the observer taps a shovel blade on the column top ten times from the wrist, ten from the elbow and ten from the arm swung from the shoulder, recording the number of taps to failure (CT1–CT30) and the fracture character (for instance sudden planar or sudden collapse versus resistant or progressive). The extended column test (Simenhois and Birkeland) uses the same loading on a column 90 cm wide across the slope; a fracture that propagates across the entire column within one tap of initiation (recorded as ECTP with the tap number) indicates propagation propensity, while ECTN means a fracture initiated but did not cross the column. In the propagation saw test (Gauthier and Jamieson), a saw is drawn upslope along the weak layer in an isolated column at least 1 m long until a fracture propagates on its own; the result is the critical cut length and whether the fracture ran to the end of the column (END), broke through the slab (SF) or arrested (Arr). The rutschblock (Föhn, 1987) loads a 2 m by 1.5 m block with a skier stepping, flexing and jumping, scored from RB1 (fails during excavation) to RB7 (no release). No single test is reliable on its own: tests have false-stable rates that can exceed 10–20%, and their value lies in combination with observations of recent avalanches, cracking, collapsing and weather.

✏️ Your Turn

(a) A weak layer of surface hoar collapses by Δh = 2 mm beneath a slab of density 250 kg m⁻³ and slope-normal thickness 0.5 m. Estimate the potential energy released per square metre and compare it with a weak-layer fracture energy of 0.5 J m⁻².

(b) A fracture propagates at 30 m s⁻¹. How long does it take to cross a 200 m wide start zone?

(c) The friction angle of a bed surface is equivalent to tan ψ = 0.6. What is the minimum slope angle for the slab to slide after release?

Answers: (a) ρ g D Δh = 250 × 9.81 × 0.5 × 0.002 ≈ 2.45 J m⁻², about five times the assumed fracture energy, so collapse alone can supply enough energy to sustain propagation, consistent with remote triggering on low-angle terrain. (b) t = 200 / 30 ≈ 6.7 s, so the whole slab is cut free in a few seconds, far too quickly for a person on it to escape. (c) ψ = arctan 0.6 ≈ 31°, matching the observation that slab avalanches rarely release on slopes gentler than about 30°.

─────────────────────────────────
Lesson 5: Avalanche Types and Size Classification
─────────────────────────────────

📌 Key idea of this section:

        Classify by release (loose vs slab), moisture (dry vs wet), sliding surface (within snow vs full depth/glide), and flow regime (dense, fluidised, powder)

Loose-snow avalanches

Loose-snow avalanches start at a point where a small mass of cohesionless snow loses its grip and entrains more snow as it descends, producing a characteristic inverted-V shape. Dry loose avalanches (sluffs) are common in new snow on slopes steeper than about 40–45°; they are usually small but can sweep a climber or skier over cliffs or into terrain traps. Wet loose avalanches occur when sun or rain weakens surface snow, typically on sunny aspects in the afternoon in spring, and can run on slopes of around 30° or less.

Slab avalanches

Slab avalanches leave a sharp crown fracture perpendicular to the bed surface, flank fractures at the sides and a stauchwall at the bottom of the release zone. Dry slabs, discussed in Lessons 3 and 4, are the major killer of recreationists. Wet slabs release when free water reaches and weakens a buried layer or interface, often a persistent weak layer that had previously been dormant; they tend to be large, slow-moving and difficult to forecast, since timing depends on the progress of the melt front.

Glide avalanches

Glide avalanches release the entire snowpack at the ground interface after a period of slow basal sliding (glide), which occurs when the snow–ground interface is wet and smooth, for example on grass slopes or smooth rock slabs. Glide rates can rise from millimetres to tens of centimetres per day before release, and tension cracks known as glide cracks or "fish mouths" open beforehand. Release timing is poorly predictable: glide avalanches can occur at any time of day and even in cold weather, making them a particular problem for roads, ski runs and settlements in the Alps.

Flow regimes: dense, fluidised and powder

Once in motion, avalanches can be described by flow regime. A dense flow core has densities of order 100–500 kg m⁻³ and speeds typically 10–40 m s⁻¹. A fluidised or saltation layer of lower density can develop above it in dry snow. A powder (suspension) cloud forms when snow particles are lifted into turbulent suspension, giving a cloud tens to more than 100 m high with densities of order 1–10 kg m⁻³ and speeds that can reach 50–100 m s⁻¹ or more; such clouds can cross valley floors and climb opposite slopes. Most large dry avalanches are mixed, with a dense core beneath a powder cloud. Wet-snow avalanches move more slowly (often 5–20 m s⁻¹) as viscous, plug-like flows with very high density and can still exert very large pressures because of their mass.

Other mass movements involving snow and ice

Ice avalanches originate from the collapse of hanging glaciers or seracs and can occur in any season. Cornice falls release large blocks of wind-deposited snow that may themselves trigger slab avalanches. Slush flows are water-saturated snow masses that can move on very low-angle slopes, of the order of 5–25°, and are important in Arctic regions such as Svalbard, northern Norway and Greenland. Catastrophic ice-rock avalanches, such as those from Huascarán in Peru (see Case Studies), mix glacier ice, rock and water and can travel tens of kilometres.

Destructive size

The Canadian destructive size scale, widely used in North America and described by McClung and Schaerer (2006), classifies avalanches by their potential to cause damage, with typical mass, path length and impact pressure:

        Size  Destructive potential                         Typical mass   Path   Pressure
        D1    relatively harmless to people                 < 10 t         10 m   1 kPa
        D2    could bury, injure or kill a person           10² t          100 m  10 kPa
        D3    could bury/destroy a car, a small building    10³ t          1 km   100 kPa
        D4    could destroy a railway car, several houses   10⁴ t          2 km   500 kPa
        D5    largest known; could destroy a village        10⁵ t          3 km   1000 kPa

The European scale uses five comparable classes: small, medium, large, very large and extremely large. Half sizes (for example D2.5) are used in practice. Each class represents roughly a tenfold increase in mass, so size is effectively a logarithmic measure.

✏️ Your Turn

(a) A slab avalanche releases from an area 150 m wide and 80 m long with a mean slope-normal slab thickness of 0.8 m and density 220 kg m⁻³. Estimate the released mass and the corresponding destructive size.

(b) If the avalanche entrains snow along its track and triples its mass, what size might it reach?

Answers: (a) Volume = 150 × 80 × 0.8 = 9600 m³; mass = 9600 × 220 ≈ 2.1 × 10⁶ kg ≈ 2100 t, between the typical D3 (10³ t) and D4 (10⁴ t) masses; on a mass basis about D3–D3.5, though the final size depends on path length and runout. (b) About 6300 t, approaching D4 on the mass criterion. Entrainment is often the dominant control on avalanche size in long paths.

─────────────────────────────────
Lesson 6: Avalanche Terrain and Runout
─────────────────────────────────

📌 Key idea of this section:

        Release mostly 30–45°; runout predicted empirically, e.g. Norway α = 0.96 β − 1.4° (SD 2.3°)

Start zone, track and runout zone

Avalanche paths consist of a start zone (release area), a track and a runout zone where the avalanche decelerates and deposits. Start zones of dry slab avalanches lie mainly between about 30° and 45°, with the frequency of skier-triggered avalanches peaking near 38–40°. Above about 50°, snow tends to sluff frequently in small amounts, so large slabs are less common. Typical starting zones are open bowls, gullies and lee slopes below ridges, where wind deposits snow. Tracks may be open slopes or channelled gullies; channelling raises flow depth and speed and can carry avalanches much farther than unconfined flows. Runout zones generally begin where the slope falls below 10–15°.

Terrain factors

Aspect controls both solar input and wind loading. In the Northern Hemisphere, north- and east-facing slopes receive less sun, retain colder snow with larger temperature gradients and are thus more prone to persistent weak layers; lee slopes (relative to prevailing winds) collect wind slabs. Slope shape matters: convex rolls concentrate tensile stress and are common trigger points, while concave slopes provide some support at the bottom. Terrain traps such as gullies, creek beds, cliffs and depressions increase the consequences of even small avalanches by deepening burial or adding trauma. Dense forest anchors the snowpack and intercepts snow, so avalanche release within mature, dense forest is rare, although avalanches from above can run through and destroy forests. Ground roughness (boulders, shrubs) can anchor thin snowpacks early in the season but becomes buried as snow accumulates.

Statistical runout models

For land-use planning, the key question is how far the largest avalanches with a given return period can run. The angle of reach α is the angle of the line connecting the top of the start zone to the farthest point of the runout (the tangent equals total vertical drop divided by total horizontal distance). Lied and Bakkehøi (1980) showed, for a data set of extreme runouts in Norway, that α correlates strongly with the β angle, defined as the angle from the top of the start zone to the point on the path profile where the slope first falls to 10°:

        α = 0.96 β − 1.4°     (standard deviation ≈ 2.3°)

Similar regressions have been developed for other mountain ranges (the Alps, Canada, the United States, Iceland), with coefficients that differ by region. Because the relation is statistical, designers usually take α minus one or more standard deviations for extreme events. An alternative method, the runout ratio of McClung and Mears, uses extreme-value statistics of the ratio of runout beyond the β point to the horizontal distance from the start to the β point.

Return periods and historical evidence

Return periods of avalanches reaching a given point are estimated from historical records, dendrochronology (tree-ring dating of damaged trees), vegetation trimlines, lichenometry and interviews. Records of a few decades are short compared with the 100–300 year return periods relevant to zoning, so statistical models, dynamic models and expert judgement are combined. The Galtür disaster of 1999 showed the danger of relying on a short record.

✏️ Your Turn

(a) An avalanche path in Norway has β = 28° and a total vertical drop of 1000 m from start zone to runout. Estimate α and the horizontal reach using the Lied–Bakkehøi relation.

(b) Repeat using α minus one standard deviation.

(c) Why is this difference important for hazard zoning?

Answers: (a) α = 0.96 × 28 − 1.4 = 25.48°; horizontal distance = 1000 / tan 25.48° ≈ 2100 m. (b) α = 23.18°; distance = 1000 / tan 23.18° ≈ 2340 m. (c) A one-standard-deviation change in α extends the predicted runout by about 240 m, often the difference between a building being inside or outside a hazard zone; small angular uncertainties translate into large horizontal distances on gentle runout slopes.

─────────────────────────────────
Lesson 7: Avalanche Dynamics and Impact Pressures
─────────────────────────────────

📌 Key idea of this section:

        Voellmy friction: S = μ N + ρ g u²/ξ  ⇒  steady speed u = √(ξ h (sin ψ − μ cos ψ))

The Voellmy model

Voellmy (1955) proposed that the resistance to a flowing avalanche consists of a Coulomb-type dry friction proportional to the normal stress plus a turbulent drag proportional to the square of velocity. Per unit basal area, for flow depth h:

        S = μ ρ g h cos ψ + ρ g u² / ξ

where μ is the dimensionless dry friction coefficient and ξ (m s⁻²) the "turbulent" friction coefficient. Setting the driving gravitational stress ρ g h sin ψ equal to S gives the steady-state velocity on a uniform slope:

        u = √( ξ h (sin ψ − μ cos ψ) )

The avalanche accelerates where tan ψ > μ and decelerates where tan ψ < μ; the dry friction therefore largely controls runout distance, while ξ controls velocity in the track. Typical calibrated values are μ ≈ 0.15–0.3 and ξ ≈ 400–3000 m s⁻², depending on avalanche size, path roughness and confinement; for μ = 0.2, deceleration begins on slopes below arctan 0.2 ≈ 11°, consistent with the 10° point used in the α–β model. Salm, Burkard and Gubler (1990) developed from the Voellmy model the Swiss practical procedure ("Voellmy–Salm") used for decades in hazard mapping, with tabulated μ and ξ by avalanche size and return period.

Depth-averaged and continuum models

Modern practice uses depth-averaged shallow-water models solved numerically over digital terrain. The Savage–Hutter equations (1989) treat avalanches as granular masses with Coulomb friction; the RAMMS model (Christen, Kowalski and Bartelt, 2010), widely used in Switzerland and elsewhere, solves Voellmy-type depth-averaged equations in three-dimensional terrain and includes entrainment and random kinetic energy extensions. Powder-cloud dynamics require models of turbulent suspension and air entrainment. At the research frontier, the material point method has been used to simulate both slab fracture and flow within one framework (Gaume and colleagues), and models are calibrated against instrumented full-scale test sites such as Vallée de la Sionne in Switzerland (operated by the WSL Institute for Snow and Avalanche Research SLF) and Ryggfonn in Norway (NGI), where pressure sensors, Doppler radar and seismic sensors record artificially released avalanches.

Impact pressure

The pressure exerted by an avalanche on a broad obstacle is usually written as follows:

        p = C ρ u²     (dense flow; C ≈ 1 or higher)
        p = ½ C_{d} ρ u²     (powder cloud; C_{d} ≈ 1–2)

Measured peak pressures in dense flows reach several hundred kPa, and pressures on small obstacles can be much higher because of impacting debris (ice, rock and wood). Experience-based damage thresholds (after McClung and Schaerer) are roughly: 1 kPa breaks windows, 5 kPa pushes in doors, 30 kPa destroys wood-frame buildings, 100 kPa uproots mature trees, and 1000 kPa can move reinforced-concrete structures. Avalanches also produce an air blast in front of the powder cloud and may carry substantial uplift forces; roofs and walls must be designed for both.

Detection and measurement

Avalanche motion is measured with pulsed Doppler and frequency-modulated continuous-wave radar, infrasound arrays, seismic sensors, photogrammetry and terrestrial laser scanning of deposits. Infrasound and radar systems now provide real-time detection along roads and railways, triggering traffic lights or closures within seconds. Satellite synthetic-aperture radar (for example Sentinel-1) is increasingly used to map avalanche debris over whole mountain ranges after major cycles.

✏️ Your Turn

(a) A dense avalanche of flow depth 2 m descends a uniform 35° track with μ = 0.2 and ξ = 1000 m s⁻². Compute the steady-state velocity.

(b) Taking flow density 300 kg m⁻³ and C = 1, compute the impact pressure and the likely damage.

(c) A powder cloud with density 5 kg m⁻³ travels at 60 m s⁻¹. Compute ½ ρ u² and compare.

Answers: (a) sin 35° − 0.2 cos 35° = 0.574 − 0.164 = 0.410; u = √(1000 × 2 × 0.410) = √820 ≈ 28.6 m s⁻¹ (about 103 km h⁻¹). (b) p = 300 × 28.6² ≈ 2.5 × 10⁵ Pa ≈ 250 kPa, enough to destroy wood-frame buildings and uproot trees, and severely damage reinforced structures. (c) ½ × 5 × 60² = 9000 Pa = 9 kPa: a powder cloud is much faster but, being some 60 times less dense, exerts pressures one to two orders of magnitude lower; enough, however, to break windows, push in doors and cause damage over a wide area.

─────────────────────────────────
Lesson 8: Forecasting, the Danger Scale and Human Factors
─────────────────────────────────

📌 Key idea of this section:

        Avalanche hazard = likelihood × size for each avalanche problem; risk also depends on exposure and decisions

Regional forecasting

Public avalanche forecasts are produced by national and regional services, such as the WSL Institute for Snow and Avalanche Research SLF in Switzerland, the services of the European Avalanche Warning Services (EAWS), Avalanche Canada and the avalanche centres of the United States. Forecasters combine weather observations and forecasts, automatic station data on snow depth, wind and temperature, snow profiles and stability tests, reports of avalanche activity and signs of instability such as shooting cracks and whumpfs, and snowpack models. Classic empirical rules emphasise rapid loading: precipitation intensity, new snow amount over three days, wind speed and direction, and rapid warming. Swiss guidance, for example, treats roughly 30–50 cm of new snow over three days as a critical amount under favourable conditions, and much less, of the order of 10–20 cm, under unfavourable conditions such as strong wind and an old surface of surface hoar.

Snowpack models

Physical snowpack models simulate the evolution of layered snow from meteorological inputs. SNOWPACK (Lehning and colleagues), used operationally in Switzerland, and the French SAFRAN–Crocus–MEPRA chain compute layer density, temperature, grain type and stability indices, and can identify the formation of surface hoar or near-surface facets at station locations or on gridded virtual slopes. Statistical and machine-learning methods, from early nearest-neighbour approaches to recent random-forest and neural-network models trained on danger-level archives, are being tested as decision support for forecasters. Their skill is comparable to, but not yet better than, the consistency of human forecasters.

The danger scale

Danger is communicated on a five-level scale, harmonised between Europe and North America. The European scale uses 1 Low, 2 Moderate, 3 Considerable, 4 High and 5 Very High; the North American Public Avalanche Danger Scale (Statham et al., 2010) uses the same terms but calls level 5 Extreme. Each level combines the likelihood of avalanches, their size and their spatial distribution, and since the 2010s forecasts are structured by the conceptual model of avalanche hazard (Statham et al., 2018): for each avalanche problem, the forecaster assesses its location (aspect, elevation), the likelihood of triggering and the expected size. The scale is not linear in risk: each step represents a substantially greater hazard. In Switzerland, most recreational fatalities occur at levels 2 and 3, with Considerable accounting for roughly half; the reason is exposure, since many people travel in avalanche terrain at those levels but few do so at levels 4 and 5.

Human factors

Most avalanche victims in recreation trigger the avalanche themselves or are in the party that did. McCammon (2004) analysed U.S. accidents and identified heuristic traps summarised by the acronym FACETS: familiarity with the terrain, acceptance (seeking social approval), commitment and consistency, the expert halo, tracks and scarcity (competition for untracked snow) and social facilitation. Groups often proceeded despite obvious clues of instability. Decision frameworks seek to counter such biases. Munter's reduction method assigns a danger potential to each level (2, 4, 8 and 16 for levels 1–4) and divides it by reduction factors for slope angle, aspect and group behaviour; a residual risk of 1 or less is considered acceptable. Other frameworks include the Swiss Graphical Reduction Method, the Stop or Go method and the Avaluator in Canada, as well as terrain ratings such as the Avalanche Terrain Exposure Scale (ATES), which originally classified terrain as simple, challenging or complex and in its 2023 revision (ATES v.2) added non-avalanche and extreme classes.

✏️ Your Turn

(a) Using Munter's reduction method, the danger is Considerable (danger potential 8). The group keeps to slopes under 35° (reduction factor 4) and keeps distances on the ascent (reduction factor 2). Compute the residual risk.

(b) A region has 400,000 ski-touring days per winter at Considerable danger and 50,000 at High, with 10 fatalities at Considerable and 3 at High. Compute fatalities per million touring days at each level and comment.

Answers: (a) Residual risk = 8 / (4 × 2) = 1, the limit of acceptability in the method. (b) Considerable: 10 / 0.4 = 25 deaths per million days; High: 3 / 0.05 = 60 deaths per million days. The risk per day is more than twice as high at level 4, but because exposure at level 3 is eight times larger, level 3 produces more fatalities in total. This illustrates why fatality counts by danger level alone are misleading without exposure data.

─────────────────────────────────
Lesson 9: Mitigation, Defence Structures and Hazard Zoning
─────────────────────────────────

📌 Key idea of this section:

        Permanent measures (zoning, structures, forest) reduce exposure or prevent release; temporary measures (closures, artificial release) manage hazard in time

Hazard zoning

Land-use planning is the cheapest and most durable mitigation. Switzerland's federal guidelines (1984) define a red zone where avalanches with return periods up to 30 years may occur, or where pressures of 30 kPa or more are expected for return periods up to 300 years; building is generally prohibited. In the blue zone, pressures below 30 kPa may occur with return periods of 30–300 years; construction is allowed with conditions such as reinforced walls facing the slope. A yellow zone covers areas affected only by powder-cloud pressures below 3 kPa or by very rare events, and a white zone has no known hazard. Austria, France, Italy, Norway, Iceland and Canada use comparable zoning based on return period and pressure; in Iceland, after the 1995 Súðavík and Flateyri avalanches, which killed 14 and 20 people respectively, hazard zoning was based on acceptable individual risk and many houses in the highest zone were bought out.

Defence structures

Supporting structures in the start zone, typically steel snow bridges, snow rakes or wire-rope nets set in continuous rows across the slope, prevent release or limit it to small volumes by holding the snowpack in place. Their height is designed for the extreme snow depth, and their loading follows from the creep and glide pressure of the snowpack. The Swiss technical guideline expresses the slope-parallel snow pressure on a structure per metre of length as

        S'_{N} = ρ g (H²/2) K N

where H is the vertical snow depth, K a creep factor depending on density and slope angle, and N a glide factor that increases with ground smoothness and aspect (from about 1.2 for rough ground to over 3 for smooth, sunny slopes). Snow drift fences and jet roofs on ridges control wind deposition in start zones. In tracks and runout zones, deflecting dams turn avalanches away from objects, catching dams and braking mounds dissipate energy and stop flows, splitting wedges protect individual buildings, and galleries or snow sheds carry avalanches over roads and railways. Afforestation of potential start zones, often combined with temporary structures while trees grow, has been used in the Alps since the nineteenth century; protection forest covers a large share of Alpine slopes above settlements.

Artificial release

Temporary mitigation reduces risk by closing roads or ski runs, evacuating buildings, or deliberately releasing avalanches under controlled conditions. Explosives are delivered by hand charges, helicopter bombing, avalanche guns and artillery (in North America, for example, recoilless rifles and howitzers along mountain passes), compressed-gas launchers, and fixed installations such as gas exploders (oxygen–propane mixtures) and remote-controlled towers containing magazine-fed charges. Explosive control works best on new-snow and wind-slab problems; it can be ineffective for deep persistent slabs and dangerous if it releases avalanches larger than expected.

Climate change

The effects of warming on avalanche activity are complex. Observations in the Swiss Alps and elsewhere show a shift toward more wet-snow avalanches and an upward retreat of the snow line, with fewer avalanches at low elevations and the possibility of more at high elevations if precipitation intensity increases. The proportion of glide avalanches has increased in some regions, and the changing distribution of snow and permafrost affects ice-rock avalanches in high mountains. Projections are uncertain and highly regional, and assessments such as the IPCC Special Report on the Ocean and Cryosphere in a Changing Climate (2019) assign medium confidence to many of these changes.

✏️ Your Turn

(a) A supporting structure must resist the snow pressure from a 3 m vertical snow depth of density 400 kg m⁻³. Taking K = 0.76 and N = 1.8 as illustrative values, compute S'_{N} per metre of structure.

(b) A blue-zone building faces an avalanche whose design dense-flow pressure is 20 kPa. What force acts on an uphill wall 8 m wide and 3 m high, assuming uniform pressure?

Answers: (a) S'_{N} = 400 × 9.81 × (9/2) × 0.76 × 1.8 ≈ 24,200 N m⁻¹ ≈ 24 kN per metre of structure. (b) F = 20,000 Pa × 24 m² = 480,000 N ≈ 0.48 MN, a load that requires reinforced-concrete design of the exposed wall.

─────────────────────────────────
Lesson 10: Rescue, Survival and Avalanche Medicine
─────────────────────────────────

📌 Key idea of this section:

        Survival of completely buried victims falls from > 90% in the first ~18 minutes to roughly 30% by 35 minutes

Mechanisms of death

People caught in avalanches die mainly of asphyxia (most deaths among completely buried victims), trauma (from impacts with trees and rocks or falls over cliffs), and hypothermia (in longer burials). Asphyxia results from the obstruction of the airway by snow, compression of the chest by dense debris and the progressive formation of an ice mask that seals the air pocket, combined with rebreathing of exhaled carbon dioxide. Avalanche debris sets rapidly, often as hard as concrete, so victims cannot dig themselves out even when buried only a few tens of centimetres deep.

Survival curves

Falk, Brugger and Adler-Kastner (1994) analysed several hundred completely buried victims in Switzerland (1981–1991) and derived the classic survival curve. Survival exceeded 90% for victims extricated within about 18 minutes (the survival phase), fell steeply to around 30% by 35 minutes (asphyxia phase), then remained roughly level until about 90 minutes (latent phase) for victims with an air pocket, before declining to a few per cent beyond about 130 minutes. Haegeli and colleagues (2011) compared Canadian and Swiss data and found that in Canada survival fell earlier and more steeply and a larger share of deaths was due to trauma, which they attributed to the denser maritime snow and to terrain with more trees and cliffs. The curves underline that companion rescue, not organised rescue, is the main hope of survival: an organised team rarely arrives within 15 minutes.

Companion rescue

Each member of a party in avalanche terrain carries a transceiver (beacon) operating at the international standard frequency of 457 kHz, a probe and a shovel. Search proceeds in phases: a signal search over the debris surface, a coarse search following the flux lines of the magnetic dipole field, a fine search near the burial, and pinpointing by probing in a spiral. Excavation, not the search, usually takes most of the time: with a mean burial depth of about 1 m, moving several tonnes of debris requires an organised technique such as the V-shaped conveyor belt. Modern digital transceivers with multiple antennas have greatly shortened search times, and RECCO reflectors and dogs help organised rescue. Avalanche airbags reduce burial depth by inverse segregation (larger objects rise in granular flows); Haegeli et al. (2014) estimated that airbags reduced mortality from about 22% to 11% among people involved in serious avalanches, with a significant proportion of failures caused by non-deployment.

Medical management

International guidelines of the International Commission for Mountain Emergency Medicine (ICAR MEDCOM) set out how to treat buried victims. Brugger and colleagues (2013) recommended that victims buried less than 35 minutes in cardiac arrest be treated as asphyxia victims with standard resuscitation, while those buried longer, with a patent airway and core temperatures below about 32 °C, may have hypothermic cardiac arrest and benefit from transport to a centre with extracorporeal rewarming. Later guidance has revised these thresholds (to 60 minutes and 30 °C) as evidence has accumulated; readers should consult the current recommendations. Serum potassium is used as a marker of whether resuscitation is likely to succeed.

✏️ Your Turn

(a) A companion rescue begins 3 minutes after burial. The transceiver search takes 6 minutes, probing 2 minutes, and digging out a victim from 1.2 m depth requires moving about 3 m³ of debris of density 500 kg m⁻³. If a team of two can shovel 0.5 t per minute in total, when is the victim extricated, and in which phase of the survival curve?

(b) How does the outcome change if the burial depth is 2 m and the excavated volume doubles?

Answers: (a) Debris mass = 3 × 500 = 1500 kg = 1.5 t; digging time = 1.5 / 0.5 = 3 min. Total = 3 + 6 + 2 + 3 = 14 min, within the survival phase (survival above 90%). (b) Digging now takes 6 min, giving 17 min, still within but close to the end of the survival phase; any delay quickly moves the victim into the asphyxia phase, where survival falls by several per cent per minute. This shows why efficient excavation technique and practice matter as much as transceiver searching.

═════════════════════════════════════════════
Case Studies
═════════════════════════════════════════════

The following case studies illustrate the main avalanche processes and their consequences: storm and rain-induced releases onto transport routes, military disasters in mountain warfare, earthquake-triggered ice-rock avalanches, extreme avalanche winters affecting settlements, and the recent transformation of the hazard by tourism and changing climate. Death tolls in older events and in conflict zones are often uncertain, and ranges are given where figures are disputed.

1910 Wellington, Washington — the deadliest avalanche in U.S. history

In late February 1910, two Great Northern Railway trains, the Spokane Local passenger train and a fast mail train, were stranded for about six days near the west portal of the Cascade Tunnel, at the hamlet of Wellington close to Stevens Pass in the Washington Cascades, by a series of storms and avalanches that blocked the line on both sides. Snow fell at rates of up to a foot per hour, then turned to rain with thunder and lightning and rapid warming on the night of 28 February to 1 March.

Shortly after 1 a.m. on 1 March 1910, a large slab avalanche released from the slope above the tracks, a slope that had recently been burned and logged. It swept both trains, several locomotives and rotary snowploughs off the tracks and into the Tye River gorge, roughly 45 m (150 ft) below. Ninety-six people died, passengers and railway employees, making it the deadliest avalanche in U.S. history; roughly two dozen survived. The combination of heavy loading followed by rain and warming, and the role of deforestation of the start zone, are typical features of wet-snow and mixed avalanche disasters in maritime climates.

The railway responded by building snow sheds and later re-routing the line through a longer, lower tunnel (the new Cascade Tunnel, opened in 1929), which removed the track from the most exposed slopes. The disaster is an early example of the efficacy of route relocation and structural protection over attempts to hold trains in place during storms.

1916 Italian Front — "White Friday"

During the First World War, Austro-Hungarian and Italian troops occupied positions in the Dolomites and other Alpine ranges at elevations up to nearly 3,900 m (on the Ortler), often in cramped barracks below avalanche-prone slopes. The winter of 1916–17 was exceptionally snowy, with heavy snowfall in early December 1916 followed by warming. On 13 December 1916, remembered as "White Friday" (although the date was in fact a Wednesday; it was the feast of Saint Lucy), numerous avalanches struck positions along the front. The most notorious destroyed the Austro-Hungarian barracks at Gran Poz on the Marmolada, burying several hundred soldiers; estimates of deaths there range from about 270 to over 300.

Total deaths on 13 December 1916 are uncertain, with figures from about 2,000 upward commonly cited; claims of up to 10,000 refer to the winter as a whole and are probably exaggerated. Estimates of avalanche deaths on the Alpine front over the whole war range up to 40,000–60,000 in older literature, figures most modern historians consider far too high. The image of artillery being used deliberately to trigger avalanches onto enemy positions is part of popular accounts, but evidence for its frequency is limited. What is clear is that avalanches killed many soldiers on both sides and that military needs prompted early systematic avalanche observation in Austria, Italy and Switzerland.

1954 Blons, Vorarlberg, Austria

On 11 January 1954, after several days of intense snowfall in the Grosses Walsertal valley of Vorarlberg, two major avalanches struck the village of Blons. The first came in the morning, the second in the evening, hitting rescuers and survivors who had gathered in houses believed to be safe. Fifty-seven people died in Blons, out of a population of a few hundred, and many houses and farm buildings were destroyed; in Vorarlberg as a whole, the avalanche cycle of January 1954 killed about 125 people.

Blons became a symbol of a vulnerable mountain community and led to a large investment in Austrian avalanche defence, through the Austrian Torrent and Avalanche Control Service (Wildbach- und Lawinenverbauung): supporting structures and afforestation in the start zones above the village, combined with hazard mapping. The repeated strike on rescuers also illustrated the importance of assessing secondary release before organised rescue enters avalanche terrain.

1962 and 1970 Huascarán, Peru — catastrophic ice-rock avalanches

Nevado Huascarán in the Cordillera Blanca of Peru, at 6,768 m the highest mountain in Peru, has steep hanging glaciers above the densely populated Callejón de Huaylas (the Santa valley). On 10 January 1962, without any seismic trigger, a mass of glacial ice from the north peak, Huascarán Norte, broke away and fell onto the slopes below, entraining rock, snow and water. The flow descended about 4,000 m in elevation and travelled roughly 16 km to the Santa River, destroying the town of Ranrahirca and several villages; deaths are estimated at about 4,000.

On 31 May 1970, the Ancash earthquake, magnitude about 7.9 with an epicentre offshore, triggered the collapse of a large part of the west face of Huascarán Norte. The resulting rock and ice avalanche had an estimated volume of 50–100 million m³ (Plafker and Ericksen, 1978). It travelled about 15–16 km horizontally with a vertical drop of about 4 km in only about 3 minutes, implying mean velocities of the order of 70–100 m s⁻¹ (roughly 280 km h⁻¹ or more) and peak speeds that may have been higher. Part of the flow overtopped a ridge that had protected Yungay in 1962 and buried the town; only a few hundred people survived, many of them on the cemetery hill. Estimates of deaths from the avalanche vary widely, from several thousand to about 20,000, within an earthquake death toll estimated at around 66,000–70,000. Evans and colleagues (2009) re-examined both events and highlighted the role of entrained water and sediments in making the flows highly mobile.

The Huascarán events are not snow avalanches in the strict sense, but they demonstrate the extreme mobility of mixed ice-rock flows (angle of reach roughly 14°) and the danger of glacier instability in a warming climate. They led to the creation of Peruvian glacier monitoring programmes and to resettlement of Yungay at a safer site.

1999 Galtür, Tyrol, Austria

The winter of 1998–99 brought three intense periods of snowfall to the northern Alps in late January and February, with strong winds that redistributed the new snow into the start zones. On 23 February 1999 at about 16:00, a large dry mixed avalanche released from slopes above the village of Galtür in the Paznaun valley. A powder cloud and dense core reached parts of the village previously considered safe (outside the red zone of the hazard map), and destroyed or damaged several buildings. Thirty-one people died, mostly tourists; the next day another avalanche killed seven in neighbouring Valzur, bringing the total for the Paznaun to 38.

Analyses of Galtür estimated that the released mass was of the order of 10⁵ tonnes, with dense flow speeds of several tens of metres per second in the track and a powder component that extended the runout. The event exceeded the historical record used for the hazard map, which had been based on a few decades of observations. It prompted revision of Austrian hazard maps, construction of a large avalanche-protection wall in Galtür (which incorporates a museum, the Alpinarium) and supporting structures in the start zones, and wider European attention to designing for extreme events beyond the observational record. The same winter, avalanches at Montroc near Chamonix (9 February, 12 deaths) and Evolène in Switzerland (21 February, 12 deaths) caused similar reviews in France and Switzerland.

2012 Gayari, Siachen region, Pakistan

On 7 April 2012, a massive avalanche struck the Pakistani army battalion headquarters at Gayari near the Siachen Glacier, at an elevation of about 4,000 m, in a high-altitude conflict zone between India and Pakistan. The avalanche buried the camp under debris up to tens of metres deep across an area about 1 km wide. All 140 people in the camp, 129 soldiers and 11 civilians, died; recovery operations with heavy machinery continued for many months. The exact source and composition of the mass (snow, ice and rock) remain uncertain because access to the site and to data has been restricted.

Gayari is one of the deadliest single avalanches in recent decades and illustrates the extreme exposure of military positions at high elevation: the Siachen conflict has claimed more lives through cold, altitude and avalanches than through combat, and the disaster prompted renewed calls for demilitarisation of the glacier.

2014 and 2015 Mount Everest and Langtang, Nepal

On 18 April 2014, an ice avalanche from a serac on the west shoulder of Everest struck the Khumbu Icefall, killing 16 Nepali mountain workers, most of whom were ferrying loads for commercial expeditions. A year later, on 25 April 2015, the Gorkha earthquake (Mw 7.8) triggered an avalanche from the Pumori–Lingtren ridge that struck Everest Base Camp with a powerful air blast, killing about 22 people (estimates range from 19 to 22) and injuring many more; climbers above the Icefall were evacuated by helicopter.

The same earthquake triggered an even more destructive avalanche and rockfall in the Langtang valley, north of Kathmandu, where a mass of ice, snow and rock from the slopes of Langtang Lirung fell onto the valley floor and buried Langtang village. The air blast flattened forest and buildings well beyond the deposit. More than 300 people were killed or missing, including villagers and foreign trekkers (Kargel et al., 2016). Remote sensing studies of the earthquake documented thousands of landslides and avalanches and emphasised the role of earthquake-triggered snow and ice avalanches in high-mountain regions.

These events show the vulnerability of mountain tourism and its local workforce to high-altitude hazards that are difficult to forecast, and the combined, cascading nature of hazards in tectonically active, glaciated ranges.

2017 Rigopiano, Abruzzo, Italy

In January 2017, central Italy experienced exceptional snowfall, with more than 2 m in parts of the Apennines, at the same time as a sequence of earthquakes in the region already struck by the 2016 Amatrice and Norcia events. On 18 January, four earthquakes of magnitude above 5 occurred within a few hours. In the late afternoon, an avalanche descended from the slopes of the Gran Sasso massif and struck the Hotel Rigopiano at Farindola, where guests waiting to leave had been trapped by blocked roads. The avalanche, carrying trees and rocks, moved the building several metres and destroyed much of it.

Twenty-nine people died. Eleven survived: two who were outside the building raised the alarm, and nine were rescued from air pockets in the ruins by rescue teams who reached the site after a long approach on skis and with snow ploughs, some after more than two days. Investigations considered whether the earthquakes had triggered the avalanche (seismic triggering was debated, and the heavy snowfall alone may have been sufficient), and focused on the absence of an avalanche hazard map for the site, the delay in clearing roads, and the decision-making of local authorities; criminal proceedings followed.

Rigopiano highlighted that avalanche risk exists outside the main Alpine ranges, in places where hazard zoning and public awareness are less developed, and that compound events, earthquake plus heavy snow plus road blockage, can defeat emergency plans that treat hazards separately.

═════════════════════════════════════════════
References
═════════════════════════════════════════════

  1. McClung, D. and Schaerer, P. (2006). The Avalanche Handbook, 3rd edition. The Mountaineers Books, Seattle.
  2. Schweizer, J., Jamieson, J. B. and Schneebeli, M. (2003). Snow avalanche formation. Reviews of Geophysics, 41(4), 1016.
  3. Fierz, C., Armstrong, R. L., Durand, Y., Etchevers, P., Greene, E., McClung, D. M., Nishimura, K., Satyawali, P. K. and Sokratov, S. A. (2009). The International Classification for Seasonal Snow on the Ground. IHP-VII Technical Documents in Hydrology No. 83, IACS Contribution No. 1, UNESCO-IHP, Paris.
  4. Colbeck, S. C. (1982). An overview of seasonal snow metamorphism. Reviews of Geophysics and Space Physics, 20(1), 45–61.
  5. Sturm, M., Holmgren, J., König, M. and Morris, K. (1997). The thermal conductivity of seasonal snow. Journal of Glaciology, 43(143), 26–41.
  6. Heierli, J., Gumbsch, P. and Zaiser, M. (2008). Anticrack nucleation as triggering mechanism for snow slab avalanches. Science, 321(5886), 240–243.
  7. Föhn, P. M. B. (1987). The stability index and various triggering mechanisms. In: Avalanche Formation, Movement and Effects. IAHS Publication 162, 195–214.
  8. Schweizer, J. and Jamieson, J. B. (2001). Snow cover properties for skier triggering of avalanches. Cold Regions Science and Technology, 33(2–3), 207–221.
  9. Gauthier, D. and Jamieson, B. (2008). Evaluation of a prototype field test for fracture and failure propagation propensity in weak snowpack layers. Cold Regions Science and Technology, 51(2–3), 87–97.
  10. Simenhois, R. and Birkeland, K. W. (2009). The Extended Column Test: test effectiveness, spatial variability, and comparison with the Propagation Saw Test. Cold Regions Science and Technology, 59(2–3), 210–216.
  11. Lied, K. and Bakkehøi, S. (1980). Empirical calculations of snow-avalanche run-out distance based on topographic parameters. Journal of Glaciology, 26(94), 165–177.
  12. Voellmy, A. (1955). Über die Zerstörungskraft von Lawinen. Schweizerische Bauzeitung, 73.
  13. Salm, B., Burkard, A. and Gubler, H. U. (1990). Berechnung von Fliesslawinen: eine Anleitung für Praktiker mit Beispielen. Mitteilungen des Eidgenössischen Instituts für Schnee- und Lawinenforschung, 47.
  14. Savage, S. B. and Hutter, K. (1989). The motion of a finite mass of granular material down a rough incline. Journal of Fluid Mechanics, 199, 177–215.
  15. Christen, M., Kowalski, J. and Bartelt, P. (2010). RAMMS: Numerical simulation of dense snow avalanches in three-dimensional terrain. Cold Regions Science and Technology, 63(1–2), 1–14.
  16. Statham, G., Haegeli, P., Greene, E., Birkeland, K., Israelson, C., Tremper, B., Stethem, C., McMahon, B., White, B. and Kelly, J. (2018). A conceptual model of avalanche hazard. Natural Hazards, 90(2), 663–691.
  17. McCammon, I. (2004). Heuristic traps in recreational avalanche accidents: evidence and implications. Avalanche News, 68.
  18. Lehning, M., Bartelt, P., Brown, B. and Fierz, C. (2002). A physical SNOWPACK model for the Swiss avalanche warning. Part III: meteorological forcing, thin layer formation and evaluation. Cold Regions Science and Technology, 35(3), 169–184.
  19. Falk, M., Brugger, H. and Adler-Kastner, L. (1994). Avalanche survival chances. Nature, 368, 21.
  20. Haegeli, P., Falk, M., Brugger, H., Etter, H.-J. and Boyd, J. (2011). Comparison of avalanche survival patterns in Canada and Switzerland. Canadian Medical Association Journal, 183(7), 789–795.
  21. Haegeli, P., Falk, M., Procter, E., Zweifel, B., Jarry, F., Logan, S., Kronholm, K., Biskupič, M. and Brugger, H. (2014). The effectiveness of avalanche airbags. Resuscitation, 85(9), 1197–1203.
  22. Brugger, H., Durrer, B., Elsensohn, F., Paal, P., Strapazzon, G., Winterberger, E., Zafren, K. and Boyd, J. (2013). Resuscitation of avalanche victims: evidence-based guidelines of the International Commission for Mountain Emergency Medicine (ICAR MEDCOM). Resuscitation, 84(5), 539–546.
  23. Plafker, G. and Ericksen, G. E. (1978). Nevados Huascarán avalanches, Peru. In: Voight, B. (ed.), Rockslides and Avalanches, 1: Natural Phenomena. Elsevier, Amsterdam, 277–314.
  24. Evans, S. G., Bishop, N. F., Fidel Smoll, L., Valderrama Murillo, P., Delaney, K. B. and Oliver-Smith, A. (2009). A re-examination of the mechanism and human impact of catastrophic mass flows originating on Nevado Huascarán, Cordillera Blanca, Peru in 1962 and 1970. Engineering Geology, 108(1–2), 96–118.
  25. Kargel, J. S., Leonard, G. J., Shugar, D. H., Haritashya, U. K., et al. (2016). Geomorphic and geologic controls of geohazards induced by Nepal's 2015 Gorkha earthquake. Science, 351(6269), aac8353.
  26. Statham, G., Haegeli, P., Birkeland, K. W., Greene, E., Israelson, C., Tremper, B., Stethem, C., McMahon, B., White, B. and Kelly, J. (2010). The North American public avalanche danger scale. Proceedings of the International Snow Science Workshop 2010, Squaw Valley, California, 117–123.

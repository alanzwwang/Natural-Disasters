Mudslides — An Advanced Course
══════════════════════════════════════════

Introduction
─────────────────────────────────

"Mudslide" is a word of newspapers and insurance policies, not of geotechnical engineering. What the public calls a mudslide usually turns out, on inspection, to be one of several physically distinct processes: a shallow translational slide in saturated colluvium, a channelised debris flow surging down a steep gully, a mud flow of plastic fine-grained soil, a deep-seated rotational slide reactivated after a wet winter, or a volcanic lahar tens of kilometres from its source. These processes differ by orders of magnitude in velocity, volume and mobility, and they require different models, different monitoring and different mitigation. This course therefore treats the whole family of gravitational mass movements on slopes — landslides in the broad sense — with particular attention to the rapid, water-rich flows that cause most of the fatalities.

Landslides are among the most widespread and least appreciated natural hazards. The global fatal landslide database compiled at Durham University recorded 4,862 distinct fatal non-seismic landslides between 2004 and 2016, which killed 55,997 people (Froude and Petley, 2018); earthquake-triggered landslides add tens of thousands more in individual years such as 2008. Losses are concentrated in South and East Asia, Central and South America and the East African highlands, where steep terrain, intense rainfall, rapid urbanisation and informal construction coincide. Unlike earthquakes, most landslides occur on slopes whose instability could in principle have been recognised in advance, which makes the subject unusually rewarding for engineering and planning.

The physics spans several disciplines. Failure is governed by soil and rock mechanics — shear strength, effective stress and pore-water pressure. Triggering is a problem of hydrology (infiltration, groundwater response, snowmelt), seismology (ground-motion intensity and duration) and volcanology. Motion after failure is a problem of granular and multiphase fluid mechanics, in which pore pressure, grain collisions and the entrainment of bed material control speed and runout. Risk reduction draws on remote sensing, statistics, structural engineering and land-use law. We follow this sequence, then examine eight disasters that shaped the discipline.

In this course, you will:

  1. Classify mass movements using the Varnes system as updated by Hungr, Leroueil and Picarelli (2014), and use the standard velocity scale
  2. Apply effective stress and the Mohr–Coulomb criterion to evaluate the shear strength of soils and discontinuities
  3. Compute factors of safety with the infinite-slope model and understand the assumptions of limit-equilibrium methods of slices
  4. Interpret rainfall intensity–duration thresholds, infiltration timescales and post-wildfire debris-flow initiation
  5. Estimate seismic slope displacement with Newmark's sliding-block method and recognise volcanic and anthropogenic triggers
  6. Describe debris-flow rheology (Bingham, Coulomb mixture, Voellmy) and the roles of pore pressure, surging and entrainment
  7. Estimate runout and inundation with empirical mobility relations and understand modern depth-averaged numerical models
  8. Analyse landslide dams, their longevity and the outburst floods they release
  9. Evaluate monitoring instruments, inverse-velocity failure forecasting and regional early-warning systems
  10. Distinguish susceptibility, hazard and risk, quantify individual risk, and select appropriate mitigation measures

─────────────────────────────────
Lesson 1: Classification, Anatomy and Terminology
─────────────────────────────────

📌 Key idea of this section:

        Landslide type = type of movement (fall, topple, slide, spread, flow, slope deformation) + type of material

A common vocabulary

The term landslide is used generically for the downslope movement of soil, rock or debris under gravity, whether or not the motion is literally sliding. The foundational scheme is that of Varnes (1978), refined by Cruden and Varnes (1996), which names a landslide by two words: the material (rock, debris or earth) and the type of movement (fall, topple, slide, spread or flow). Debris was defined as soil with 20–80 per cent of particles coarser than 2 mm, and earth as soil with more than 80 per cent finer than 2 mm. A "debris slide" or "earth flow" is therefore a precise statement about both mechanism and grain size.

Hungr, Leroueil and Picarelli (2014) revised the scheme to make it consistent with geotechnical practice. Materials are described with engineering soil and rock classes (for example clay, silt, sand, gravel, boulders, peat, ice, and rock described by its structure), and a sixth movement type, slope deformation, was added for slow, distributed deformation such as mountain-slope sagging (sackung) and soil creep. The updated classification identifies 32 landslide types. Earlier, Hungr et al. (2001) had standardised the flow types, which are the most important for this course.

The flow family

A debris flow is a very rapid to extremely rapid surging flow of saturated, non-plastic debris in a steep channel, with strong entrainment of material and water from the path. A mud flow is the analogous flow of saturated plastic soil (fine-grained, with a plasticity index usually above about 5 per cent), whose higher clay content gives it cohesion and allows it to travel on lower gradients. A debris flood is a very rapid flow of water heavily charged with debris, in which the sediment is transported more like bedload than as a single coherent mass; peak discharges are only modestly greater than those of an equivalent water flood. A debris avalanche is a very rapid to extremely rapid shallow flow of partially or fully saturated debris on a steep slope, without confinement in an established channel; it often begins as a shallow slide and may enter a channel to become a debris flow. Rock avalanches are extremely rapid flows of fragmented rock from large rockslides, usually exceeding about 10^{6} m³. Flowslides involve liquefaction of loose, saturated granular material — the Aberfan tip failure is the classic example. Lahar is the Indonesian term for a debris flow or hyperconcentrated flow originating on a volcano.

Debris flows and water floods form a continuum distinguished by sediment concentration. Water floods carry less than roughly 20 per cent sediment by volume; hyperconcentrated flows carry roughly 20–60 per cent and begin to show non-Newtonian behaviour; debris flows typically carry 40–80 per cent and behave as a granular–fluid mixture in which solid and fluid forces are both important. The boundaries are gradational and depend on grain-size distribution, which is why the same event may be described differently by different investigators.

Slides, falls and spreads

In slides, movement occurs on one or more discrete surfaces of rupture. Rotational slides (slumps) move on concave-upward surfaces and are typical of thick, relatively homogeneous soils and weak rocks; the head rotates backward, producing a back-tilted block and a scarp, while the toe bulges. Translational slides move on planar or gently undulating surfaces, often bedding planes, joints or the contact between colluvium and bedrock. Compound slides combine the two. Falls involve detachment and free fall, bouncing and rolling of rock or soil from steep faces; topples involve forward rotation of columns about a pivot. Spreads involve lateral extension of a cohesive upper layer over a liquefied or softened lower layer, common in quick clays and in liquefiable sands during earthquakes.

Anatomy of a landslide

The standard nomenclature (IAEG Commission on Landslides, 1990, adopted by Cruden and Varnes) includes the crown (undisplaced material above the main scarp), the main scarp, the head, minor scarps, the main body, the foot and the toe; the surface of rupture and its downslope projection, the surface of separation; and the depletion and accumulation zones. The geometry is summarised by length, width, depth of the surface of rupture and volume. A useful approximation for the volume of a rotational slide treats the displaced mass as half an ellipsoid:

        V ≈ (π/6) · D_{r} · W_{r} · L_{r}

where D_{r}, W_{r} and L_{r} are the depth, width and length of the surface of rupture. Empirical area–volume scaling, V = α A^{γ}, with γ ≈ 1.1–1.6 depending on whether landslides are shallow soil slides or bedrock landslides, is widely used for regional inventories (Larsen et al., 2010).

The velocity scale

Cruden and Varnes (1996) defined seven velocity classes that correlate with probable consequences:

        Class 7  Extremely rapid   > 5 m/s
        Class 6  Very rapid        3 m/min to 5 m/s
        Class 5  Rapid             1.8 m/h to 3 m/min
        Class 4  Moderate          13 m/month to 1.8 m/h
        Class 3  Slow              1.6 m/yr to 13 m/month
        Class 2  Very slow         16 mm/yr to 1.6 m/yr
        Class 1  Extremely slow    < 16 mm/yr

Loss of life is expected mainly in classes 6 and 7, where escape is impossible; slow landslides (classes 1–4) cause predominantly economic damage, and affected structures can often be maintained or repaired while the movement is monitored. The scale spans ten orders of magnitude, from millimetres per year to tens of metres per second, which is one reason why single models rarely span the whole problem.

State and activity

Activity is described by state (active, suspended, reactivated, dormant, relict, stabilised), distribution (advancing, retrogressive, enlarging, widening, confined) and style (complex, composite, successive, single, multiple). Reactivated landslides are particularly important because their surfaces of rupture are already at residual strength; La Conchita, California, failed in 1995 and again, catastrophically, in 2005.

✏️ Your Turn

(a) A rotational slide has a surface of rupture 12 m deep, 80 m wide and 150 m long. Estimate its volume with the half-ellipsoid formula. (b) A debris avalanche is observed to travel 600 m in 40 s. Which velocity class is it?

Answers: (a) V ≈ (π/6)(12)(80)(150) = 0.5236 × 144,000 ≈ 75,400 m³, i.e. about 7.5 × 10^{4} m³. (b) The mean speed is 600/40 = 15 m/s, which exceeds 5 m/s: class 7, extremely rapid.

─────────────────────────────────
Lesson 2: Effective Stress and Shear Strength
─────────────────────────────────

📌 Key idea of this section:

        τ_{f} = c′ + (σ − u) tan φ′ = c′ + σ′ tan φ′

Terzaghi's principle

The behaviour of soil depends not on total stress but on effective stress, the stress carried by the grain skeleton. Terzaghi's principle states that for a saturated soil the effective normal stress σ′ equals the total normal stress σ minus the pore-water pressure u. Pore pressure acts equally in all directions, carries no shear, and pushes grains apart; raising u at constant σ reduces the frictional resistance between grains. This single relation explains why most landslides follow rainfall, snowmelt, rapid drawdown of a reservoir or earthquake shaking: each of these increases pore pressure on a potential surface of rupture.

In hydrostatic conditions below a water table the pore pressure at depth h_{w} below the water table is u = γ_{w} h_{w}, where γ_{w} ≈ 9.81 kN/m³. Under seepage, u depends on the flow net; for slope-parallel seepage it is reduced by the factor cos²β, as derived in Lesson 3. Artesian conditions, where u exceeds hydrostatic, are common beneath low-permeability layers, for example in layered glacial sediments and in many coastal bluffs; elevated groundwater pressures in such deposits are thought to have contributed to the Oso failure in 2014.

The Mohr–Coulomb criterion

Shear strength on a plane is expressed by the Mohr–Coulomb criterion in effective-stress terms, τ_{f} = c′ + σ′ tan φ′, where c′ is the effective cohesion and φ′ the effective angle of internal friction. For clean sands and gravels c′ ≈ 0 and φ′ ≈ 30–40°; for normally consolidated clays c′ is small and φ′ ≈ 20–30°; for overconsolidated clays at peak strength c′ may be tens of kilopascals. Apparent cohesion in unsaturated soils arises from matric suction (u_{a} − u_{w}); Fredlund's extended criterion adds a term (u_{a} − u_{w}) tan φ^{b}. When rain infiltrates, suction is lost and the apparent cohesion that held a steep cut or a thin colluvial mantle can vanish without any positive pore pressure developing. Root reinforcement provides a further cohesion-like term, typically 1–20 kPa in forest soils, which declines over several years after logging or wildfire as roots decay.

Peak, critical-state and residual strength

Dense soils dilate when sheared and show a peak strength above their critical-state strength; loose soils contract, and when saturated and sheared rapidly they generate positive excess pore pressure. This contractive behaviour underlies static liquefaction and flowslides: if a loose, saturated mass begins to deform, pore pressure rises, effective stress falls and strength collapses, so the mass accelerates. Iverson et al. (2000) demonstrated in large flume experiments that identical sandy soils behaved completely differently depending on initial porosity: loose soil failed abruptly and mobilised as a debris flow, whereas dense soil crept episodically because dilation reduced pore pressure.

In clays, large displacements align platy minerals parallel to the shear surface and reduce strength to the residual value φ′_{r}, which may be as low as 5–15° in smectite-rich clays. First-time slides should be analysed with peak or fully softened strength, but reactivated slides with residual strength. The Vajont failure surface lay in thin clay interbeds with low residual friction angles — of order 10° in many laboratory studies — although the values and their role in the failure remain debated.

Rock masses and discontinuities

In rock, failure is usually controlled by discontinuities — bedding, joints, faults, foliation. Shear strength of a rough joint is often described by Barton's relation τ = σ′ tan[φ_{b} + JRC log_{10}(JCS/σ′)], where φ_{b} is the basic friction angle, JRC the joint roughness coefficient and JCS the joint wall compressive strength. Strength of the rock mass as a whole is commonly described with the non-linear Hoek–Brown criterion, parameterised by the Geological Strength Index. Progressive failure — the gradual breaking of intact rock bridges and the reduction of strength from peak to residual along a developing surface — explains why large rock slopes may deform for decades before catastrophic collapse.

Stress paths to failure

Field slopes fail along a variety of stress paths. Rainfall usually raises pore pressure at nearly constant total stress, moving the Mohr circle leftward toward the failure envelope. Undercutting by a river or excavation reduces confining stress. Loading of the head by fill or a spoil tip increases driving shear stress. Earthquakes add transient inertial stresses and may generate excess pore pressure in loose saturated soils. Distinguishing these paths matters, because drained and undrained responses can give very different strengths for the same soil.

✏️ Your Turn

(a) A silty sand has a unit weight of 18 kN/m³ above the water table and 20 kN/m³ below. The water table is 1 m below a level ground surface. Compute the total stress, pore pressure and vertical effective stress at 4 m depth (hydrostatic conditions). (b) With c′ = 8 kPa and φ′ = 30°, what is the shear strength on a horizontal plane at that depth?

Answers: (a) σ = 18 × 1 + 20 × 3 = 78 kPa; u = 9.81 × 3 = 29.4 kPa; σ′ = 78 − 29.4 = 48.6 kPa. (b) τ_{f} = 8 + 48.6 × tan 30° = 8 + 48.6 × 0.577 ≈ 36.0 kPa.

─────────────────────────────────
Lesson 3: Slope Stability and the Factor of Safety
─────────────────────────────────

📌 Key idea of this section:

        FS = [c′ + (γ z cos²β − u) tan φ′] / (γ z sin β cos β)

Definition of the factor of safety

The factor of safety FS is the ratio of the available shear strength to the shear stress required for equilibrium along a trial surface. FS = 1 marks limiting equilibrium; design codes commonly require FS ≥ 1.3–1.5 for permanent slopes under static conditions, with lower values accepted for temporary works or transient loads. Because strength parameters and pore pressures are uncertain, FS is better regarded as an index than as a literal margin; modern practice supplements it with the probability of failure or the reliability index.

The infinite-slope model

Many shallow landslides — the source of most debris flows — occur on a failure surface parallel to the ground surface at a depth z that is small compared with the slope length. Neglecting end effects, a column of soil of unit plan area on a slope of angle β has weight per unit area γ z cos β measured along the slope. Resolving forces on the basal plane gives a normal stress σ = γ z cos²β and a shear stress τ = γ z sin β cos β. Substituting into Mohr–Coulomb yields the equation above.

For slope-parallel seepage with the water table at height m z above the failure plane (0 ≤ m ≤ 1), the pore pressure on the plane is u = m γ_{w} z cos²β, and

        FS = c′/(γ z sin β cos β) + [1 − m γ_{w}/γ] · tan φ′/tan β

Two limiting cases are instructive. For a dry cohesionless soil, FS = tan φ′/tan β: the slope stands at angles up to the friction angle, which is why talus slopes lie at 30–40°. For a fully saturated cohesionless soil with seepage at the surface (m = 1), FS = (γ′/γ_{sat}) tan φ′/tan β, where γ′ = γ_{sat} − γ_{w} is the buoyant unit weight; since γ′/γ_{sat} ≈ 0.5, saturated seepage roughly halves the stable slope gradient. This is the essence of rainfall-triggered shallow landsliding.

Coupled with a hydrological model that predicts m from rainfall and topography, the infinite slope model underlies physically based regional models such as SHALSTAB (Montgomery and Dietrich, 1994), SINMAP and TRIGRS (Baum et al., 2008), which map the critical rainfall or the factor of safety across a digital elevation model.

Methods of slices

For deeper, curved or irregular surfaces the sliding mass is divided into vertical slices and equilibrium is applied to each. The problem is statically indeterminate, so every method makes assumptions about interslice forces. The ordinary method of slices (Fellenius) ignores interslice forces and satisfies only overall moment equilibrium; it is conservative and can be seriously inaccurate with high pore pressures. Bishop's simplified method (Bishop, 1955) assumes horizontal interslice forces and satisfies moment equilibrium for circular surfaces:

        FS = Σ { [c′ b + (W − u b) tan φ′] / m_{α} } / Σ W sin α
        m_{α} = cos α [1 + tan α tan φ′ / FS]

where W is slice weight, b slice width and α the inclination of the slice base. FS appears on both sides, so the equation is solved iteratively. Janbu's simplified method satisfies force equilibrium for non-circular surfaces; Spencer (1967) and Morgenstern–Price (1965) satisfy both force and moment equilibrium and are regarded as rigorous. For well-posed problems the rigorous methods typically agree within a few per cent. The critical surface, with the lowest FS, is found by searching many trial surfaces; in finite-element or finite-difference practice the strength reduction method lowers c′ and tan φ′ by a common factor until the model fails to converge, giving FS without assuming a surface.

Three-dimensional and probabilistic analysis

Two-dimensional analysis of the critical section is usually conservative, because three-dimensional end resistance is neglected, but it may be unconservative where the failure mass is narrow and pore pressures vary laterally. Probabilistic analysis treats c′, φ′, γ and u as random variables, often by Monte Carlo simulation, and reports the probability that FS < 1. A slope with FS = 1.5 and highly uncertain strength may be less reliable than one with FS = 1.3 and tightly constrained strength, which is why the reliability index β_{R} = (μ_{FS} − 1)/σ_{FS} is increasingly reported alongside FS.

Back-analysis

When a slope has failed, FS = 1 at the moment of failure provides a powerful constraint. Back-analysis assumes a pore-pressure distribution and solves for the strength that gives FS = 1, which is then used to design remediation. Because c′ and φ′ cannot both be found from one equation, back-analysis is normally performed for a range of plausible combinations, or c′ is set to zero for reactivated slides at residual strength.

✏️ Your Turn

(a) A colluvial mantle lies on bedrock on a 35° slope, with the bedrock contact at a vertical depth z = 2 m. γ = 19 kN/m³, c′ = 5 kPa (roots and suction), φ′ = 33°. Compute FS for a dry profile (m = 0) and for full saturation with slope-parallel seepage (m = 1). (b) For the same slope, at roughly what value of m does FS fall to 1?

Answers: (a) γ z sin β cos β = 19 × 2 × 0.5736 × 0.8192 = 17.86 kPa, so the cohesion term is 5/17.86 = 0.280; tan φ′/tan β = 0.6494/0.7002 = 0.927. For m = 0, FS = 0.280 + 0.927 ≈ 1.21. For m = 1, the frictional term is multiplied by 1 − 9.81/19 = 0.484, giving FS = 0.280 + 0.449 ≈ 0.73 — failure. (b) Setting 0.280 + 0.927(1 − 0.516 m) = 1 gives m ≈ 0.43: the slope fails once the perched water table rises to a little under half the soil thickness.

─────────────────────────────────
Lesson 4: Rainfall, Snowmelt and Wildfire Triggers
─────────────────────────────────

📌 Key idea of this section:

        I = α D^{−β}   (rainfall intensity–duration threshold)

Causes versus triggers

It is useful to distinguish preparatory factors, which progressively bring a slope toward failure (weathering, river incision, deforestation, a seasonal rise in groundwater), from the triggering event that tips it over the threshold. Rainfall is by far the most common trigger worldwide. Its effect depends on the size and depth of the landslide: shallow landslides in thin soils respond to individual storms over hours, whereas deep-seated slides respond to seasonal or multi-year groundwater changes over weeks to years.

Intensity–duration thresholds

Caine (1980) assembled 73 rainfall records associated with shallow landslides and debris flows worldwide and fitted a lower envelope relating mean rainfall intensity I (mm/h) to rainfall duration D (h), valid for durations from about 10 minutes to 10 days:

        I = 14.82 D^{−0.39}

Guzzetti et al. (2008) updated the analysis with 2,626 rainfall events and obtained a much lower global minimum threshold, I = 2.20 D^{−0.44}, together with regional and climatic variants. The power-law form arises because short bursts must be intense to raise pore pressure in time, while long, moderate rain can saturate a soil profile cumulatively. Thresholds are statistical lower bounds; most storms exceeding a threshold do not cause landslides, and the false-alarm rate is a central issue in early warning. Modern thresholds are derived objectively, for example by frequentist fitting at a chosen exceedance probability, and many replace intensity with cumulated event rainfall E plotted against D. Antecedent moisture matters: the same storm may be harmless in the dry season and catastrophic after weeks of rain, which is why many operational systems combine an antecedent index with short-term rainfall.

Infiltration and pore-pressure diffusion

Iverson (2000) showed that the pore-pressure response of a hillslope to rainfall can be separated into a long-term, quasi-steady component controlled by topography and a transient component governed by a diffusion equation. The time for a pressure pulse to propagate to depth H scales as

        T ≈ H²/D_{0}

where D_{0} is the maximum hydraulic diffusivity (saturated hydraulic conductivity divided by specific storage). For a diffusivity of 10^{−5} m²/s, a pressure pulse reaches 2 m in roughly 4 × 10^{5} s, about 4–5 days, but 20 m only after about 4 × 10^{7} s, more than a year. This scaling explains why shallow slides respond to individual storms while deep landslides lag rainfall by weeks or months, and it underlies the TRIGRS model. Infiltration capacity itself may be described by the Green–Ampt model, in which a sharp wetting front advances at a rate set by the saturated conductivity and the suction head at the front.

Snowmelt and rain-on-snow

In mountain regions, snowmelt supplies water at rates of typically 10–50 mm/day for weeks, enough to raise groundwater and reactivate deep landslides in spring. Rain-on-snow events combine rainfall with rapid melt of a ripe snowpack, producing water inputs larger than the rainfall alone; they are significant triggers in the Pacific Northwest, the Alps and Norway. Permafrost thaw and glacier retreat are increasing the frequency of rock-slope failures in high mountains by removing ice cement and buttressing.

Post-wildfire debris flows

Wildfire transforms the hydrology of steep catchments. Combustion removes the canopy, litter and duff that intercept rain; ash seals the soil surface; and organic compounds volatilised by fire can create a water-repellent layer a few centimetres below the surface. Infiltration capacity falls, overland flow increases, and rill and sheetwash erosion mobilise loose ravel. Most post-fire debris flows in the western United States are therefore runoff-generated: water entrains sediment progressively in rills and channels and bulks into a debris flow, rather than the flow beginning as a discrete landslide (Cannon et al., 2001). Because the initiating process is overland flow, post-fire debris flows are triggered by short, intense bursts — commonly measured as 15-minute or even 5-minute intensities of a few tens of millimetres per hour — rather than by long-duration rain. Susceptibility is highest in the first one to two rainy seasons and declines as vegetation regrows.

The USGS post-fire hazard assessments use logistic regression on burn severity, terrain steepness and soil properties to estimate the probability of a debris flow as a function of peak 15-minute rainfall intensity, and invert this relation to obtain spatially explicit intensity thresholds (Staley et al., 2017). Debris-flow volumes are predicted by a separate regression. These assessments are issued soon after major fires and are paired with National Weather Service flash-flood and debris-flow watches and warnings.

Human modification of hydrology

Leaking water mains, septic systems, irrigation, poorly designed road drainage that concentrates runoff onto fill slopes, and the clogging of natural drainage all raise pore pressures. In Hong Kong, many of the deadly failures of the 1970s involved fill and cut slopes associated with dense hillside development. Deforestation reduces root reinforcement over a lag of several years as roots decay, and forest roads in the Pacific Northwest have been shown to increase landslide rates many-fold in some catchments.

✏️ Your Turn

(a) Using Caine's threshold, what mean intensity and total rainfall are needed to trigger shallow landslides in storms lasting 1 h and 24 h? (b) Repeat with the Guzzetti et al. (2008) global minimum threshold, and comment.

Answers: (a) For D = 1 h, I = 14.82 mm/h and the total is 14.8 mm. For D = 24 h, I = 14.82 × 24^{−0.39} = 14.82 × 0.290 ≈ 4.29 mm/h, total ≈ 103 mm. (b) For D = 1 h, I = 2.20 mm/h (2.2 mm total); for D = 24 h, I = 2.20 × 24^{−0.44} ≈ 0.54 mm/h, total ≈ 13 mm. The global minimum is roughly an order of magnitude below Caine's envelope: it is a lower bound across all climates and soils, and in any one region it would generate an unacceptable number of false alarms. Operational thresholds must be regional.

─────────────────────────────────
Lesson 5: Seismic, Volcanic and Anthropogenic Triggers
─────────────────────────────────

📌 Key idea of this section:

        a_{c} = (FS − 1) g sin α   (Newmark critical acceleration)

Earthquake-triggered landslides

Strong earthquakes in mountainous terrain trigger thousands to hundreds of thousands of landslides within seconds. Keefer (1984), analysing 40 historical earthquakes, found that the smallest magnitudes capable of triggering landslides are about M 4.0 for rock falls, rock slides, soil falls and disrupted soil slides, about M 4.5 for soil slumps and block slides, about M 5.0 for rock slumps, slow earth flows, lateral spreads and rapid soil flows, and about M 6.0 for rock avalanches; the area affected and the maximum distance from the source increase rapidly with magnitude. Landslide density concentrates near the rupture, on the hanging walls of thrust faults, and at ridge crests where topographic amplification is strong.

The 12 May 2008 Mw 7.9 Wenchuan earthquake in Sichuan is the best-documented example. Inventories range from more than 60,000 landslides (Gorum et al., 2011) to about 197,000 in the most detailed mapping (Xu et al., 2014). Landslides are estimated to have caused roughly 20,000 of the approximately 69,000 confirmed deaths, although such attribution is uncertain. The largest, the Daguangbao rockslide, involved of order 10^{9} m³, and more than 250 landslide dams blocked rivers. Seismic weakening of slopes persisted for years: rainfall-triggered debris flows in the epicentral area were far more frequent and voluminous for much of the following decade, a post-seismic legacy also documented after the 1999 Chi-Chi (Taiwan) and 2015 Gorkha (Nepal) earthquakes.

Newmark's sliding-block analysis

Newmark (1965) modelled a potential landslide as a rigid block on an inclined plane. The block moves only when ground acceleration exceeds a critical (yield) acceleration a_{c}; integrating the excess acceleration twice over each pulse gives a cumulative permanent displacement D_{n}. For a planar block whose static factor of safety is FS and whose centre of mass first moves in direction α from horizontal, a_{c} = (FS − 1) g sin α. Displacement is not itself failure, but displacements of more than about 5–10 cm in brittle soils, or more than about 1 m in ductile soils, are commonly associated with loss of strength and catastrophic failure.

Because rigorous integration requires a strong-motion record, regional hazard mapping uses regression equations. Jibson, Harp and Michael (2000), using data from the 1994 Northridge earthquake, proposed

        log_{10} D_{n} = 1.521 log_{10} I_{a} − 1.993 log_{10} a_{c} − 1.546

with D_{n} in centimetres, a_{c} in units of g, and I_{a} the Arias intensity in m/s, defined as I_{a} = (π/2g) ∫ a(t)² dt. Arias intensity captures both the amplitude and the duration of shaking. Regressions of this type underlie the ground-failure products that now accompany rapid earthquake impact assessments. Their limitations — rigid-block assumptions, neglect of pore-pressure generation and of topographic amplification — are the subject of active research.

Volcanoes and lahars

Volcanoes are exceptionally prone to mass movement: they are tall, steep, built of weak and layered deposits, hydrothermally altered to clay, loaded by ice and snow, and repeatedly shaken and inflated. Sector collapses such as that of Mount St. Helens on 18 May 1980, a debris avalanche of about 2.5 km³, are the largest terrestrial landslides of historic time. Lahars are the more frequent killer. Primary lahars accompany eruptions: hot pyroclastic material melts snow and ice (Nevado del Ruiz, 1985), crater lakes are ejected (Kelud, Indonesia, 1919, which killed more than 5,000 people), or pyroclastic flows enter rivers. Secondary lahars are rain-triggered remobilisations of loose tephra that continue for years to decades after an eruption; after the 1991 eruption of Mount Pinatubo in the Philippines, rain-triggered lahars buried large parts of the surrounding lowlands over the following decade. Lahars have densities of roughly 1,500–2,400 kg/m³, may travel more than 100 km, and can grow several-fold in volume by eroding their channels, as Pierson et al. (1990) documented at Nevado del Ruiz.

Anthropogenic triggers

Human activity triggers a growing share of fatal landslides. Froude and Petley (2018) found that fatal landslides triggered by construction, illegal or informal mining and hill cutting increased over 2004–2016. Mechanisms include undercutting slope toes by road cuts and quarries; loading slope crests with fill or waste; altering drainage; reservoir impoundment, which raises groundwater in the valley sides and can cause failure during rapid drawdown; and the construction of spoil tips and tailings deposits that are themselves unstable. Vajont (1963) and the Three Gorges reservoir are classic examples of reservoir-induced landsliding; Aberfan (1966) illustrates the failure of an engineered waste mass; and the December 2015 Shenzhen landslide, in which a construction-waste dump failed and killed about 70 people, shows that the lesson is not confined to the past.

✏️ Your Turn

(a) A landslide has a static FS of 1.3 and its centre of mass would first move at α = 25°. Find a_{c} in units of g. (b) Using the Jibson et al. (2000) regression, estimate the Newmark displacement for an Arias intensity of 1.5 m/s and interpret it.

Answers: (a) a_{c} = (1.3 − 1) × sin 25° = 0.3 × 0.4226 ≈ 0.127 g. (b) log_{10} D_{n} = 1.521 × log_{10} 1.5 − 1.993 × log_{10} 0.127 − 1.546 = 1.521 × 0.176 + 1.993 × 0.897 − 1.546 = 0.268 + 1.788 − 1.546 ≈ 0.51, so D_{n} ≈ 3.2 cm. A displacement of a few centimetres is near the range at which brittle materials may lose strength; the slope would be classed as moderately susceptible and warrant inspection after such shaking.

─────────────────────────────────
Lesson 6: Debris-Flow Mechanics and Rheology
─────────────────────────────────

📌 Key idea of this section:

        Bingham:  τ = τ_{y} + μ_{B} (du/dz)   for τ > τ_{y}

What makes debris flows distinctive

Debris flows are mixtures of poorly sorted sediment, from clay to boulders, and water, with solid volume fractions typically of 0.4–0.8 and bulk densities of about 1,800–2,300 kg/m³. They move as a series of surges whose fronts are steep, coarse-grained and relatively dry, followed by more fluid, finer-grained tails. They travel at speeds from about 1 to more than 20 m/s, deposit lobate snouts and lateral levees, and can move boulders several metres across. Their physics was long described by single-phase non-Newtonian models; since the 1990s it has increasingly been framed as a two-phase problem in which pore-fluid pressure controls the frictional resistance of the granular phase (Iverson, 1997).

Viscoplastic (Bingham) models

Johnson's (1970) pioneering work treated debris flows as Bingham plastics: the material does not deform until the shear stress exceeds a yield strength τ_{y}, and above it the stress increases linearly with shear rate with plastic viscosity μ_{B}. In steady uniform flow on a slope θ, the basal shear stress is ρ g h sin θ, so a layer can flow only if its thickness exceeds a critical value

        h_{c} = τ_{y} / (ρ g sin θ)

Above the depth at which the shear stress falls to τ_{y}, a rigid plug rides on a shearing basal layer. The Bingham model explains why debris flows stop on finite slopes, why they leave deposits of finite thickness, and how large boulders can be supported in the matrix. Back-calculated yield strengths range from tens of pascals for muddy flows to more than 10^{4} Pa for bouldery fronts, and apparent viscosities from about 10 to 10^{4} Pa·s. O'Brien and Julien added turbulent and dispersive terms in a quadratic rheology used in the FLO-2D model.

Granular and two-phase models

Bagnold's (1954) experiments showed that in rapidly sheared concentrated suspensions grain collisions generate a dispersive pressure proportional to the square of the shear rate. Dimensionless numbers such as the Savage number (ratio of collisional to frictional stresses) and the Bagnold number (collisional to viscous stresses) help identify which mechanisms dominate. Iverson (1997) argued that in most natural debris flows Coulomb friction between grains, modulated by pore pressure, carries the bulk of the stress, with viscous and collisional stresses secondary. The key variable is then the ratio of basal pore pressure to total normal stress. In the fluid-rich body of a flow, pore pressure approaches the total normal stress and resistance is small; in the coarse, dilated front, pore pressure is low and resistance high. The bouldery front therefore acts as a moving dam pushed by the nearly liquefied body behind it, which explains the steep snout and the formation of levees as coarse grains are shouldered aside.

Experiments in the USGS debris-flow flume — a 95 m long, 2 m wide concrete chute inclined at 31° in Oregon — have been central to this understanding. Excess pore pressure dissipates by diffusion over a timescale proportional to h²/D, where D is the hydraulic diffusivity of the mixture; in fine-grained, low-permeability flows high pore pressure persists for longer, explaining the high mobility of muddy debris flows and lahars.

Practical resistance laws

Depth-averaged hazard models commonly use the Voellmy law, borrowed from snow-avalanche science, in which basal resistance per unit area is

        τ_{b} = μ σ_{n} + ρ g u² / ξ

combining a Coulomb friction coefficient μ (typically 0.05–0.3) with a turbulence-like term whose coefficient ξ is typically 100–1,000 m/s². The parameters are calibrated by back-analysis of past events rather than measured directly, which is both the strength and the weakness of the approach.

Surges and roll waves

Debris flows commonly arrive as tens to hundreds of surges separated by seconds to minutes, even under steady water supply. Proposed mechanisms include roll-wave instability of flows on steep slopes, intermittent damming and breaching of channels by coarse fronts, and episodic bank collapse. Because peak discharge in a surge can be many times the mean discharge, surging greatly increases impact forces and the overtopping of channels.

Entrainment and growth

Debris flows commonly grow by eroding bed and bank material: a flow that starts as a 10^{3} m³ landslide may reach 10^{5} m³ or more at the fan. Large flume experiments by Iverson et al. (2011) showed that when the bed is wet, entrainment is accompanied by rising pore pressure in the bed sediment, so the flow gains both mass and momentum and becomes faster; when the bed is dry, entrainment slows the flow. This positive feedback helps explain why debris flows during prolonged wet weather are so destructive.

Velocity and discharge from field evidence

After an event, peak velocity is often estimated from the superelevation of the flow surface at channel bends. Treating the flow as a forced vortex, v ≈ √(g R Δh / (k b)), where R is the radius of curvature of the bend centreline, Δh the difference in mud-line elevation between the outer and inner banks, b the flow width and k a correction factor (often taken as 1, though back-calculated values up to about 10 have been reported). Peak discharge correlates with total event volume V; Rickenmann (1999) proposed Q_{p} ≈ 0.1 V^{0.833} (Q_{p} in m³/s, V in m³) for granular debris flows. Impact pressures on structures are commonly estimated as p ≈ a ρ v² with a dimensionless coefficient a of roughly 1.5–5, plus the concentrated forces of boulder impacts.

✏️ Your Turn

(a) A debris flow with yield strength τ_{y} = 1,500 Pa and density 2,000 kg/m³ reaches a fan sloping at 10°. Below what thickness will it stop? (b) Mud lines at a bend of radius 50 m are 2 m higher on the outer bank in a channel 10 m wide. Estimate the peak velocity with k = 1. (c) Estimate the peak discharge of a 50,000 m³ granular debris flow with Rickenmann's relation.

Answers: (a) h_{c} = 1,500/(2,000 × 9.81 × sin 10°) = 1,500/(2,000 × 9.81 × 0.1736) ≈ 0.44 m. (b) v = √(9.81 × 50 × 2/10) = √98.1 ≈ 9.9 m/s, about 36 km/h. (c) Q_{p} = 0.1 × 50,000^{0.833} ≈ 0.1 × 8,200 ≈ 820 m³/s — comparable with a large river flood, from a channel only a few metres wide, which is why debris flows overwhelm culverts and bridges.

─────────────────────────────────
Lesson 7: Mobility, Runout and Inundation
─────────────────────────────────

📌 Key idea of this section:

        H/L = tan(angle of reach), which decreases as landslide volume increases

The Fahrböschung

The most robust empirical measure of landslide mobility is the ratio H/L of the fall height (from the crown of the source to the tip of the deposit) to the horizontal travel distance; its arctangent is the angle of reach or Fahrböschung, introduced by Albert Heim after the 1881 Elm rock avalanche in Switzerland. A frictional block sliding on a plane with constant coefficient μ would stop at H/L = μ, so for rock (μ ≈ 0.6) we would expect H/L ≈ 0.6. Small rockfalls do behave roughly this way, but large rock avalanches travel much farther: H/L falls to 0.1–0.2 for volumes of 10^{8}–10^{9} m³. Scheidegger (1973) fitted

        log_{10}(H/L) = −0.15666 log_{10} V + 0.62419

for rock avalanches (V in m³), and Corominas (1996) provided separate regressions for different landslide types, showing that debris flows and earth flows are more mobile than rockfalls of the same volume and that obstacles and channel confinement modify mobility.

Why are large landslides so mobile?

The excess mobility of large rock avalanches has attracted many hypotheses: air-layer lubrication (Shreve, studying the 1964 Sherman Glacier event in Alaska), acoustic fluidisation (Melosh), frictional heating and pore-fluid vaporisation on the basal shear zone (proposed for Vajont by Voight and Faust, 1982), dynamic fragmentation, the entrainment of saturated substrate and the undrained loading of valley-floor sediments. No single mechanism explains all cases; the observation that large landslides on Mars and the Moon also show reduced H/L suggests that some mechanisms need neither water nor air. For water-rich flows the dominant control is clearer: high pore pressure maintained during motion, and entrainment of wet bed material, as described in Lesson 6. The 2014 Oso landslide (H/L of roughly 0.1–0.2 depending on how the path is defined) is an example of exceptional mobility attributed to liquefaction of wet sediment.

Volume-based inundation scaling

Iverson, Schilling and Vallance (1998) used dimensional reasoning and data from 27 lahar paths at nine volcanoes to propose that the maximum cross-sectional area A and the planimetric (map) inundated area B of a lahar both scale with V^{2/3}:

        A = 0.05 V^{2/3}        B = 200 V^{2/3}

The constants were calibrated statistically, and the method is implemented in the LAHARZ program used for volcanic hazard maps worldwide. Analogous relations with different coefficients were later proposed for non-volcanic debris flows and rock avalanches (Griswold and Iverson, 2008); for non-volcanic debris flows A = 0.1 V^{2/3} and B = 20 V^{2/3}, so a non-volcanic debris flow of a given volume has a thicker cross-section but inundates a smaller area than a lahar. The methods map inundation for a chosen range of volumes, so the hazard map is only as good as the volume–frequency relationship used to select them.

Numerical runout models

Depth-averaged ("shallow-water" or Savage–Hutter) models solve conservation of mass and momentum for a flowing layer whose thickness is small relative to its length, with a basal resistance law. Widely used codes include DAN and DAN3D (Hungr and McDougall), which use an equivalent-fluid approach with frictional, Voellmy or Bingham rheologies; RAMMS (developed at the WSL Institute for Snow and Avalanche Research SLF in Switzerland), which uses the Voellmy law; FLO-2D; and D-Claw (George and Iverson), a two-phase model that evolves solid concentration and pore pressure and can simulate the transition from slide to flow, entrainment and the generation of waves when landslides enter water. Models require high-resolution topography, typically from LiDAR, and calibrated parameters; uncertainty in source volume often dominates uncertainty in runout.

Fans and avulsion

On alluvial and debris-flow fans, flows leave confining channels when deposition at bends, bridges or culverts blocks them, and spread across the fan surface in unpredictable directions. Communities built on fans — Vargas in 1999, Montecito in 2018, many Alpine villages — face hazard throughout the fan, not just along the existing channel. Fan surfaces often contain evidence of past debris flows (levees, boulder lobes, buried soils datable by radiocarbon or dendrochronology) that allows frequency–magnitude relationships to be reconstructed.

✏️ Your Turn

(a) Use LAHARZ to estimate A and B for a lahar of 10^{7} m³. (b) A rock avalanche of 10^{9} m³ detaches from a crown 1,500 m above the valley floor. Use Scheidegger's relation to estimate H/L and the horizontal runout L.

Answers: (a) V^{2/3} = (10^{7})^{2/3} ≈ 46,400 m²; A = 0.05 × 46,400 ≈ 2,300 m²; B = 200 × 46,400 ≈ 9.3 × 10^{6} m² ≈ 9.3 km². (b) log_{10}(H/L) = −0.15666 × 9 + 0.62419 = −0.786, so H/L ≈ 0.164 and L ≈ 1,500/0.164 ≈ 9.2 km. A frictional block with μ = 0.6 would travel only about 2.5 km.

─────────────────────────────────
Lesson 8: Landslide Dams and Outburst Floods
─────────────────────────────────

📌 Key idea of this section:

        Q_{p} = 0.607 V_{w}^{0.295} h_{w}^{1.24}   (Froehlich, 1995)

Formation of landslide dams

When a landslide or debris flow enters a narrow valley it can block the river and impound a lake. Costa and Schuster (1988), reviewing several hundred cases, found that rock and debris avalanches, slumps and slides, and debris flows are the commonest dam-forming types, with rainfall and earthquakes the commonest triggers. Dams are most likely where landslide volume is large relative to the valley cross-section and river discharge is too small to remove material as fast as it arrives. Earthquakes are particularly effective because they trigger many large landslides at once: the 2008 Wenchuan earthquake created more than 250 landslide dams, and the 1911 Sarez earthquake in Tajikistan built the Usoi dam, roughly 2 km³ of rock and more than 500 m high, which still impounds Lake Sarez, about 17 km³ of water, posing a long-recognised regional hazard.

Longevity

Most landslide dams are short-lived. In Costa and Schuster's compilation of dams that failed, roughly a quarter failed within a day of formation, about half within ten days and the great majority within a year. Failure is almost always by overtopping and headward erosion of the crest, because dams are composed of poorly sorted, uncompacted material and have no engineered spillway; seepage erosion (piping) and slope failure of the downstream face are less common. Stability can be screened with geomorphic indices such as the Dimensionless Blockage Index of Ermini and Casagli (2003), which combines catchment area, dam height and dam volume, but such indices only separate broad classes.

Outburst floods

Breaching releases a flood far larger than any meteorological flood in the same river. Peak discharge depends on lake volume, lake depth above the breach base, breach erosion rate and downstream valley geometry. For engineered embankment dams, Froehlich's (1995) regression relates peak outflow to the volume of water released V_{w} (m³) and the head h_{w} (m); landslide dams are coarser and more heterogeneous, so such relations are often upper bounds. Physically based breach models (for example the USGS-developed and US National Weather Service methods, and more recent models that couple sediment transport and hydraulics) are preferred for emergency planning when time allows.

Historical outbursts have been devastating. In 1841 the failure of a landslide dam on the Indus below Nanga Parbat, formed during a large landslide, sent a flood hundreds of kilometres downstream, reportedly drowning a Sikh army camped by the river. The 1786 Kangding–Luding earthquake in Sichuan blocked the Dadu River, and the outburst some days later is reported to have killed of order 100,000 people, although the historical figure is uncertain. In 2010 the Attabad landslide in the Hunza valley of Pakistan killed about 20 people and dammed a lake more than 20 km long that drowned a section of the Karakoram Highway and still persists in reduced form.

Management

Emergency options include excavating a spillway to lower the lake in a controlled manner, pumping or siphoning, diversion tunnels, and evacuation downstream combined with real-time lake-level and breach monitoring. The Tangjiashan dam, formed on 12 May 2008 on the Jian River upstream of Beichuan and Mianyang, impounded a lake of roughly 2–3 × 10^{8} m³. Engineers excavated a spillway channel across the dam crest with heavy equipment flown in by helicopter while more than 200,000 people downstream were evacuated; the lake drained through the eroding spillway on 10 June 2008 with a peak discharge reported at about 6,500 m³/s and no deaths. The case is regarded as a model of landslide-dam crisis management.

Glacial lake outburst floods (GLOFs) are related phenomena in which moraine-dammed or ice-dammed lakes fail, frequently triggered by an ice or rock avalanche into the lake that creates a displacement wave. Cascades of this type — landslide, wave, dam breach, debris flow — were responsible for the 2013 Kedarnath disaster in India and the 2021 Chamoli disaster, where a rock and ice avalanche of roughly 27 × 10^{6} m³ from Ronti Peak became a debris flow that destroyed two hydropower projects (Shugar et al., 2021).

✏️ Your Turn

(a) A landslide dam impounds a lake that will hold 3 × 10^{8} m³ when it overtops. The river delivers 100 m³/s. How long until overtopping, neglecting seepage and evaporation? (b) If the dam then breaches through 50 m of head and releases the whole lake, estimate the peak discharge with Froehlich's relation and comment.

Answers: (a) t = 3 × 10^{8}/100 = 3 × 10^{6} s ≈ 35 days — enough time to excavate a spillway and evacuate, as at Tangjiashan. (b) Q_{p} = 0.607 × (3 × 10^{8})^{0.295} × 50^{1.24} = 0.607 × 316.8 × 127.9 ≈ 2.5 × 10^{4} m³/s. This is about four times the observed Tangjiashan peak for a similar lake, illustrating both the enormous potential flood and the benefit of a controlled spillway that lowers the lake gradually and limits the breach depth.

─────────────────────────────────
Lesson 9: Monitoring, Forecasting and Early Warning
─────────────────────────────────

📌 Key idea of this section:

        1/v ∝ (t_{f} − t)   (inverse-velocity method; failure when 1/v → 0)

Subsurface instruments

Instrumentation answers three questions: where is the surface of rupture, how fast is it moving, and what are the pore pressures? Inclinometers are grooved casings grouted into boreholes through the landslide into stable ground; a probe measures tilt at regular intervals, and successive surveys reveal the depth and rate of shear. In-place inclinometers and shape-accelerometer arrays provide continuous records. Extensometers and crack meters measure displacement across scarps and tension cracks. Piezometers — open standpipes, vibrating-wire or pneumatic sensors — measure pore pressure at specific depths; they are essential because pore pressure, not rainfall, is the variable that controls stability. Time-domain reflectometry cables and fibre-optic sensing can locate shear zones along their length. Soil-moisture probes and tensiometers measure the unsaturated response that precedes positive pore pressures in shallow soils.

Surface and remote sensing

Surface displacement is measured with total stations and prisms, continuous GNSS receivers (millimetre precision), ground-based interferometric radar and terrestrial laser scanning. Satellite interferometric synthetic aperture radar (InSAR) measures line-of-sight displacement from the phase difference between radar images acquired at different times: one fringe (a phase change of 2π) corresponds to half the radar wavelength, about 2.8 cm for the C-band Sentinel-1 mission (λ ≈ 5.55 cm). Persistent-scatterer and small-baseline techniques analyse stacks of images to measure millimetre-per-year motions of slow landslides over whole regions, and are now used operationally, for example in national ground-motion services in Europe. InSAR is blind to motion perpendicular to the line of sight and loses coherence under vegetation and fast motion, so it is best suited to very slow to slow landslides. Airborne LiDAR produces bare-earth elevation models that reveal landslide scarps, hummocky deposits and debris-flow fans hidden under forest; LiDAR mapping has transformed landslide inventories in the Pacific Northwest, where the morphology of prior landslides at Oso was visible in data acquired before 2014.

Failure forecasting

Many slopes approaching failure accelerate in tertiary creep. Saito (1965) and Fukuzono (1985) observed that the inverse of velocity often decreases approximately linearly with time before failure, so that extrapolation of 1/v to zero gives an estimate of failure time t_{f}. Voight (1988) generalised this as the material failure law d²Ω/dt² = A (dΩ/dt)^{α}, which for α = 2 gives the linear inverse-velocity relation. The method has successfully anticipated failures in open-pit mines, where it is used routinely with slope-stability radar, and several natural landslides, but it can fail when acceleration is episodic, when the slope decelerates, or when data are noisy; forecasts are therefore updated continuously and combined with velocity thresholds.

Debris-flow and lahar detection

Because debris flows travel at metres per second, warning after initiation buys only minutes, but minutes can save lives on long paths. Detection systems include trip wires, geophones and seismometers that sense ground vibration, infrasound arrays, radar and ultrasonic flow-depth gauges, and video. The Acoustic Flow Monitor (AFM) developed by the USGS for lahar detection was used at Pinatubo and on volcanoes in the Cascades; at Mount Rainier, a network of lahar detection stations triggers sirens in the Puyallup and Carbon river valleys. Debris-flow warning systems in the Alps (for example at Illgraben, Switzerland) and in Taiwan and Japan combine upstream detection with automatic traffic barriers.

Regional early-warning systems

Regional systems forecast the likelihood of many landslides over an area, using rainfall thresholds and forecasts. The Hong Kong Landslip Warning System, operating since 1977, issues warnings when forecast and measured rainfall exceed thresholds tied to predicted numbers of landslides, and is coupled with a long-term slope-upgrading programme. In the United States, the USGS and National Weather Service operate post-fire debris-flow warnings in Southern California. Norway, Italy, Brazil (CEMADEN) and Japan operate national or regional systems; Japan's sediment-disaster warnings combine short-term and soil-water indices from radar-derived rainfall. Performance depends less on the model than on the end-to-end chain — monitoring, forecasting, dissemination, understanding and response — and many disasters occurred despite technically correct warnings. Warning fatigue from false alarms, warnings issued at night, and evacuation routes crossing hazardous channels are recurring problems.

✏️ Your Turn

(a) A slope accelerates from 10 mm/day at t = 0 to 20 mm/day at t = 10 days. Assuming linear inverse velocity, estimate the time of failure. (b) A Sentinel-1 interferogram shows three complete fringes across a landslide. What line-of-sight displacement does this represent?

Answers: (a) 1/v falls from 0.1 to 0.05 day/mm in 10 days, i.e. by 0.005 day/mm per day; it reaches zero after another 0.05/0.005 = 10 days, so t_{f} ≈ 20 days. (b) Each fringe is λ/2 ≈ 2.78 cm, so three fringes ≈ 8.3 cm of motion along the line of sight — the true displacement may be larger if motion is oblique to the radar beam.

─────────────────────────────────
Lesson 10: Susceptibility, Hazard, Risk and Mitigation
─────────────────────────────────

📌 Key idea of this section:

        R_{(prop)} = P_{(L)} × P_{(T:L)} × P_{(S:T)} × V_{(prop:S)} × E

Susceptibility, hazard and risk

Fell et al. (2008), writing for the international Joint Technical Committee on landslides (JTC-1), set out terminology now widely followed. Susceptibility is the spatial likelihood that landslides will occur or reach an area, without a time component. Hazard adds frequency: the probability that a landslide of given magnitude occurs in a given period. Risk combines hazard with the elements at risk, their exposure and vulnerability. For a person in a building, the annual individual risk of loss of life is

        R_{(DI)} = P_{(L)} × P_{(T:L)} × P_{(S:T)} × V_{(D:T)}

where P_{(L)} is the annual probability of the landslide, P_{(T:L)} the probability that it reaches the element, P_{(S:T)} the temporal spatial probability that the person is present, and V_{(D:T)} the vulnerability (probability of death given impact). Societal risk is presented as F–N curves of the annual frequency F of events causing N or more fatalities.

Susceptibility mapping

Inventories — maps of past landslides from aerial photographs, LiDAR, satellite imagery and field mapping — are the foundation. Heuristic methods weight factors by expert judgement. Statistical methods relate the inventory to predisposing factors (slope, lithology, curvature, land cover, distance to roads and rivers) by frequency ratio, weights of evidence, logistic regression or, increasingly, machine learning (random forests, neural networks). Physically based methods apply infinite-slope and hydrological models (SHALSTAB, TRIGRS). Statistical models must be validated on independent data, typically with receiver-operating-characteristic curves; a high area under the curve does not guarantee that a map is useful for planning if it is dominated by slope angle alone.

Tolerable risk

Hong Kong pioneered quantitative risk criteria after the disasters of 1972 (Sau Mau Ping and Po Shan Road, which together killed about 140 people) and 1976. Its guidelines treat an individual risk of 10^{−5} per year as the upper limit for new developments and 10^{−4} per year for existing slopes, with F–N criteria for societal risk. Australian and other national guidelines adopted similar values. Comparable criteria are not used in most of the countries where landslide mortality is highest, where planning control and enforcement are limited.

Engineering mitigation

Because pore pressure governs stability, drainage is the most cost-effective measure for many slopes: surface drains that intercept runoff, horizontal (sub-horizontal) drains drilled into slopes, trench drains, relief wells and, for large landslides, drainage galleries. Regrading reduces driving forces by unloading the head or flattening the slope, and buttresses or berms add resistance at the toe. Structural measures include retaining walls (gravity, cantilever, crib and gabion walls), soil nails and ground anchors, bored-pile walls, and rock bolts, dowels, shotcrete and mesh on rock slopes. Vegetation with deep roots provides long-term reinforcement of shallow soils.

For debris flows and rockfalls, the strategy shifts from preventing failure to controlling the moving mass. Check dams (sabo dams, pioneered in Japan) reduce channel gradient, limit entrainment and store sediment; open or slit dams trap boulders while passing finer material and water. Flexible ring-net barriers, developed in Switzerland, absorb the energy of debris-flow surges and rockfalls. Debris basins at the apexes of fans — Los Angeles County maintains well over a hundred along the San Gabriel Mountains front — trap sediment but must be emptied after events, and their design volume is a hazard estimate in itself. Deflection walls, training levees and lined channels guide flows across fans; bridges and culverts must be designed for debris, not just water. At Montecito in 2018 the existing basins were too small for the volumes delivered, and expanded basins and ring nets have since been installed.

Non-structural measures

Land-use planning and building codes, informed by hazard maps, are the most effective long-term measures. Relocation, insurance, public education and warning systems complement them. Community-based approaches — local rain gauges, volunteer observers, evacuation drills — have proved effective in Latin America and South Asia. Climate change is expected to increase the frequency of intense short-duration rainfall and to destabilise high-mountain slopes through permafrost thaw and glacier retreat, and in some regions longer and more severe fire seasons are expanding post-fire debris-flow hazard; quantifying these trends against the background of land-use change remains an open research problem.

✏️ Your Turn

(a) A house lies on a debris-flow fan. The annual probability of a debris flow from the catchment is 0.01; if one occurs, it will certainly reach the house (P = 1). The occupant is home 70 per cent of the time, and the probability of death if the house is struck is 0.3. Calculate the individual risk and compare it with the Hong Kong criterion for existing slopes. (b) By what factor must the risk be reduced, and name two ways to achieve it.

Answers: (a) R = 0.01 × 1 × 0.7 × 0.3 = 2.1 × 10^{−3} per year, about 21 times the 10^{−4} per year limit for existing development. (b) A reduction by a factor of at least 21 is required. Options include a debris basin or deflection wall that reduces P_{(T:L)}, a warning-and-evacuation system that reduces P_{(S:T)} during storms, structural strengthening of the house that reduces vulnerability, or relocation.

═════════════════════════════════════════════
Case Studies
═════════════════════════════════════════════

The following disasters span the major mass-movement types — reservoir-induced rockslide, flowslide of mine waste, earthquake-triggered rock and ice avalanche, volcanic lahar, regional storm-triggered debris flows, a reactivated deep-seated slide, post-wildfire debris flows and a monsoon-triggered debris flow. Death tolls for many of them are uncertain and are given as ranges where sources differ.

1963 Vajont, Italy — reservoir-induced rockslide

On 9 October 1963, at 22:39 local time, about 270 million m³ of rock slid from Monte Toc into the reservoir behind the newly completed Vajont dam in the Italian Alps, a double-curvature arch dam about 262 m high, then among the tallest in the world. The mass moved some 300–400 m horizontally in well under a minute, at speeds estimated at 20–30 m/s, and filled the reservoir. The displaced water rose up the opposite valley side, overtopped the dam crest by a large margin (published estimates range from about 100 m to more than 200 m) and swept down the Piave valley, destroying the town of Longarone and several villages. Roughly 1,900–2,000 people died. The dam itself survived almost intact.

The slide moved on a chair-shaped surface along thin clay-rich layers within Jurassic and Cretaceous limestones dipping toward the valley. Movements had been recorded since the first reservoir filling in 1960, when a slide of about 700,000 m³ occurred and an M-shaped perimeter crack about 2 km long opened on Monte Toc. Engineers recognised that a large mass was creeping and attempted to manage it by controlling reservoir level, observing that movement accelerated as the lake rose. During the final filling and partial drawdown in 1963, velocities increased to several centimetres and finally tens of centimetres per day. The extreme speed of the final failure, far greater than a simple frictional model predicts, has been attributed to the low residual strength of the clays, to frictional heating and pore-water pressurisation on the shear surface (Voight and Faust, 1982), and to the chair-shaped geometry; Hendron and Patton (1985) provided a detailed geotechnical re-analysis. Vajont remains the canonical demonstration of reservoir-induced landsliding, of the danger of a slow, monitored landslide turning catastrophic, and of the use of accelerating displacement as a precursor.

1966 Aberfan, Wales — flowslide of colliery spoil

At about 09:15 on 21 October 1966, part of Tip No. 7 of the Merthyr Vale colliery, a heap of mining waste built on the steep valley side above the village of Aberfan, failed after heavy rain and flowed downslope as a liquefied slurry. Roughly 100,000 m³ of spoil (contemporary estimates were about 140,000 cubic yards) travelled some 600 m and engulfed Pantglas Junior School and adjacent houses. 144 people died, 116 of them children.

The Tribunal of Inquiry chaired by Lord Justice Edmund Davies found that the tip had been placed over springs and earlier slips on the same hillside had been ignored, and it placed responsibility on the National Coal Board. The failure was a flowslide: loose, saturated, contractive spoil lost strength as it began to shear, generating high pore pressures and flowing with low resistance. Aberfan led directly to the Mines and Quarries (Tips) Act 1969 in the United Kingdom, to systematic engineering of spoil heaps, and to the wider recognition of static liquefaction as a mechanism in tailings and waste — a lesson repeatedly relearned in tailings dam failures since, including Brumadinho in Brazil in 2019.

1970 Huascarán, Peru — earthquake-triggered rock and ice avalanche

The Mw 7.9 Ancash earthquake of 31 May 1970, centred offshore near Chimbote, killed roughly 66,000–70,000 people, making it the deadliest natural disaster in Peruvian history. Shaking detached a mass of rock and glacier ice from the west face of the north peak of Nevado Huascarán, Peru's highest mountain. The resulting avalanche entrained snow, moraine and soil and descended toward the Santa valley, travelling about 15–16 km horizontally and more than 4 km vertically to the Río Santa in roughly three minutes, at mean speeds estimated at 270–280 km/h (Plafker and Ericksen, 1978). Volume estimates range from about 50 to 100 million m³. Part of the flow overtopped a ridge and buried the town of Yungay; the main flow also struck Ranrahirca, which had been largely destroyed by a smaller avalanche from the same peak in 1962.

The number killed by the avalanche is uncertain. Many accounts give figures of 15,000–20,000 or more for Yungay and Ranrahirca; a later re-examination by Evans and colleagues argued for a substantially lower figure, about 6,000. Huascarán remains a benchmark for extreme mobility (H/L ≈ 0.25) and for the hazard of cascading ice-and-rock avalanches on glaciated volcanic and tectonic peaks, a hazard that warming is expected to increase.

1985 Armero, Colombia — eruption-triggered lahars

On 13 November 1985, a relatively small eruption of Nevado del Ruiz in the Colombian Andes produced pyroclastic flows and surges that swept across the summit ice cap, rapidly melting snow and ice and releasing meltwater estimated at of order 10^{7} m³. The water mixed with loose sediment and generated lahars that descended the radial valleys. In the Río Lagunillas the flows bulked as they eroded their channels, and about two and a half hours after the eruption, around 23:30 local time, lahars several metres deep emerged from the canyon and spread across the town of Armero, about 70 km from the summit. More than 20,000 of Armero's roughly 29,000 inhabitants died; with roughly 1,800–2,000 further deaths in the Chinchiná valley on the west side, the total of about 23,000 makes it the second-deadliest volcanic disaster of the twentieth century.

The disaster was foreseen. Increasing unrest had been observed for a year, a hazard map issued by the Colombian geological survey (INGEOMINAS) in October 1985 showed Armero in the lahar zone, and warnings were transmitted on the afternoon and evening of the eruption, but evacuation was not ordered effectively and many residents were told to stay indoors. Armero became a defining case for volcanic risk communication, for the need for clear decision chains, and for the founding of the USGS–USAID Volcano Disaster Assistance Program. Pierson et al. (1990) documented the mechanics of melting, mobilisation and flow bulking, which established that lahars can grow far beyond the volume of their source water.

1999 Vargas, Venezuela — regional debris flows on coastal fans

From 14 to 16 December 1999, a stalled frontal system over the Cordillera de la Costa produced about 900 mm of rain in three days at Maiquetía airport, almost twice the station's mean annual rainfall of roughly 500 mm, after an unusually wet early December. Thousands of shallow landslides on the steep, deeply weathered slopes of the range coalesced into debris flows and debris floods in many catchments draining to the Caribbean coast of Vargas state. The flows emerged onto densely urbanised alluvial fans, carrying boulders up to several metres across, destroying entire neighbourhoods such as Caraballeda and Los Corales, and building new land into the sea.

Death toll estimates range from about 10,000 to 30,000, with 15,000 often cited; the uncertainty reflects the number of people swept out to sea or buried and the incomplete census of informal settlements. Damage was estimated in billions of US dollars. USGS investigations (Wieczorek et al., 2001) showed that the fans had been built by comparable events in prehistoric and historic time, including a less damaging event in 1951, and recommended mapping of fan hazard zones, sabo-type check dams and debris basins. The event remains one of the deadliest landslide disasters on record and a cautionary case of urban growth on active debris fans.

2014 Oso, Washington, USA — highly mobile reactivated landslide

At 10:37 on 22 March 2014, a slope about 180 m high above the North Fork Stillaguamish River near Oso failed after an exceptionally wet late winter, with rainfall in the preceding weeks roughly twice normal. About 8 million m³ of glacial and lacustrine sediment collapsed, liquefied and flowed more than a kilometre across the valley floor, crossing the river and a state highway and overrunning the Steelhead Haven neighbourhood. Forty-three people died, the deadliest landslide in United States history.

The site had a long history of landslides, including movements in 1937, 1951, 1967, 1988 and 2006, and LiDAR and earlier reports showed the hillside to be a large prehistoric landslide complex. Investigations (Iverson et al., 2015; Wartman et al., 2016) indicated that the failure occurred in at least two stages, and that the unexpected mobility resulted from rapid liquefaction of the wet, loose slide mass and its interaction with saturated valley-floor sediment. Oso demonstrated that landslide hazard zones defined by simple slope-height runout rules can underestimate reach, prompting Washington State to fund LiDAR-based landslide mapping and to strengthen hazard communication.

2018 Montecito, California, USA — post-wildfire debris flows

The Thomas Fire burned about 1,140 km² of Ventura and Santa Barbara counties in December 2017, then the largest wildfire in modern California history. In the early hours of 9 January 2018, an intense band of rain associated with a cold front crossed the burned Santa Ynez Mountains above Montecito, with short-duration intensities far above the threshold for post-fire debris flows; reported 5-minute intensities exceeded 100 mm/h. Debris flows from several catchments, including Montecito, San Ysidro and Romero creeks, swept onto the fans and through residential neighbourhoods with boulders up to several metres across, damaging or destroying more than 400 homes and closing US Highway 101 for about two weeks. Twenty-three people died, two of whom were never found.

The USGS had issued a hazard assessment, and the National Weather Service had issued flash-flood watches and warnings; mandatory evacuation orders covered some, but not all, of the areas that were later inundated, and many residents did not leave. Kean et al. (2019) reconstructed flow depths, speeds and volumes, showing that inundation extended well beyond mapped evacuation zones and that existing debris basins were small relative to the delivered volumes. Montecito exposed the difficulty of communicating short-fuse hazards that depend on minute-scale rainfall, and led to improved basins, ring-net barriers and revised evacuation-zone mapping in Santa Barbara County.

2024 Wayanad, Kerala, India — monsoon debris flow

In the early hours of 30 July 2024, after an unusually wet monsoon month and several hundred millimetres of rain in the preceding two days, a landslide in the upper catchment of the Iruvazhinji river near Punchirimattom in Wayanad district, Kerala, mobilised into a debris flow that travelled several kilometres down the valley through the settlements of Mundakkai and Chooralmala. Further slides and surges followed. The flow destroyed hundreds of houses, a school and a bridge that was the only road access, delaying rescue until the Indian Army constructed a temporary bridge.

Official counts recorded more than 200 deaths with many more people missing; estimates of the total range from about 250 to more than 400. The Western Ghats of Kerala have suffered repeated landslide disasters, including thousands of landslides in the August 2018 floods and the 2019 Puthumala landslide in the same district. A rapid attribution study by the World Weather Attribution group estimated that the heavy one-day rainfall had become roughly 10 per cent more intense because of climate warming, an estimate that carries considerable uncertainty. The disaster renewed debate about quarrying, plantation agriculture and settlement on steep slopes, about the density and use of rain-gauge networks, and about the development of a regional landslide early-warning system for the Western Ghats.

═════════════════════════════════════════════
References
═════════════════════════════════════════════

  1. Varnes, D. J. (1978). Slope movement types and processes. In R. L. Schuster and R. J. Krizek (eds), Landslides: Analysis and Control, Transportation Research Board Special Report 176, 11–33. National Academy of Sciences.
  2. Cruden, D. M. and Varnes, D. J. (1996). Landslide types and processes. In A. K. Turner and R. L. Schuster (eds), Landslides: Investigation and Mitigation, Transportation Research Board Special Report 247, 36–75. National Academy Press.
  3. Hungr, O., Evans, S. G., Bovis, M. J. and Hutchinson, J. N. (2001). A review of the classification of landslides of the flow type. Environmental and Engineering Geoscience, 7(3), 221–238.
  4. Hungr, O., Leroueil, S. and Picarelli, L. (2014). The Varnes classification of landslide types, an update. Landslides, 11, 167–194.
  5. Duncan, J. M., Wright, S. G. and Brandon, T. L. (2014). Soil Strength and Slope Stability, 2nd edition. Wiley.
  6. Bishop, A. W. (1955). The use of the slip circle in the stability analysis of slopes. Géotechnique, 5(1), 7–17.
  7. Montgomery, D. R. and Dietrich, W. E. (1994). A physically based model for the topographic control on shallow landsliding. Water Resources Research, 30(4), 1153–1171.
  8. Caine, N. (1980). The rainfall intensity–duration control of shallow landslides and debris flows. Geografiska Annaler, Series A, 62(1–2), 23–27.
  9. Guzzetti, F., Peruccacci, S., Rossi, M. and Stark, C. P. (2008). The rainfall intensity–duration control of shallow landslides and debris flows: an update. Landslides, 5, 3–17.
  10. Iverson, R. M. (2000). Landslide triggering by rain infiltration. Water Resources Research, 36(7), 1897–1910.
  11. Staley, D. M., Negri, J. A., Kean, J. W., Laber, J. L., Tillery, A. C. and Youberg, A. M. (2017). Prediction of spatially explicit rainfall intensity–duration thresholds for post-fire debris-flow generation in the western United States. Geomorphology, 278, 149–162.
  12. Keefer, D. K. (1984). Landslides caused by earthquakes. Geological Society of America Bulletin, 95(4), 406–421.
  13. Newmark, N. M. (1965). Effects of earthquakes on dams and embankments. Géotechnique, 15(2), 139–160.
  14. Jibson, R. W., Harp, E. L. and Michael, J. A. (2000). A method for producing digital probabilistic seismic landslide hazard maps. Engineering Geology, 58(3–4), 271–289.
  15. Iverson, R. M. (1997). The physics of debris flows. Reviews of Geophysics, 35(3), 245–296.
  16. Iverson, R. M., Reid, M. E., Logan, M., LaHusen, R. G., Godt, J. W. and Griswold, J. P. (2011). Positive feedback and momentum growth during debris-flow entrainment of wet bed sediment. Nature Geoscience, 4, 116–121.
  17. Iverson, R. M., Schilling, S. P. and Vallance, J. W. (1998). Objective delineation of lahar-inundation hazard zones. Geological Society of America Bulletin, 110(8), 972–984.
  18. Costa, J. E. and Schuster, R. L. (1988). The formation and failure of natural dams. Geological Society of America Bulletin, 100(7), 1054–1068.
  19. Voight, B. (1988). A method for prediction of volcanic eruptions. Nature, 332, 125–130.
  20. Fell, R., Corominas, J., Bonnard, C., Cascini, L., Leroi, E. and Savage, W. Z. (2008). Guidelines for landslide susceptibility, hazard and risk zoning for land use planning. Engineering Geology, 102(3–4), 85–98.
  21. Froude, M. J. and Petley, D. N. (2018). Global fatal landslide occurrence from 2004 to 2016. Natural Hazards and Earth System Sciences, 18, 2161–2181.
  22. Pierson, T. C., Janda, R. J., Thouret, J.-C. and Borrero, C. A. (1990). Perturbation and melting of snow and ice by the 13 November 1985 eruption of Nevado del Ruiz, Colombia, and consequent mobilization, flow and deposition of lahars. Journal of Volcanology and Geothermal Research, 41, 17–66.
  23. Wieczorek, G. F., Larsen, M. C., Eaton, L. S., Morgan, B. A. and Blair, J. L. (2001). Debris-flow and flooding hazards associated with the December 1999 storm in coastal Venezuela and strategies for mitigation. U.S. Geological Survey Open-File Report 01-0144.
  24. Iverson, R. M., George, D. L., Allstadt, K., et al. (2015). Landslide mobility and hazards: implications of the 2014 Oso disaster. Earth and Planetary Science Letters, 412, 197–208.
  25. Kean, J. W., Staley, D. M., Lancaster, J. T., et al. (2019). Inundation, flow dynamics, and damage in the 9 January 2018 Montecito debris-flow event, California, USA: opportunities and challenges for post-wildfire risk assessment. Geosphere, 15(4), 1140–1163.

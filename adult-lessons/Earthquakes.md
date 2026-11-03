Earthquakes — An Advanced Course
══════════════════════════════════════════

Introduction
─────────────────────────────────

An earthquake is the sudden release of elastic strain energy stored in the rocks around a fault, radiated as seismic waves when the fault slips. Each year the global networks record well over a hundred thousand events large enough to locate. On long-term averages compiled by the US Geological Survey there are roughly 15 earthquakes of magnitude 7.0–7.9 and about one of magnitude 8 or larger. Over the twentieth and early twenty-first centuries earthquakes and their secondary effects, mainly tsunamis, landslides, liquefaction and fire, have killed on the order of 10,000 to 30,000 people per year on average. The record is dominated by a small number of catastrophic events, such as Tangshan in 1976, Sumatra–Andaman in 2004, Haiti in 2010 and Türkiye–Syria in 2023, and the deaths come overwhelmingly from the collapse of buildings that were never designed, or never built, to resist shaking.

Earthquake science sits where several disciplines meet. Plate tectonics explains where strain accumulates. Rock mechanics and friction explain how faults fail. Elastodynamics explains how seismic waves travel through a layered, attenuating, heterogeneous Earth. Statistical seismology describes how earthquakes cluster in space, time and size. Geotechnical and structural engineering turn ground motion into forces on soils and buildings. Probabilistic hazard and risk analysis combine all of this into the numbers that building codes, insurers and governments use. This course takes each of these in turn at graduate level, with worked quantitative examples, and ends with eight case studies that show how individual disasters changed the science and the practice.

Unless stated otherwise, SI units are used throughout. Seismic moment is in newton-metres (N·m), stress in megapascals (MPa) and accelerations in units of g = 9.81 m/s². Magnitudes and death tolls from historical events are uncertain, and where sources disagree a range is given.

In this course, you will:

  1. Relate plate motions, interseismic strain accumulation and the elastic-rebound model to the seismic cycle on faults.
  2. Apply Coulomb failure criteria, Byerlee friction and rate-and-state friction to fault stability and stress triggering.
  3. Derive seismic wave speeds from elastic moduli, interpret seismograms and locate earthquakes from arrival times.
  4. Compute local, body-wave, surface-wave and moment magnitudes, seismic moment, stress drop and radiated energy.
  5. Use the Gutenberg–Richter and Omori–Utsu laws to forecast earthquake and aftershock probabilities.
  6. Estimate ground motion, attenuation, site amplification and intensity, and evaluate liquefaction potential.
  7. Set up a probabilistic seismic hazard analysis and interpret return periods, logic trees and deaggregation.
  8. Explain the principles of seismic design, base isolation and earthquake early warning, and their limits.
  9. Critically assess historical disasters and the open research questions that remain.

─────────────────────────────────
Lesson 1: Plate Tectonics and the Seismic Cycle
─────────────────────────────────

📌 Key idea of this section:

        Slip deficit accumulated between earthquakes = (plate rate − creep rate) × elapsed time

Where earthquakes happen

When epicentres are plotted on a world map, they outline the boundaries of a dozen or so major lithospheric plates and many microplates. This pattern was one of the main pieces of evidence for plate tectonics. Isacks, Oliver and Sykes (1968) showed that the geography of seismicity, the dip of the deep seismic zones and the focal mechanisms of earthquakes all fit the new theory of rigid plates spreading at ridges, sliding past each other at transform faults and sinking at trenches. Relative plate speeds range from a few millimetres per year to more than 150 mm/yr. The Pacific plate moves relative to North America at about 48–50 mm/yr, and roughly 35 mm/yr of that is taken up on the San Andreas fault system in central California.

Each kind of boundary has its own style of earthquake. Mid-ocean ridges produce shallow, moderate normal-faulting and transform earthquakes, rarely larger than about M7, because the lithosphere there is thin and hot. Continental transforms such as the San Andreas, the North Anatolian and the Alpine Fault of New Zealand produce strike-slip earthquakes up to about M8. Subduction zones produce the largest earthquakes on Earth: every event of M ≥ 9 in the instrumental era (Kamchatka 1952, Chile 1960, Alaska 1964, Sumatra–Andaman 2004 and Tōhoku 2011) ruptured a subduction megathrust. They also produce intermediate- and deep-focus earthquakes along the Wadati–Benioff zone, down to about 700 km. Continental collision zones such as the Himalaya, the Zagros and the Tien Shan spread thrust and strike-slip faulting over thousands of kilometres. A disproportionate share of fatalities comes from such diffuse plate-boundary zones and from intraplate settings, where strain rates are low, recurrence intervals long and earthquakes easily forgotten.

Brittle seismogenic layer

In continental crust, earthquakes generally nucleate above about 10–20 km. Below that depth, temperatures above roughly 300–400 °C let quartz-rich rocks deform by ductile creep instead of unstable frictional sliding. On subduction megathrusts the seismogenic zone extends to roughly 40–50 km, because the subducting slab keeps the interface cold. Intermediate-depth (70–300 km) and deep (300–700 km) earthquakes occur inside the subducting slab. At those pressures ordinary frictional failure should be suppressed, and proposed mechanisms include dehydration embrittlement, thermal shear runaway and transformational faulting of metastable olivine. Their physics is still an open question.

Elastic rebound

After the 1906 San Francisco earthquake, H. F. Reid compared triangulation surveys made before and after the event. He proposed that the crust on either side of the fault had been slowly distorted by distant forces over decades, and that the earthquake released the accumulated elastic strain as the two sides snapped back towards an unstrained state (Reid, 1910). This elastic-rebound theory is still the basic model of the seismic cycle. In the interseismic period, a locked fault accumulates a slip deficit. In the coseismic phase, seconds to minutes long, that deficit is released as slip. In the postseismic phase, afterslip, viscoelastic relaxation of the lower crust and mantle, and poroelastic rebound redistribute stress over months to decades.

Space geodesy (GNSS and InSAR) now measures interseismic strain directly. For an infinitely long strike-slip fault locked from the surface to depth D and slipping freely below at the long-term rate s, the surface velocity parallel to the fault at distance x is given by the classic screw-dislocation solution (Savage and Burford, 1973):

        v(x) = (s / π) · arctan(x / D)

The velocity therefore changes over a zone a few times D wide, so for D ≈ 15 km the strain is spread across tens of kilometres. Geodetic coupling maps of subduction zones, built from the ratio of the locked rate to the plate rate, show patchy locking. These maps are now central inputs to hazard models, although they cannot show whether a locked patch will fail in one great earthquake or several smaller ones.

Recurrence and its irregularity

Under a simple model, a fault that slips D_{eq} metres in each event and is loaded at rate s would have earthquakes every D_{eq}/s years. Real faults are much less regular. The Parkfield segment of the San Andreas produced M ≈ 6 events in 1857, 1881, 1901, 1922, 1934 and 1966, which led to a prediction of the next event for 1988 ± 5 years (Bakun and Lindh, 1985). It did not occur until 28 September 2004. Palaeoseismic trenching, coastal uplift and subsidence records and turbidite records commonly give coefficients of variation of recurrence intervals of about 0.3–0.7. Ruptures also cascade across segment boundaries in ways that a simple characteristic-earthquake model does not anticipate. Tōhoku 2011, Kaikōura 2016 and Türkiye 2023 all ruptured multiple segments that hazard models had treated separately.

✏️ Your Turn

(a) A section of the San Andreas fault is loaded at 35 mm/yr and has been fully locked since its last major earthquake 150 years ago. What slip deficit has accumulated?
(b) A thrust fault releases an average of 4 m of slip per event and is loaded at an effective (locked) rate of 20 mm/yr. What is the mean recurrence interval under a perfectly periodic model?
(c) Using v(x) = (s/π)·arctan(x/D), what fraction of the far-field rate is observed at x = D?

Answers: (a) 35 mm/yr × 150 yr = 5,250 mm ≈ 5.3 m of potential slip, comparable to the 4–6 m offsets of 1906. (b) 4,000 mm ÷ 20 mm/yr = 200 years. Real intervals would scatter around this value with a coefficient of variation of perhaps 0.3–0.7. (c) arctan(1) = π/4, so v = s/4. The point at x = D moves at a quarter of the full plate rate relative to the fault, or half of the one-sided far-field value s/2.

─────────────────────────────────
Lesson 2: Stress, Friction and Fault Mechanics
─────────────────────────────────

📌 Key idea of this section:

        Coulomb failure: τ ≥ μ (σ_{n} − p) + C ;   ΔCFS = Δτ + μ′ Δσ_{n}

Andersonian faulting

Because the Earth's surface is free of shear traction, one principal stress there must be vertical. Anderson (1905; 1951) used this to classify faults. Normal faults occur when the vertical stress is the greatest principal stress σ₁. Thrust faults occur when it is the least, σ₃. Strike-slip faults occur when it is the intermediate stress σ₂. With a friction coefficient near 0.6–0.85, optimally oriented faults lie about 25–30° from σ₁, so normal faults typically dip near 60° and thrusts near 30°. Many large faults are misoriented with respect to the present stress field and are still active, which is evidence that they are weak (see below).

Byerlee's law and effective stress

Laboratory friction experiments on a very wide range of rock types converge on a narrow band of behaviour (Byerlee, 1978):

        τ = 0.85 σ_{n}                 for σ_{n} < 200 MPa
        τ = 50 MPa + 0.6 σ_{n}         for 200 < σ_{n} < 1,700 MPa

The exceptions are mainly clay-rich and phyllosilicate gouges such as smectite and talc, with μ ≈ 0.1–0.3. Pore fluid pressure p reduces the normal stress clamping the fault (Terzaghi's effective-stress principle). Hubbert and Rubey (1959) used this to explain the motion of large, low-angle thrust sheets. With hydrostatic pore pressure, the effective vertical stress at 10 km is about 167 MPa, and Byerlee friction then implies shear strengths around 100 MPa. Heat-flow measurements around the San Andreas, however, show no frictional heating anomaly, which implies average shear stresses of perhaps 10–20 MPa or less. This is the "heat-flow paradox" or "strength of faults" debate. Explanations include intrinsically weak gouge, high pore pressure, and dynamic weakening during rapid slip, such as flash heating, thermal pressurisation of pore fluid and melting. In high-speed friction experiments at slip rates of about 1 m/s, μ can fall to 0.1–0.3 or lower.

Coulomb stress transfer

An earthquake changes the stress on nearby faults. The change in Coulomb failure stress on a receiver fault of given orientation is

        ΔCFS = Δτ + μ′ Δσ_{n}

Here Δτ is the change in shear stress in the slip direction, Δσ_{n} is the change in normal stress (taken as positive for unclamping), and μ′ is an effective friction coefficient (typically 0.4) that absorbs pore-pressure effects. Positive ΔCFS brings a fault closer to failure. Following the 1992 Landers earthquake, King, Stein and Lin (1994) showed that aftershocks were concentrated in regions of positive ΔCFS, and stress changes as small as about 0.01–0.1 MPa (0.1–1 bar) appear to influence seismicity rates. The sequence of large earthquakes that progressed westward along the North Anatolian Fault from 1939 to 1999 is the best-known example of a fault-to-fault cascade consistent with stress transfer (Stein, Barka and Dieterich, 1997). Dynamic stresses from passing seismic waves can also trigger earthquakes at great distances. Remote triggering after Landers was observed as far away as Yellowstone, about 1,250 km.

Rate-and-state friction

Static and dynamic friction coefficients alone cannot explain why faults lock, slip slowly or fail seismically. The empirical rate-and-state laws of Dieterich (1979) and Ruina (1983) describe friction as a function of slip velocity V and a state variable θ that represents the maturity of asperity contacts:

        μ = μ₀ + a ln(V/V₀) + b ln(V₀ θ / D_{c})
        dθ/dt = 1 − V θ / D_{c}            (ageing law)

Here a and b are dimensionless constants of order 0.01 and D_{c} is a characteristic slip distance, about 1–100 μm in the laboratory and probably millimetres to centimetres on natural faults. At steady state, μ_{ss} = μ₀ + (a − b) ln(V/V₀). If a − b > 0 the material is velocity-strengthening, and it slides stably: creeping faults and the shallow, unconsolidated parts of megathrusts behave this way. If a − b < 0 it is velocity-weakening, and it can stick-slip. For a spring-slider of stiffness k, sliding becomes unstable when

        k < k_{c} = σ_{n}′ (b − a) / D_{c}

The size of the smallest patch that can nucleate an earthquake scales as μD_{c}/[σ_{n}′(b − a)]. The framework explains the depth limits of seismicity, interseismic healing, the slow slip events and tectonic tremor found at the base of many subduction zones since about 2000, and the time-dependent earthquake nucleation that underlies Dieterich's (1994) model of aftershock rates. Marone (1998) and Scholz (2019) give comprehensive reviews.

Stress drop

The static stress drop Δσ is the average reduction in shear stress on the rupture. It scales with average slip D̄ divided by a rupture dimension. For a circular crack of radius r (Eshelby, 1957):

        Δσ = (7π/16) μ D̄ / r = 7 M₀ / (16 r³)

Stress drops estimated from seismic spectra are remarkably independent of magnitude over at least 10 magnitude units. They cluster around 1–10 MPa, with large scatter. This self-similarity, with D̄ proportional to rupture length, is why rupture area roughly scales as 10^{M − 4} km².

✏️ Your Turn

(a) Take crustal density 2,700 kg/m³, water density 1,000 kg/m³ and g = 9.81 m/s². Find the lithostatic stress, the hydrostatic pore pressure and the effective vertical stress at 10 km depth, and the shear strength of a fault with μ = 0.6 under that effective normal stress.
(b) An earthquake changes the stresses on a nearby receiver fault by Δτ = +0.30 MPa and Δσ_{n} = −0.20 MPa (clamping). With μ′ = 0.4, find ΔCFS.
(c) A laboratory fault has σ_{n}′ = 50 MPa, b − a = 0.004 and D_{c} = 20 μm. What is k_{c}?

Answers: (a) σ_{v} = 2,700 × 9.81 × 10⁴ ≈ 265 MPa; p = 1,000 × 9.81 × 10⁴ ≈ 98 MPa; σ_{v}′ ≈ 167 MPa; τ = 0.6 × 167 ≈ 100 MPa. (b) ΔCFS = 0.30 + 0.4 × (−0.20) = +0.22 MPa (2.2 bar). This is well above the roughly 0.1 bar level associated with triggering, so the receiver fault has been brought closer to failure. (c) k_{c} = 50 × 10⁶ × 0.004 / (20 × 10⁻⁶) = 1.0 × 10¹⁰ Pa/m = 10 MPa/mm. A loading frame less stiff than this will produce stick-slip.

─────────────────────────────────
Lesson 3: Seismic Waves, Earth Structure and Seismometry
─────────────────────────────────

📌 Key idea of this section:

        V_{P} = √[(K + 4μ/3) / ρ] ,   V_{S} = √(μ / ρ)

Body waves

In an isotropic elastic solid, the equations of motion separate into a dilatational (compressional) wave and a rotational (shear) wave. The P wave travels at V_{P}, which depends on the bulk modulus K and shear modulus μ. The S wave travels at V_{S}, which depends only on μ, so S waves do not travel through fluids. For a Poisson solid (λ = μ, Poisson's ratio 0.25), V_{P}/V_{S} = √3 ≈ 1.73. This is a good approximation for much of the crust and mantle. Elevated V_{P}/V_{S}, above about 1.8–1.9, indicates fluids, partial melt or unconsolidated sediment. Typical upper-crustal speeds are V_{P} ≈ 5.5–6.5 km/s and V_{S} ≈ 3.2–3.7 km/s. Speeds in the upper mantle are about 8.1 and 4.5 km/s.

Surface waves

Interference of body waves near the free surface produces surface waves. Rayleigh waves have retrograde elliptical particle motion in the vertical plane and travel at about 0.92 V_{S} in a uniform half-space. Love waves are horizontally polarised shear waves trapped in a low-velocity layer. Because the waves penetrate to a depth of roughly one wavelength, longer periods sample faster, deeper rock, so surface waves are dispersive. Surface-wave dispersion is a principal tool for imaging crust and upper-mantle structure. Geometric spreading is cylindrical for surface waves, with amplitude falling as about 1/√r, and spherical for body waves, falling as about 1/r. Surface waves therefore dominate teleseismic records of shallow earthquakes and much of the long-period shaking at regional distances.

What seismic waves revealed about the Earth

Refracted and reflected seismic phases are the main source of knowledge about the Earth's interior. Mohorovičić (1909) identified the crust–mantle velocity discontinuity from records of the 8 October 1909 Kupa Valley earthquake in Croatia. Gutenberg (1913) located the core–mantle boundary near 2,900 km depth (2,891 km in modern models). The P-wave shadow zone between about 104° and 140° epicentral distance, together with the absence of direct S beyond about 104°, shows that the outer core is liquid. Inge Lehmann (1936) inferred a solid inner core from weak P arrivals within the shadow zone, and the inner core is now known to have a radius of about 1,220 km. The Preliminary Reference Earth Model (PREM; Dziewonski and Anderson, 1981) remains the standard one-dimensional reference model. Three-dimensional tomographic models resolve subducted slabs, large low-shear-velocity provinces at the base of the mantle and mantle plumes. Very great earthquakes set the whole planet ringing in normal modes, with periods up to about 54 minutes for the gravest spheroidal mode ₀S₂. These modes were first unambiguously observed after the 1960 Chile earthquake.

Seismometers

A seismometer is essentially an inertial mass on a spring, with damping. Its response to ground displacement u(t) has a transfer function that is flat above the natural frequency ω₀ for displacement and flat below ω₀ for acceleration. The Wood–Anderson torsion seismometer, with natural period 0.8 s, damping about 0.8 of critical and a nominal magnification of 2,800, defined Richter's local magnitude. Its true magnification was later shown to be closer to 2,080 (Uhrhammer and Collins, 1990). Modern broadband force-feedback instruments, such as the Streckeisen STS-1 and STS-2 and similar designs, keep the mass nearly stationary with an electronic restoring force. They record ground velocity faithfully from about 0.003 Hz (periods of around 360 s) to tens of hertz with more than 140 dB of dynamic range. Strong-motion accelerographs, designed to stay on scale at accelerations of 2–4 g, complement them in the near field. Global networks include the World-Wide Standardized Seismograph Network of the 1960s, which was set up partly to monitor nuclear tests and gave a great boost to plate tectonics, and the Global Seismographic Network of today. Data are now increasingly supplemented by high-rate GNSS, distributed acoustic sensing on optical fibre, ocean-bottom seismometers and dense low-cost and smartphone arrays.

✏️ Your Turn

(a) A crustal rock has ρ = 2,700 kg/m³ and μ = 30 GPa and behaves as a Poisson solid. Compute V_{S}, V_{P} and the approximate Rayleigh-wave speed.
(b) Show that for a local event the hypocentral distance d is related to the S−P interval Δt by d = Δt · V_{P} V_{S} / (V_{P} − V_{S}), and evaluate d for Δt = 12 s with V_{P} = 6.0 km/s and V_{S} = 3.5 km/s.

Answers: (a) V_{S} = √(3 × 10¹⁰ / 2,700) ≈ 3,333 m/s; V_{P} = √3 × 3,333 ≈ 5,774 m/s; V_{R} ≈ 0.919 × 3,333 ≈ 3,065 m/s. (b) The arrival times are t_{S} = d/V_{S} and t_{P} = d/V_{P}, so Δt = d(1/V_{S} − 1/V_{P}) = d(V_{P} − V_{S})/(V_{P}V_{S}), which rearranges to the given formula. The factor is 6.0 × 3.5 / 2.5 = 8.4 km/s, so d = 12 × 8.4 ≈ 101 km. This is the origin of the field rule of thumb "S−P seconds × 8 ≈ kilometres".

─────────────────────────────────
Lesson 4: Locating Earthquakes and Source Mechanisms
─────────────────────────────────

📌 Key idea of this section:

        t_{i}^{obs} = t₀ + T(x_{i}, x₀) + ε_{i}  →  linearise and solve  G Δm = Δt  by least squares

The location problem

Four unknowns define a hypocentre: origin time t₀ and the three coordinates of x₀. For each station i, the predicted arrival time is t₀ plus the travel time T calculated through a velocity model. Geiger (1910; 1912) introduced the iterative linearised approach still in use. Starting from a trial hypocentre, one computes the residuals Δt_{i} = t_{i}^{obs} − t_{i}^{pred} and the partial derivatives of T with respect to each hypocentral coordinate, then solves the overdetermined system G Δm = Δt in a least-squares sense and repeats until the solution converges. The model covariance (GᵀG)⁻¹σ² gives formal uncertainties. These usually underestimate the true error, because errors in the velocity model are systematic rather than random.

Several well-known trade-offs limit precision. Depth trades off against origin time when all stations are distant, because both shift arrivals almost uniformly. Depth is therefore best constrained by a station closer than about one focal depth, or by depth phases such as pP and sP for teleseismic events. An event outside the network, with a large azimuthal gap, is poorly located along the direction of the gap. Relative-location methods such as the double-difference algorithm (Waldhauser and Ellsworth, 2000) cancel most of the effect of unmodelled velocity structure by differencing arrival times of closely spaced events at common stations, often using waveform cross-correlation. They can sharpen diffuse clouds of seismicity into well-defined fault planes with errors of tens of metres. Machine-learning phase pickers trained on millions of labelled seismograms (for example PhaseNet and EQTransformer, both published in 2019–2020) now routinely expand catalogues by a factor of 10 or more.

The Wadati diagram

For a uniform V_{P}/V_{S} ratio, plotting the S−P time against the P arrival time at several stations gives a straight line, because t_{S} − t_{P} = (V_{P}/V_{S} − 1)(t_{P} − t₀). The slope gives V_{P}/V_{S} − 1, and the intercept on the time axis gives the origin time. Wadati introduced this diagram in the 1930s, and it remains a quick check on picks and on crustal Poisson's ratio.

Focal mechanisms and the moment tensor

The radiation pattern of a shear dislocation is a double couple. P-wave first motions are compressional in two opposite quadrants and dilatational in the other two, separated by two orthogonal nodal planes: the fault plane and the auxiliary plane. Plotting first-motion polarities on a lower-hemisphere projection produces the familiar "beach ball", which gives the faulting style and the P (compression) and T (tension) axes. Seismological data alone cannot decide which nodal plane is the fault. Aftershock alignments, surface rupture, geodesy or rupture directivity resolve this ambiguity.

The general point source is described by the symmetric seismic moment tensor M_{ij}. For a shear dislocation of area A and average slip D on a fault with normal n and slip direction s, M_{ij} = μAD(s_{i}n_{j} + s_{j}n_{i}). Since the Centroid Moment Tensor method of Dziewonski, Chou and Woodhouse (1981), long-period waveform inversion has produced moment tensors for essentially every global earthquake above about M5. The Global CMT catalogue begins in 1976. Non-double-couple components point to volcanic, geothermal or collapse sources, complex ruptures, or explosions, and are used in nuclear-test discrimination. Finite-fault inversions of seismic, geodetic and tsunami data now map slip distributions and rupture velocity within hours. Most ruptures propagate at 0.7–0.9 V_{S}. Some strike-slip ruptures, such as Kunlun 2001 and segments of Türkiye 2023, appear to have run at supershear speeds.

✏️ Your Turn

(a) Two stations record a local event. At station A, P arrives at 08:00:12.0 and S at 08:00:19.3. At station B, P arrives at 08:00:16.0 and S at 08:00:26.22. Construct the Wadati line and find V_{P}/V_{S} and the origin time.
(b) Using V_{P} = 6.0 km/s, how far is station A from the hypocentre?

Answers: (a) The S−P times are 7.30 s at A and 10.22 s at B. The slope is (10.22 − 7.30)/(16.0 − 12.0) = 0.73, so V_{P}/V_{S} = 1.73. S−P falls to zero at t_{P} = 12.0 − 7.30/0.73 = 12.0 − 10.0 = 2.0 s, so t₀ = 08:00:02.0. Station B gives the same result: 16.0 − 10.22/0.73 = 2.0 s. (b) The P travel time is 12.0 − 2.0 = 10.0 s, so d = 10.0 × 6.0 = 60 km.

─────────────────────────────────
Lesson 5: Magnitude, Seismic Moment and Energy
─────────────────────────────────

📌 Key idea of this section:

        M₀ = μ A D̄ ;   M_{w} = (2/3)(log₁₀ M₀ − 9.1)   with M₀ in N·m

Amplitude magnitudes

Richter (1935) defined local magnitude for southern California as the base-10 logarithm of the maximum trace amplitude, in millimetres, on a standard Wood–Anderson seismograph, corrected to a reference distance. An event that produces 1 mm at 100 km has M_{L} = 3. A modern calibration of the distance correction (Hutton and Boore, 1987) is

        M_{L} = log₁₀ A + 1.11 log₁₀(r/100) + 0.00189 (r − 100) + 3.0     (A in mm, r in km)

Gutenberg extended the concept to teleseismic distances. The body-wave magnitude m_{b} uses the amplitude-to-period ratio of P waves at about 1 s period. The surface-wave magnitude M_{s} uses Rayleigh waves at about 20 s period, and in the IASPEI "Prague" form (Vaněk et al., 1962) is

        M_{s} = log₁₀(A/T) + 1.66 log₁₀ Δ + 3.3     (A in μm, Δ in degrees, 20° ≤ Δ ≤ 160°)

All amplitude magnitudes saturate. Once the rupture is much longer than the wavelength being measured, the amplitude at that period stops growing. m_{b} saturates near 6–6.5, M_{s} near 8–8.5 and M_{L} near 6.5–7. The 1960 Chile earthquake had M_{s} ≈ 8.5 but released roughly two to four times more moment than any event recorded since.

Seismic moment and moment magnitude

Aki (1966) showed that the low-frequency level of the far-field displacement spectrum is proportional to the seismic moment M₀ = μAD̄, where μ is the rigidity (about 3 × 10¹⁰ Pa in the crust and 4–7 × 10¹⁰ Pa on deeper megathrusts), A is the rupture area and D̄ is the average slip. Moment is a physical measure of the size of the source that does not saturate. Kanamori (1977) and Hanks and Kanamori (1979) defined moment magnitude so as to match M_{s} and M_{L} in their unsaturated ranges. In the IASPEI standard form, with M₀ in N·m:

        M_{w} = (2/3)(log₁₀ M₀ − 9.1)

One unit of M_{w} corresponds to a factor of 10^{1.5} ≈ 31.6 in moment, and two units to a factor of 1,000. Representative values are given below.

        Event                          M₀ (N·m)          M_{w}
        Chile 1960                     ≈ 2 × 10²³        9.4–9.6
        Tōhoku 2011                    ≈ 4–5 × 10²²      9.0–9.1
        San Francisco 1906             ≈ 6–9 × 10²⁰      7.8–7.9
        Northridge 1994                ≈ 1.2 × 10¹⁹      6.7

Five great earthquakes, Chile 1960, Alaska 1964, Sumatra 2004, Tōhoku 2011 and Kamchatka 1952, account for roughly half of all seismic moment released since 1900.

The source spectrum, corner frequency and stress drop

In the ω² model (Aki, 1967; Brune, 1970), the far-field displacement spectrum is flat at a level proportional to M₀ below a corner frequency f_{c} and falls as f^{−2} above it. Brune related f_{c} to the radius of an equivalent circular source:

        r = 2.34 V_{S} / (2π f_{c}) ;    Δσ = 7 M₀ / (16 r³)

Because f_{c} enters as a cube, stress-drop estimates are uncertain by a factor of several. With constant stress drop, f_{c} scales as M₀^{−1/3}, so large earthquakes are relatively rich in long-period energy. This matters for tall buildings, long bridges and liquid sloshing in storage tanks.

Radiated energy

Gutenberg and Richter (1956) gave log₁₀ E (J) = 1.5 M_{s} + 4.8. The radiated energy E_{s} relates to moment through the scaled energy E_{s}/M₀, which is typically about 10⁻⁵ to 10⁻⁴. Kanamori (1977) used E_{s} ≈ M₀/(2 × 10⁴) = 5 × 10⁻⁵ M₀. The energy magnitude M_{e}, computed directly from broadband radiated energy, can differ from M_{w} by several tenths of a unit and is a better guide to damage potential at high frequencies. Radiated energy is only a fraction of the total work done during faulting. Most of the work goes into frictional heat and fracture energy, and the partitioning is a central research question.

✏️ Your Turn

(a) A Wood–Anderson instrument at r = 100 km records a maximum amplitude of 10 mm. What is M_{L}?
(b) A megathrust rupture is 400 km long and 200 km wide, with average slip 12 m and μ = 40 GPa. Compute M₀ and M_{w}.
(c) By what factor does the seismic moment of an M_{w} 9.1 earthquake exceed that of an M_{w} 7.8?
(d) An earthquake has M₀ = 1 × 10¹⁷ N·m and a corner frequency of 0.5 Hz, with V_{S} = 3.5 km/s. Find M_{w}, the Brune source radius and the stress drop.

Answers: (a) M_{L} = log₁₀ 10 + 0 + 0 + 3.0 = 4.0. (b) M₀ = 4 × 10¹⁰ × (4 × 10⁵ × 2 × 10⁵) × 12 = 3.84 × 10²² N·m; M_{w} = (2/3)(22.58 − 9.1) ≈ 9.0, comparable to Tōhoku. (c) 10^{1.5 × 1.3} = 10^{1.95} ≈ 89. Radiated energy scales by about the same factor, assuming similar scaled energy. (d) M_{w} = (2/3)(17 − 9.1) ≈ 5.3. r = 2.34 × 3,500 / (2π × 0.5) ≈ 2,610 m. Δσ = 7 × 10¹⁷ / (16 × 2,607³) ≈ 2.5 MPa, a typical value.

─────────────────────────────────
Lesson 6: Earthquake Statistics, Aftershocks and Forecasting
─────────────────────────────────

📌 Key idea of this section:

        log₁₀ N(≥M) = a − b M  (b ≈ 1) ;   n(t) = K / (t + c)^{p}  (p ≈ 1)

The Gutenberg–Richter law

Gutenberg and Richter (1944) found that the cumulative number of earthquakes with magnitude at least M follows log₁₀ N = a − bM. The b-value is close to 1 almost everywhere. Each step down of one magnitude unit therefore brings roughly ten times as many earthquakes, while each step up brings about 32 times more moment, so total moment release is dominated by the largest events. Long-term global averages are about 1 event per year of M ≥ 8, 15 of M 7–7.9, 130–150 of M 6–6.9 and 1,300–1,500 of M 5–5.9. The maximum-likelihood estimator of b (Aki, 1965, with Utsu's correction for binned magnitudes of width ΔM) is

        b = log₁₀ e / [ M̄ − (M_{c} − ΔM/2) ]

where M̄ is the mean magnitude of events at or above the completeness magnitude M_{c}. Determining M_{c} correctly is the most important practical step, because an incomplete catalogue biases b downwards. Systematic b-value variations have been linked to differential stress, with lower b at higher stress (Schorlemmer, Wiemer and Wyss, 2005). Whether b-value changes can be used for short-term forecasting remains contested. The distribution must taper or be truncated at some maximum magnitude, since moment release cannot be infinite, but M_{max} is poorly constrained for most faults.

Aftershocks

Omori (1894), studying the 1891 Nōbi earthquake, found that aftershock rates decay roughly as 1/t. Utsu (1961) generalised this to n(t) = K/(t + c)^{p}, with p typically 0.9–1.5. Båth's law states that the largest aftershock is typically about 1.2 magnitude units smaller than the mainshock, with considerable scatter. Combining Gutenberg–Richter and Omori–Utsu gives the Reasenberg and Jones (1989) model for the rate of aftershocks of magnitude at least M at time t after a mainshock of magnitude M_{m}:

        λ(t, M) = 10^{a′ + b(M_{m} − M)} (t + c)^{−p}

Its parameters, updated as the sequence evolves, underpin the operational aftershock forecasts issued by the USGS, New Zealand's GeoNet and others. The Epidemic-Type Aftershock Sequence (ETAS) model (Ogata, 1988) treats every earthquake as able to trigger its own offspring, with productivity rising exponentially with magnitude. It is the standard benchmark for short-term forecasting. Roughly 5 % of earthquakes are followed within days by a larger event in the same area, which makes them foreshocks in retrospect. No reliable way has been found to recognise foreshocks before the mainshock occurs.

Long-term forecasting

Time-independent (Poisson) forecasts give the probability of at least one event in time t as P = 1 − exp(−t/T), where T is the mean recurrence interval. Time-dependent renewal models, using Brownian Passage Time or lognormal distributions, raise or lower this probability according to the time elapsed since the last event. The Uniform California Earthquake Rupture Forecast (UCERF3; Field et al., 2014) combines fault-based and gridded seismicity models. It allows multi-fault ruptures, and its logic tree has thousands of branches. Companion versions add an elastic-rebound-based time dependence (2015) and ETAS-style spatiotemporal clustering (2017).

Prediction, in the sense of specifying time, place and magnitude narrowly enough to justify evacuation, has not been achieved. The 1975 Haicheng, China, evacuation, prompted by a foreshock sequence, is often cited, but it was not repeated: the 1976 Tangshan earthquake struck without a short-term warning. Proposed precursors such as radon emissions, electromagnetic signals, animal behaviour and seismic velocity changes have not survived prospective statistical testing. Prospective testing centres such as the Collaboratory for the Study of Earthquake Predictability (CSEP) now evaluate forecasts against future data. The 2009 L'Aquila case, in which six scientists and an official were convicted of manslaughter in 2012 over risk communication before an M_{w} 6.3 earthquake that killed 309 people, with the six scientists acquitted on appeal in 2014, showed how difficult it is to communicate low-probability, high-consequence forecasts.

Induced seismicity

Human activity also triggers earthquakes. Mechanisms include fluid injection, which raises pore pressure, as well as reservoir impoundment, mining and gas extraction. Wastewater disposal drove Oklahoma's seismicity from about one or two M ≥ 3 events per year before 2009 to more than 900 in 2015, culminating in the M_{w} 5.8 Pawnee earthquake of 3 September 2016. Other examples are the 2017 M_{w} 5.5 Pohang earthquake in South Korea, linked to an enhanced geothermal project, and decades of induced earthquakes in the Groningen gas field in the Netherlands. These led to new regulatory "traffic-light" protocols.

✏️ Your Turn

(a) A region with b = 1 records on average 10 earthquakes of M ≥ 5 per year. What is the annual rate of M ≥ 7, and the Poisson probability of at least one M ≥ 7 in 50 years? Repeat for a region with 1 event of M ≥ 5 per year.
(b) For an aftershock sequence with K = 100 per day, c = 0.05 day and p = 1, how many aftershocks are expected between day 1 and day 10?
(c) A catalogue complete above M_{c} = 2.0, with magnitudes reported to 0.1, has a mean magnitude of 2.40. Estimate b.

Answers: (a) Rate(M ≥ 7) = 10 × 10^{−2} = 0.1 per year, and P(50 yr) = 1 − e^{−5} ≈ 0.993. With 1 event of M ≥ 5 per year the rate is 0.01 per year, and P = 1 − e^{−0.5} ≈ 0.39. (b) N = K ln[(10 + c)/(1 + c)] = 100 ln(10.05/1.05) ≈ 100 × 2.259 ≈ 226. (c) b = 0.4343 / [2.40 − (2.0 − 0.05)] = 0.4343/0.45 ≈ 0.97. Without the binning correction, the estimate would be 0.4343/0.40 ≈ 1.09.

─────────────────────────────────
Lesson 7: Strong Ground Motion, Site Effects and Intensity
─────────────────────────────────

📌 Key idea of this section:

        A(f, r) ∝ S(f) · G(r) · exp[−π f r / (Q V_{S})] · Site(f) ;   f₀ = V_{S} / (4H)

Measures of ground motion

Engineers characterise shaking by peak ground acceleration (PGA), peak ground velocity (PGV) and peak ground displacement, by duration (for example the significant duration between 5 % and 95 % of Arias intensity) and, above all, by the response spectrum. The response spectrum is the peak response of a damped (usually 5 %) single-degree-of-freedom oscillator as a function of its natural period. The pseudo-spectral acceleration PSA(T) is what most building codes specify. The highest PGAs recorded exceed 2–4 g, for example about 2.7 g at Tsukidate during Tōhoku 2011 and about 1.8 g at Tarzana during Northridge 1994. Near-fault records often contain long-period velocity pulses of 1–2 m/s, caused by forward rupture directivity or by permanent fault displacement (fling step), and these are particularly damaging to flexible structures.

Ground-motion models

Ground-motion models (GMMs), also called ground-motion prediction equations, are regressions of large strong-motion databases, such as NGA-West2 with more than 20,000 records. They predict the median and the lognormal standard deviation of an intensity measure as a function of magnitude, distance, faulting style, the time-averaged shear-wave velocity in the top 30 m (V_{S30}) and basin depth. A generic form is

        ln Y = f₁(M) + f₂(M) ln √(R² + h²) + f₃ R + f_{site}(V_{S30}) + ε σ_{ln Y}

The total standard deviation σ_{ln Y} is typically 0.5–0.7. This aleatory scatter, corresponding to a factor of about 2 at one standard deviation, is a dominant contributor to hazard at long return periods. Attenuation combines geometric spreading with anelastic loss, described by the quality factor Q, which is frequency-dependent and often written Q(f) = Q₀f^{η}. Near-site high-frequency loss is parameterised by κ, with spectral decay ∝ exp(−πκf). Stable continental regions such as eastern North America have high Q, so a given magnitude is felt over areas several times larger than in California.

Site amplification and basins

Seismic waves slow down as they enter soft near-surface layers. Conservation of energy flux then makes the amplitude grow roughly as the square root of the impedance ratio (ρV_{S}) between rock and soil, and resonance develops at the fundamental frequency f₀ = V_{S}/(4H) of a soft layer of thickness H. Sedimentary basins trap and focus surface waves, which lengthens the shaking. Building-code site classes follow V_{S30}: in ASCE 7-16, class A is above 1,500 m/s, B is 760–1,500, C is 360–760, D is 180–360 and E is below 180 m/s, with class F reserved for liquefiable or sensitive soils. ASCE 7-22 adds intermediate classes. At high strains, soil behaves nonlinearly: stiffness drops and damping rises, so amplification of strong shaking is less than linear theory predicts and resonance shifts to longer periods. Mexico City in 1985, where lake clays with V_{S} of only about 50–80 m/s amplified 2-second motions by large factors, is the classic example (see Case Studies).

Macroseismic intensity

Intensity scales classify the effects of shaking on people, objects and buildings at a given place. The Modified Mercalli Intensity scale (Wood and Neumann, 1931), with Roman numerals I–XII, is used in the Americas. The European Macroseismic Scale EMS-98 (Grünthal, 1998) explicitly accounts for building vulnerability classes and damage grades. The Japan Meteorological Agency scale (shindo) has ten levels, from 0 to 7 with 5 and 6 each divided into lower and upper, and has been computed instrumentally since 1996. Intensity is essential for historical earthquakes, where it is the only data, and for communicating with the public. Ground-motion-to-intensity conversion equations (for example Worden et al., 2012) link MMI to PGA and PGV. Crowd-sourced reports such as the USGS "Did You Feel It?" system now yield thousands of intensity observations within minutes. The USGS ShakeMap and PAGER systems combine instrumental, macroseismic and predicted data to estimate shaking, exposed population and likely fatalities within about 30 minutes of a significant earthquake.

✏️ Your Turn

(a) A lake-clay deposit is 40 m thick with V_{S} = 70 m/s over stiff material. Estimate its fundamental frequency and period, and suggest which building heights are most at risk (a rule of thumb for fundamental period is T ≈ 0.1 N seconds for an N-storey building).
(b) Calculate the anelastic attenuation factor exp[−πfr/(QV_{S})] for f = 5 Hz, r = 100 km, Q = 500 and V_{S} = 3.5 km/s.

Answers: (a) f₀ = 70/(4 × 40) ≈ 0.44 Hz, so T₀ ≈ 2.3 s. By the rule of thumb, buildings of roughly 15–25 storeys have T ≈ 1.5–2.5 s and could resonate. In practice, strong shaking lengthens building periods as stiffness degrades, so in Mexico City in 1985 the worst damage was in buildings of roughly 6–15 storeys, whose softened periods moved towards 2 s. (b) The exponent is π × 5 × 100/(500 × 3.5) ≈ 0.90, so the factor is e^{−0.90} ≈ 0.41. About 60 % of the 5 Hz amplitude is lost to anelasticity, in addition to geometric spreading.

─────────────────────────────────
Lesson 8: Liquefaction, Landslides and Other Collateral Hazards
─────────────────────────────────

📌 Key idea of this section:

        CSR = 0.65 (a_{max}/g)(σ_{v}/σ_{v}′) r_{d} ;   FS = CRR / CSR

Liquefaction mechanics

Cyclic shear of loose, saturated, cohesionless soil causes the grains to try to contract. Because the shaking is too fast for water to drain, pore pressure rises instead. As effective stress approaches zero the soil loses strength and stiffness. The consequences include sand boils, settlement, flotation of buried tanks and pipes, bearing failure of foundations, and lateral spreading of gently sloping ground towards free faces such as rivers and quay walls. Liquefaction was recognised as a major engineering hazard after the 1964 Niigata (Japan) and Alaska earthquakes. At Niigata, apartment buildings of the Kawagishi-chō complex tilted bodily on liquefied sand while remaining structurally almost intact. Later examples include the port of Kobe in 1995, Christchurch in 2010–2011, where repeated liquefaction damaged tens of thousands of residential properties and led to the abandonment of some 7,000–8,000 properties in the eastern "red zone", and Urayasu in Tokyo Bay in 2011.

The simplified procedure

The Seed and Idriss (1971) "simplified procedure" compares the cyclic stress ratio (CSR) imposed by the earthquake with the soil's cyclic resistance ratio (CRR):

        CSR = 0.65 (a_{max} / g)(σ_{v} / σ_{v}′) r_{d}
        r_{d} ≈ 1 − 0.00765 z     (z ≤ 9.15 m)

CRR is obtained from empirical correlations with standard penetration test blow counts, cone penetration resistance or shear-wave velocity. These correlations are calibrated on case histories of liquefaction and non-liquefaction for an M 7.5 earthquake, and magnitude scaling factors adjust them for other magnitudes to account for the number of loading cycles (Youd et al., 2001; Idriss and Boulanger, 2008). A factor of safety FS = CRR/CSR below about 1 indicates likely triggering. Mitigation methods include densification by vibro-compaction or dynamic compaction, drainage with stone columns, grouting and deep soil mixing, and deep foundations that bear on non-liquefiable strata.

Earthquake-induced landslides

Strong shaking in steep terrain can trigger tens of thousands of landslides. The 2008 Wenchuan earthquake (M_{w} 7.9) triggered tens of thousands, with inventories ranging from about 60,000 to nearly 200,000, and they caused a substantial fraction of the approximately 87,000 dead and missing. Landslide dams, such as the Tangjiashan dam of 2008 and the Riñihue lake blockage after Chile 1960, can cause floods weeks later. Newmark's (1965) sliding-block analysis treats a potential slide as a rigid block on an inclined plane that moves whenever ground acceleration exceeds a critical (yield) acceleration a_{c}. Displacement is accumulated by double-integrating the excess acceleration. Regressions of Newmark displacement on Arias intensity and a_{c} are used in regional landslide hazard mapping.

Surface rupture, tsunami and fire

Surface fault rupture can offset buildings, pipelines and transport lines by metres: up to about 7–8 m in Türkiye in 2023 and about 10 m locally at Chi-Chi (Taiwan) in 1999. It is managed mainly by setback zoning, as under California's 1972 Alquist–Priolo Act. Tsunamis are generated chiefly by coseismic vertical seafloor displacement on megathrusts, and sometimes by submarine landslides. Tsunamis account for most deaths in great subduction earthquakes, notably about 230,000 in the 2004 Indian Ocean disaster. Fire following earthquake, fed by broken gas lines and suppressed by broken water mains, destroyed most of San Francisco in 1906 and caused most of the more than 100,000 deaths in the 1923 Kantō earthquake around Tokyo and Yokohama. It remains a major loss driver in modern urban scenarios.

✏️ Your Turn

(a) A saturated sand layer at z = 6 m lies below a water table at 2 m depth. The unit weight is 19 kN/m³ above and below the water table and γ_{w} = 9.81 kN/m³. For a_{max} = 0.30 g, compute σ_{v}, σ_{v}′, r_{d} and CSR.
(b) If penetration tests give CRR = 0.20 (already adjusted to the design magnitude), what is the factor of safety, and what do you conclude?

Answers: (a) σ_{v} = 19 × 6 = 114 kPa. The pore pressure is u = 9.81 × 4 = 39.2 kPa, so σ_{v}′ = 74.8 kPa. r_{d} = 1 − 0.00765 × 6 = 0.954. CSR = 0.65 × 0.30 × (114/74.8) × 0.954 ≈ 0.284. (b) FS = 0.20/0.284 ≈ 0.70 < 1, so liquefaction is likely. Ground improvement or deep foundations would be required.

─────────────────────────────────
Lesson 9: Probabilistic Seismic Hazard and Risk
─────────────────────────────────

📌 Key idea of this section:

        λ(IM > x) = Σ_{i} ν_{i} ∫∫ P(IM > x | m, r) f_{M}(m) f_{R}(r) dm dr ;   P(t) = 1 − e^{−λt}

The Cornell–McGuire framework

Probabilistic seismic hazard analysis (PSHA), introduced by Cornell (1968) and implemented in widely used codes by McGuire, integrates over every possible earthquake. Each seismic source i, whether a fault or an areal zone, has an annual rate ν_{i} of events above a minimum magnitude. A magnitude distribution f_{M}, usually truncated Gutenberg–Richter or characteristic, and a source-to-site distance distribution f_{R} describe its earthquakes. A ground-motion model supplies the conditional probability that the intensity measure exceeds x, including its aleatory scatter. The result is a hazard curve, the annual rate of exceeding each level of PGA or spectral acceleration. Under the Poisson assumption, a probability of exceedance P in an exposure time t corresponds to a return period T = −t/ln(1 − P). The conventional design levels of 10 % and 2 % in 50 years correspond to return periods of about 475 and 2,475 years.

Uncertainty, logic trees and deaggregation

Aleatory variability, the inherent randomness such as ground-motion scatter, is integrated within each hazard calculation. Epistemic uncertainty, meaning incomplete knowledge of models and parameters such as M_{max}, recurrence models, GMM choice and fault segmentation, is represented by logic trees. Each alternative model is assigned a weight, producing a distribution of hazard curves that is reported as a mean and fractiles. Deaggregation decomposes the hazard at a given return period into contributions by magnitude, distance and ε, identifying the controlling earthquakes. These are used to select records for dynamic analysis, through the conditional mean spectrum. Large modern models include the US National Seismic Hazard Model (updated in 2018 and 2023), the 2020 European Seismic Hazard Model (ESHM20), Japan's J-SHIS maps and the Global Earthquake Model (GEM) global hazard and risk mosaics.

Critiques and testing

PSHA has been criticised. Some deterministic scenario-based advocates argue that its integration over many unlikely events hides the worst credible case. Others note that several recent destructive earthquakes, such as Wenchuan 2008, Christchurch 2011 and Tōhoku 2011, produced shaking well beyond mapped values at those sites (Stein, Geller and Liu, 2012). The counter-argument is that a probabilistic map is expected to be exceeded somewhere, and that the right test is the statistical consistency of many sites over time. Precarious rocks and other fragile geological features provide an independent upper limit on ground motions over thousands of years, and have been used to reject some high-hazard branches of logic trees.

From hazard to risk

Risk combines hazard with exposure and vulnerability. Fragility functions give the probability of reaching or exceeding a damage state as a lognormal function of an intensity measure: P(DS ≥ ds | IM = x) = Φ[ln(x/θ)/β], with median θ and dispersion β typically 0.4–0.8. Loss models such as FEMA's Hazus, the FEMA P-58 performance-based methodology and GEM's OpenQuake convolve hazard curves with fragility and consequence functions to estimate annualised losses, casualties and downtime. These estimates feed insurance and catastrophe bonds, parametric cover such as the Caribbean Catastrophe Risk Insurance Facility (CCRIF) and the Turkish Catastrophe Insurance Pool (TCIP), and cost–benefit analysis of retrofit programmes.

✏️ Your Turn

(a) Show that "10 % in 50 years" and "2 % in 50 years" correspond to return periods of about 475 and 2,475 years.
(b) A site's hazard curve gives an annual exceedance rate of 0.002 for PGA = 0.4 g. What is the probability that 0.4 g is exceeded during a 50-year building life?
(c) A building type has a collapse fragility with median 1.5 g (in spectral acceleration) and β = 0.6. What is the probability of collapse given a spectral acceleration of 0.75 g? (Φ(−1.155) ≈ 0.124.)

Answers: (a) T = −50/ln(0.90) = 50/0.1054 ≈ 474.6 yr, and T = −50/ln(0.98) = 50/0.0202 ≈ 2,475 yr. (b) P = 1 − e^{−0.002 × 50} = 1 − e^{−0.1} ≈ 0.095, or about 9.5 %. (c) ln(0.75/1.5)/0.6 = −0.693/0.6 ≈ −1.155, so P ≈ 0.12, or about 12 %.

─────────────────────────────────
Lesson 10: Earthquake Engineering, Early Warning and Risk Reduction
─────────────────────────────────

📌 Key idea of this section:

        T = 2π √(m/k) ;   V = C_{s} W ,  C_{s} = S_{DS} / (R / I_{e})   (ASCE 7 equivalent lateral force)

Structural dynamics

A building's response to shaking depends on how its natural periods relate to the spectral content of the ground motion. For a single-degree-of-freedom oscillator, T = 2π√(m/k). Stiff low-rise masonry has T ≈ 0.1–0.3 s and responds to the high-frequency shaking that dominates near moderate earthquakes. Tall buildings with T of several seconds respond to the long-period waves of large, distant earthquakes and basins. Damping, usually assumed to be 5 % of critical, limits resonant amplification. Chopra (2017) gives the full multi-degree-of-freedom theory.

Ductility and capacity design

Designing ordinary buildings to stay elastic under rare earthquakes would be uneconomic. Codes instead allow controlled inelastic deformation. The elastic design force is reduced by a response modification factor R, up to 8 for ductile steel or reinforced-concrete moment frames, and the structure must be detailed to deform many times its yield displacement without losing strength. Capacity design, developed in New Zealand by Park and Paulay in the 1970s, places the fuses deliberately. Beams are designed to yield before columns ("strong column, weak beam"), and shear and connection failures are suppressed by designing them for the overstrength of the yielding members. Collapses have repeatedly revealed weak links in older types of construction:

  1. Non-ductile reinforced-concrete frames with widely spaced ties, and "soft" or weak ground storeys used for parking or shops (Kocaeli 1999, Christchurch 2011, Türkiye 2023).
  2. Welded steel moment-frame connections, which fractured brittlely in Northridge 1994 and led to the SAC Steel Project and new connection designs.
  3. Unreinforced masonry and adobe, which cause many of the deaths in developing regions (Bam, Iran, 2003: about 26,000–31,000 deaths).
  4. Bridge columns with inadequate confinement (Loma Prieta 1989, Northridge 1994, Kobe 1995).

Codes and their evolution

Modern codes, such as ASCE 7 and the International Building Code in the United States, Eurocode 8, the Japanese Building Standard Law as revised in 1981 ("shin-taishin"), Türkiye's 2018 code and NZS 1170.5, specify spectra from PSHA maps and require ductile detailing. Their objective for ordinary buildings is life safety rather than damage prevention: a code-compliant building may be unusable after a design-level earthquake. Performance-based design, in documents such as FEMA P-58, and "functional recovery" goals aim to quantify and reduce downtime. Retrofit of existing vulnerable stock is now the dominant problem worldwide. California's programmes for unreinforced masonry and soft-story wood buildings in Los Angeles and San Francisco, and Japan's seismic diagnosis and retrofit of pre-1981 schools, are notable successes. Many countries still have weak enforcement, which is the decisive factor in fatalities.

Protective systems

Base isolation decouples the structure from the ground with elastomeric or friction-pendulum bearings. This lengthens the fundamental period to about 2–4 s, away from the energy-rich short periods, and concentrates displacement in the isolation layer. Supplemental dampers, including viscous, friction and buckling-restrained braces, and tuned mass dampers further reduce response. Isolated hospitals performed well in Northridge 1994, Tōhoku 2011 and Türkiye 2023. Japan has several thousand isolated buildings.

Earthquake early warning

Earthquake early warning (EEW) exploits the speed difference between electronic signals and seismic waves, and between P and S waves. Stations near the epicentre detect the P wave, estimate location and magnitude within seconds, and broadcast alerts before the strong S and surface waves arrive farther away. Operational systems include Mexico's SASMEX (operating since 1991 for Mexico City), Japan's JMA system (public alerts since October 2007), Taiwan's, South Korea's and the US ShakeAlert system (public alerts in California from 2019, and in Oregon and Washington from 2021). Smartphone-based systems, such as Google's Android earthquake alerts, now reach many countries. Close to the epicentre there is a "blind zone" where the S wave arrives before the alert. Great earthquakes are hard to characterise quickly because their ruptures are still growing when the first alert is issued: on Tōhoku 2011 the first magnitude estimates were well below 9. Finite-fault algorithms and real-time GNSS help to overcome this. Warning times are typically a few seconds to a few tens of seconds. That is enough to stop trains (Japan's Shinkansen has used automatic seismic braking since the 1990s), open fire-station doors, halt surgery and elevators, and let people drop, cover and hold on, although Allen and Melgar (2019) note that the benefits depend strongly on public education and automated actions.

✏️ Your Turn

(a) A single-storey structure has an effective mass of 500 t and lateral stiffness 200 MN/m. What is its natural period?
(b) A ductile frame building weighs W = 20,000 kN at a site with S_{DS} = 1.0 g, R = 8 and I_{e} = 1.0. Find the design base shear (ignoring upper and lower bounds on C_{s}).
(c) An EEW system issues an alert 10 s after the origin time of a 10-km-deep earthquake, including 2 s for delivery. How much warning does a city at 100 km hypocentral distance receive if V_{S} = 3.5 km/s, and what is the epicentral radius of the blind zone?

Answers: (a) T = 2π√(5 × 10⁵ / 2 × 10⁸) = 2π × 0.05 ≈ 0.31 s. (b) C_{s} = 1.0/(8/1.0) = 0.125, so V = 0.125 × 20,000 = 2,500 kN. (c) The S wave arrives at 100/3.5 ≈ 28.6 s, so the warning time is 28.6 − 10 ≈ 18.6 s. The S wave has travelled 3.5 × 10 = 35 km of hypocentral distance by 10 s, so the blind zone extends to an epicentral distance of √(35² − 10²) ≈ 33.5 km.

═════════════════════════════════════════════
Case Studies
═════════════════════════════════════════════

The following case studies trace how specific earthquakes advanced the science and changed practice. Death tolls are often uncertain, especially for historical events and for disasters in states with weak record-keeping or politically sensitive counts, so ranges are given.

1755 Lisbon, Portugal — the first modern disaster

On the morning of 1 November 1755, All Saints' Day, a great earthquake struck offshore of southwest Iberia. Its magnitude is estimated at about M_{w} 8.5–9.0 from intensity data and tsunami observations. The source is still debated: candidates include the Gorringe Bank, the Marquês de Pombal and Horseshoe thrust faults, and an incipient subduction zone beneath the Gulf of Cadiz. Shaking lasted several minutes and destroyed much of Lisbon. A tsunami about 30–40 minutes later, with heights of roughly 5–15 m along the Portuguese and Moroccan coasts, swept the Tagus waterfront, and fires burned for about five days. Estimates of deaths in Lisbon range from about 20,000 to 50,000 or more, with additional thousands in Spain and Morocco. Older figures of 60,000–100,000 are probably too high, but the uncertainty is large.

The disaster was intellectually transformative. It provoked Voltaire's "Poème sur le désastre de Lisbonne" (1756) and "Candide" (1759) and wider debate on optimism and theodicy. The chief minister, later the Marquis of Pombal, sent a questionnaire to every parish asking about the duration of shaking, aftershocks, the behaviour of wells and the damage. This is often called the first systematic macroseismic survey. The rebuilt Baixa district introduced the "gaiola pombalina", a timber cage braced with diagonal members inside masonry walls, which is regarded as one of the first engineered earthquake-resistant building systems. John Michell (1760) proposed that earthquakes are waves propagating through the Earth and attempted to locate the source from arrival times.

1906 San Francisco, California — elastic rebound

At 05:12 local time on 18 April 1906, the northern San Andreas Fault ruptured over about 470 km, from near San Juan Bautista to Cape Mendocino. The earthquake is estimated at M_{w} 7.8–7.9, with right-lateral offsets of 4–6 m in Marin County. The shaking lasted about 45–60 seconds in San Francisco. Damage was greatest on filled marshland and former bay margins, an early observation of site effects. Broken gas mains started fires, broken water mains disabled fire-fighting, and the fires burned for three days, consuming about 28,000 buildings over roughly 490 city blocks. More than half of the population of about 400,000 was made homeless. The official death toll of about 375–500 was later shown to be a substantial undercount. Modern research suggests around 3,000 or more deaths.

The State Earthquake Investigation Commission under Andrew Lawson published a landmark report (Lawson et al., 1908), mapping the rupture and collecting intensity data. Its second volume contained Reid's elastic-rebound theory (Reid, 1910). The 1906 earthquake also yielded some of the first useful teleseismic records, and it remains the reference scenario for hazard planning in the San Francisco Bay Area. Today the USGS estimates a 72 % probability of at least one M ≥ 6.7 earthquake in the region between 2014 and 2043 (UCERF3).

1960 Valdivia, Chile — the largest earthquake recorded

On 22 May 1960 at 15:11 local time (19:11 UTC), the Nazca–South America megathrust ruptured over about 800–1,000 km of southern Chile. A sequence of strong foreshocks had begun the previous day, including an event of about M 8 near Concepción. The seismic moment, about 2 × 10²³ N·m, gives M_{w} ≈ 9.5 (Kanamori, 1977). Estimates range from 9.4 to 9.6, and the average slip was some 20 m or more. Coastal land subsided by up to about 2 m around Valdivia, permanently drowning farmland and forests, while offshore islands rose. Death tolls are uncertain, from about 1,000 to over 6,000; a figure of around 1,655 is often cited. The Pacific-wide tsunami killed 61 people in Hilo, Hawaii, about 15 hours later and about 140 in Japan about 22 hours later. The Cordón Caulle volcano erupted two days after the mainshock, and landslides dammed the outlet of Lake Riñihue, threatening Valdivia until engineers lowered the dam.

Scientifically, the earthquake produced the first clear observations of the Earth's free oscillations, including the gravest modes with periods near 54 minutes, which provided powerful new constraints on Earth structure. Together with Plafker's (1965) mapping of coseismic uplift and subsidence after the 1964 Alaska earthquake (M_{w} 9.2, 131 deaths, most from tsunamis), it established that great earthquakes are ruptures of gently dipping subduction megathrusts. The tsunami also prompted the creation in 1965 of the international Pacific Tsunami Warning System, coordinated through UNESCO's Intergovernmental Oceanographic Commission.

1985 Michoacán and Mexico City — site amplification

On 19 September 1985 at 07:17 local time, an M_{w} 8.0 subduction earthquake occurred off the Pacific coast of Michoacán. An M_{w} 7.5–7.6 aftershock followed the next evening. Damage near the coast was moderate. In Mexico City, however, about 350–400 km away, hundreds of buildings collapsed and thousands more were damaged. The official death toll was about 5,000–10,000, and some unofficial estimates are much higher.

The explanation lies in the city's geology. Much of central Mexico City is built on soft lacustrine clays of the former Lake Texcoco, tens of metres thick, with very high water content and V_{S} of only about 50–80 m/s. At the SCT station in the lake zone, PGA reached about 0.16–0.17 g with nearly harmonic motion at a dominant period of about 2 s and a long duration. At the University (UNAM) station on hill-zone rock, PGA was only about 0.03–0.04 g, so spectral amplification at 2 s exceeded a factor of 10. Buildings of roughly 6–15 storeys, whose periods were lengthened towards 2 s by softening during shaking, suffered most. The disaster led to a revised building code in 1987, microzonation of the city into hill, transition and lake zones with separate design spectra, and the creation of the Seismic Alert System (SASMEX), which began operating in 1991. On the anniversary, 19 September 2017, an M_{w} 7.1 intraslab earthquake near Puebla killed about 370 people. That event was much closer, and caused shorter-period damage concentrated in the transition zone.

1995 Kobe (Hyōgo-ken Nanbu), Japan — a modern city at close range

At 05:46 local time on 17 January 1995, an M_{w} 6.9 (JMA magnitude 7.3) strike-slip earthquake ruptured the Nojima fault on Awaji Island and faults beneath the city of Kobe. Forward directivity produced near-fault velocity pulses exceeding 1 m/s and PGA of about 0.8 g at the JMA Kobe station. Shaking reached JMA intensity 7 in a narrow belt, the first time that level had been assigned. Some 6,434 people died. Most were crushed in older wooden houses with heavy tile roofs, or in pre-1981 non-ductile concrete buildings. More than 100,000 buildings were destroyed. Spectacular failures included the toppling of a 635 m section of the elevated Hanshin Expressway and liquefaction and lateral spreading of the reclaimed Port Island and Rokko Island, which crippled what had been one of the world's busiest container ports. Fires, especially in Nagata Ward, destroyed several thousand more buildings. Direct losses were about 10 trillion yen, roughly US$100 billion at the time.

Kobe drove major reforms. Japan built the dense K-NET strong-motion and Hi-net borehole networks (from 1996), creating some of the densest seismic networks in the world, which later enabled the national EEW system. It also established the Headquarters for Earthquake Research Promotion and began national probabilistic hazard maps. The earthquake accelerated retrofit of pre-1981 buildings, revised bridge design standards, and led to the construction of the E-Defense full-scale shake table, the world's largest. It also transformed volunteerism and disaster management in Japan.

2010 Haiti — vulnerability as the decisive factor

On 12 January 2010 at 16:53 local time, an M_{w} 7.0 earthquake struck at about 13 km depth, roughly 25 km west-southwest of Port-au-Prince. It was initially attributed to the Enriquillo–Plantain Garden fault zone, but geodetic and geological studies showed that most slip occurred on a previously unmapped, blind oblique-reverse fault (the Léogâne fault) with no surface rupture. Shaking in Port-au-Prince was probably around MMI VIII–IX. The death toll is highly uncertain and politically contested. The Haitian government's figure rose to about 316,000, while independent survey-based estimates range from roughly 46,000–85,000 to about 160,000. An estimated 1.5 million people were displaced. The capital's building stock consisted largely of poorly confined concrete-block masonry with heavy concrete floors and no enforced code.

Haiti illustrates that risk is controlled by vulnerability and exposure more than by magnitude. The 2010 Chile earthquake six weeks later released roughly 500 times more moment (M_{w} 8.8) but killed about 525 people. Historical records show destructive earthquakes in the same region in 1751 and 1770, yet the long quiet interval had erased institutional memory. Recovery was hampered by the destruction of government capacity and by a cholera epidemic, introduced in October 2010 by United Nations peacekeepers, that killed about 10,000 people. Rapid post-event remote sensing, crowd-mapping (OpenStreetMap) and the USGS PAGER system came of age during the response.

2011 Tōhoku-oki, Japan — the unexpected giant

At 14:46 JST on 11 March 2011, the megathrust between the subducting Pacific plate and the Okhotsk (or North American) plate off northeast Honshu ruptured over about 400–500 km along strike and about 200 km down dip, producing an M_{w} 9.0–9.1 earthquake. Slip near the trench reached about 50 m or more, far beyond what earlier models of the Japan Trench had allowed. National hazard assessments had anticipated M 7.5–8.2 events on individual segments (Simons et al., 2011). The coastal GNSS station at Oshika moved about 5.3 m east-southeast and subsided about 1.2 m. The resulting tsunami reached a maximum run-up of about 40 m at Miyako and overtopped many seawalls designed for smaller events. About 15,900 people died and about 2,500 remain missing. Including disaster-related deaths, the total exceeds 22,000. The tsunami caused the meltdowns at Fukushima Daiichi nuclear power plant, and total economic losses were on the order of US$200–300 billion, the costliest natural disaster on record at the time.

Japan's EEW system issued a public alert about 8 s after the first P detection, giving roughly 15–30 s of warning in much of the Tōhoku region. Because the rupture was treated as a much smaller point source, the predicted shaking in the Kantō region was too low and no public alert was issued for Tokyo. No passenger-carrying Shinkansen train derailed. The initial magnitude estimate (M 7.9), however, led to tsunami warnings that were too low in the first critical minutes. Sedimentary evidence of the AD 869 Jōgan tsunami had indicated that comparable events had happened before. The lessons were that hazard models must consider rupture of multiple segments and the shallow, near-trench part of the megathrust, and that palaeo-tsunami and geodetic evidence must be weighted properly. After the disaster, Japan deployed the S-net and DONET seafloor cabled observatories.

2023 Kahramanmaraş, Türkiye–Syria — a multi-fault doublet

On 6 February 2023 at 04:17 local time (01:17 UTC), an M_{w} 7.8 earthquake nucleated on the Narlı splay and propagated onto the East Anatolian Fault. It ruptured roughly 300–350 km of the fault with left-lateral surface offsets of up to about 7–8 m. About nine hours later, at 13:24 local time, an M_{w} 7.5–7.7 earthquake ruptured the separate Çardak–Sürgü fault system to the north for some 150 km. Parts of the first rupture may have propagated at supershear speeds. Strong-motion records exceeded 1 g in several cities. More than 50,000 people died in Türkiye and about 6,000–8,500 in Syria. Hundreds of thousands of buildings were destroyed or damaged beyond repair across 11 Turkish provinces. The World Bank estimated direct physical damage in Türkiye at about US$34 billion, and Turkish government estimates of total cost exceeded US$100 billion.

Many collapsed buildings had been constructed after the 1999 Kocaeli (İzmit) earthquake prompted code reforms, and some had benefited from construction amnesties that legalised non-compliant buildings. Investigations pointed to poor concrete quality, inadequate transverse reinforcement, soft storeys and weak enforcement, while buildings designed and built to the 2018 code generally performed well. The sequence demonstrated the importance of multi-fault rupture scenarios, the potential for a second large shock to strike within hours, and the gulf between code provisions and their implementation. In north-western Syria, where conflict had already degraded infrastructure, international aid was severely delayed. Coulomb stress analyses suggested that the first event loaded the fault of the second. The sequence is now one of the best-instrumented large continental strike-slip events, with dense strong-motion, InSAR and optical image correlation data.

═════════════════════════════════════════════
References
═════════════════════════════════════════════

  1. Aki, K. (1966). Generation and propagation of G waves from the Niigata earthquake of June 16, 1964. Part 2: Estimation of earthquake moment, released energy, and stress-strain drop from the G wave spectrum. Bulletin of the Earthquake Research Institute, University of Tokyo, 44, 73–88.
  2. Aki, K. and Richards, P. G. (2002). Quantitative Seismology, 2nd edition. University Science Books.
  3. Allen, R. M. and Melgar, D. (2019). Earthquake early warning: advances, scientific challenges, and societal needs. Annual Review of Earth and Planetary Sciences, 47, 361–388.
  4. Brune, J. N. (1970). Tectonic stress and the spectra of seismic shear waves from earthquakes. Journal of Geophysical Research, 75, 4997–5009.
  5. Byerlee, J. (1978). Friction of rocks. Pure and Applied Geophysics, 116, 615–626.
  6. Chopra, A. K. (2017). Dynamics of Structures: Theory and Applications to Earthquake Engineering, 5th edition. Pearson.
  7. Cornell, C. A. (1968). Engineering seismic risk analysis. Bulletin of the Seismological Society of America, 58, 1583–1606.
  8. Dieterich, J. H. (1979). Modeling of rock friction: 1. Experimental results and constitutive equations. Journal of Geophysical Research, 84, 2161–2168.
  9. Dziewonski, A. M. and Anderson, D. L. (1981). Preliminary reference Earth model. Physics of the Earth and Planetary Interiors, 25, 297–356.
  10. Field, E. H. et al. (2014). Uniform California Earthquake Rupture Forecast, Version 3 (UCERF3) — The time-independent model. Bulletin of the Seismological Society of America, 104, 1122–1180.
  11. Gutenberg, B. and Richter, C. F. (1944). Frequency of earthquakes in California. Bulletin of the Seismological Society of America, 34, 185–188.
  12. Hanks, T. C. and Kanamori, H. (1979). A moment magnitude scale. Journal of Geophysical Research, 84, 2348–2350.
  13. Kanamori, H. (1977). The energy release in great earthquakes. Journal of Geophysical Research, 82, 2981–2987.
  14. King, G. C. P., Stein, R. S. and Lin, J. (1994). Static stress changes and the triggering of earthquakes. Bulletin of the Seismological Society of America, 84, 935–953.
  15. Kramer, S. L. (1996). Geotechnical Earthquake Engineering. Prentice Hall.
  16. Lawson, A. C. et al. (1908). The California Earthquake of April 18, 1906: Report of the State Earthquake Investigation Commission. Carnegie Institution of Washington.
  17. Ogata, Y. (1988). Statistical models for earthquake occurrences and residual analysis for point processes. Journal of the American Statistical Association, 83, 9–27.
  18. Reasenberg, P. A. and Jones, L. M. (1989). Earthquake hazard after a mainshock in California. Science, 243, 1173–1176.
  19. Richter, C. F. (1935). An instrumental earthquake magnitude scale. Bulletin of the Seismological Society of America, 25, 1–32.
  20. Scholz, C. H. (2019). The Mechanics of Earthquakes and Faulting, 3rd edition. Cambridge University Press.
  21. Seed, H. B. and Idriss, I. M. (1971). Simplified procedure for evaluating soil liquefaction potential. Journal of the Soil Mechanics and Foundations Division, ASCE, 97, 1249–1273.
  22. Shearer, P. M. (2019). Introduction to Seismology, 3rd edition. Cambridge University Press.
  23. Simons, M. et al. (2011). The 2011 magnitude 9.0 Tohoku-Oki earthquake: mosaicking the megathrust from seconds to centuries. Science, 332, 1421–1425.
  24. Stein, S. and Wysession, M. (2003). An Introduction to Seismology, Earthquakes, and Earth Structure. Blackwell Publishing.
  25. Waldhauser, F. and Ellsworth, W. L. (2000). A double-difference earthquake location algorithm: method and application to the northern Hayward fault, California. Bulletin of the Seismological Society of America, 90, 1353–1368.

Tornadoes — An Advanced Course
══════════════════════════════════════════

Introduction
─────────────────────────────────

A tornado is a rapidly rotating column of air, in contact with the ground, that is pendant from or beneath a cumuliform cloud and is often (but not always) visible as a condensation funnel or a debris cloud. Tornadoes are the most intense atmospheric vortices on Earth at the surface: mobile Doppler radars have measured winds of about 135 m/s (≈ 300 mph) within a few tens of metres of the ground, and the pressure deficit in the core of a violent tornado can reach roughly 50–100 hPa over a horizontal distance of a few hundred metres. Yet tornadoes are small (typical damage widths of tens to hundreds of metres), short-lived (most last minutes), and embedded within parent storms whose scale is one to two orders of magnitude larger. This mismatch of scales is the central difficulty of tornado science, forecasting and warning.

The United States records about 1,200 tornadoes per year, more than any other country, but tornadoes occur on every continent except Antarctica. Significant tornado activity is also found in Canada, Europe, the Río de la Plata basin of South America, South Africa, Australia, Japan, China and — with exceptional lethality — Bangladesh and eastern India. In the USA tornadoes have killed on average roughly 70 people per year in recent decades, with very large interannual variability (about 550 deaths in 2011, fewer than 20 in some quiet years). Insured losses from severe convective storms, of which tornadoes are a major part, now regularly exceed those from tropical cyclones in many years.

This course treats tornadoes at the level of an atmospheric science graduate programme or a professional working in forecasting, emergency management or wind engineering. We begin with the thermodynamic and kinematic environment of deep convection, then build up the vorticity dynamics of supercells, the still-unsettled problem of tornadogenesis, the fluid mechanics of the tornado vortex itself, and the ways tornadoes are observed, rated, forecast and warned for. We close with climatology, trends, vulnerability and engineering, and then examine a set of historical cases that each changed scientific understanding or practice.

In this course, you will:

  1. Quantify convective instability with CAPE, CIN and the lifted index, and relate buoyancy and shear to storm type
  2. Read hodographs, compute storm motion and storm-relative helicity, and explain why streamwise vorticity favours rotating updrafts
  3. Derive the tilting and stretching terms of the vorticity equation and use them to explain mesocyclone formation and storm splitting
  4. Evaluate competing explanations of tornadogenesis and identify the main open questions
  5. Distinguish supercell from non-supercell tornadoes, including landspouts, waterspouts and QLCS tornadoes
  6. Describe tornado vortex structure with Rankine and Burgers–Rott models, cyclostrophic balance and swirl ratio
  7. Apply the Fujita and Enhanced Fujita scales and understand their limitations as wind-speed estimates
  8. Interpret Doppler and dual-polarization radar signatures of tornadic storms within the constraints of radar geometry
  9. Use forecasting ingredients and composite parameters, and assess watch and warning performance
  10. Analyse tornado climatology, trends, vulnerability and engineering approaches to risk reduction

─────────────────────────────────
Lesson 1: Convective Instability and Thunderstorm Types
─────────────────────────────────

📌 Key idea of this section:

        CAPE = ∫ g (T_{vp} − T_{ve}) / T_{ve} dz   from the LFC to the EL;   w_{max} ≈ √(2 CAPE)

Parcel theory and buoyancy

Almost all tornadoes are produced by deep moist convection, and deep convection requires three ingredients: a conditionally unstable lapse rate, sufficient low-level moisture, and a mechanism to lift air parcels to their level of free convection. Parcel theory treats a small, undiluted bubble of air lifted adiabatically through an environment that is assumed to be in hydrostatic balance and unaffected by the parcel. The parcel rises dry-adiabatically (about 9.8 K per km) until it saturates at the lifting condensation level (LCL), then moist-adiabatically (roughly 4–7 K per km in the lower troposphere, increasing aloft). Where the parcel becomes warmer than its surroundings — the level of free convection (LFC) — it begins to accelerate upward on its own, until it reaches the equilibrium level (EL), usually near the tropopause, where its temperature again equals that of the environment.

The buoyancy acceleration of the parcel is B = g (T_{vp} − T_{ve}) / T_{ve}, where T_{v} is virtual temperature (which accounts for the lower density of moist air) and subscripts p and e denote parcel and environment. Integrating B with height gives two key quantities. Convective available potential energy (CAPE) is the positive area between the LFC and the EL; convective inhibition (CIN) is the negative area between the surface (or the parcel's origin) and the LFC. Both are energies per unit mass, in J/kg.

        CAPE = ∫_{LFC}^{EL} g (T_{vp} − T_{ve}) / T_{ve} dz
        CIN  = −∫_{z_0}^{LFC} g (T_{vp} − T_{ve}) / T_{ve} dz   (negative-area contribution only)

If all CAPE were converted to vertical kinetic energy, the maximum updraft speed would be w_{max} = √(2 CAPE). For CAPE of 2,500 J/kg this is about 71 m/s. Observed updrafts in intense supercells reach 40–60 m/s, somewhat lower, because of entrainment of drier environmental air, the weight of condensate (water loading), and vertical perturbation pressure gradient forces that oppose buoyancy in wide updrafts. Nevertheless √(2 CAPE) is a useful upper bound, and it explains why large hail and overshooting tops accompany high-CAPE environments.

Choice of parcel and the lifted index

CAPE depends strongly on which parcel is lifted. Surface-based CAPE (sbCAPE) lifts the surface parcel; mixed-layer CAPE (mlCAPE) lifts a parcel with the mean properties of the lowest 100 hPa, which is more representative of what an updraft ingests in the afternoon; most-unstable CAPE (muCAPE) lifts the parcel with the highest equivalent potential temperature in the lowest 300 hPa, which captures elevated instability above a stable surface layer. For tornado forecasting the distinction matters: a storm feeding on elevated air above a cold, stable layer may produce hail but rarely tornadoes, because the air that would be stretched into a near-ground vortex is negatively buoyant.

The lifted index (LI), one of the oldest stability indices (Galway, 1956), is the environmental temperature at 500 hPa minus the temperature of a parcel lifted to 500 hPa. Negative values indicate instability: LI of −3 to −6 °C is moderately unstable, below about −8 °C extremely unstable. LI samples only one level and is a crude proxy for CAPE, but it remains in operational use.

Convective inhibition and the capping inversion

CIN represents the work needed to lift a parcel to its LFC. A modest CIN (say 25–75 J/kg) is often favourable for significant severe weather because it suppresses widespread, disorganised convection and allows a few discrete storms to form where lifting is focused — along a dryline, a front, or an outflow boundary. In the US Great Plains, an elevated mixed layer of hot, dry air advected from the Mexican Plateau and the Rocky Mountains frequently forms a strong capping inversion (the "lid") above a moist boundary layer from the Gulf of Mexico. This produces the combination of steep mid-level lapse rates and rich low-level moisture that yields CAPE values of 3,000–5,000 J/kg on major outbreak days. Large CIN (more than ~150–200 J/kg) generally prevents surface-based storms altogether.

Thunderstorm types

The organisation of deep convection is governed more by vertical wind shear than by buoyancy. In weak shear (0–6 km bulk wind difference below about 10 m/s), single-cell "ordinary" storms form; the precipitation-driven downdraft falls through and chokes off the updraft within 30–60 minutes. In moderate shear (roughly 10–20 m/s), the gust front repeatedly triggers new cells on its downshear or forward flank, producing multicell clusters and lines. When the 0–6 km bulk shear exceeds about 20 m/s (≈ 40 kt), a single quasi-steady, rotating updraft — a supercell — becomes possible, and supercells can persist for hours. A supercell is defined dynamically: it is a convective storm with a deep, persistent mesocyclone, that is, an updraft whose vertical vorticity is correlated with its vertical velocity.

Weisman and Klemp (1982) used numerical simulations to show that the regime depends on the ratio of buoyancy to shear, which they expressed as a bulk Richardson number:

        BRN = CAPE / (½ U²)
        U = difference between the density-weighted mean wind over 0–6 km and the mean wind over 0–500 m
        BRN ≈ 10–50  →  supercells favoured;   BRN > ~50  →  multicells favoured

Very low BRN (below about 10) indicates shear strong enough to tear apart weak updrafts. Modern practice generally prefers the 0–6 km bulk wind difference and the effective bulk wind difference (computed over the lower half of the storm's depth, starting at the base of the effective inflow layer) because they separate supercell and non-supercell environments more cleanly than BRN.

Supercell morphology

Supercells are commonly subdivided into classic, high-precipitation (HP) and low-precipitation (LP) types. Classic supercells display a hook echo on radar, a weak-echo region or bounded weak-echo region (BWER) where intense updraft lofts precipitation before it can grow to radar-detectable size, a forward-flank downdraft (FFD) beneath the main precipitation core, and a rear-flank downdraft (RFD) that wraps around the mesocyclone. HP supercells embed the mesocyclone in heavy rain, making visual identification of tornadoes very difficult; they are common in the moist southeastern United States. LP supercells, typical of the High Plains near the dryline, have sparse precipitation and striking visible structure but produce tornadoes less often.

✏️ Your Turn

(a) A sounding has CAPE = 2,500 J/kg. Estimate the theoretical maximum updraft speed and comment on why observed updrafts are smaller.
(b) Between an LFC at 2 km and an EL at 11 km a parcel is, on average, 3 K warmer (in virtual temperature) than an environment whose mean virtual temperature is 255 K. Estimate the CAPE.
(c) For CAPE = 2,500 J/kg, compute BRN when U = 25 m/s and when U = 12 m/s. Which value lies in the supercell range of Weisman and Klemp?

Answers: (a) w_{max} = √(2 × 2,500) = √5,000 ≈ 71 m/s. Entrainment, water loading and opposing perturbation pressure gradients reduce realised updrafts, typically to perhaps 50–80% of this value. (b) CAPE ≈ g ΔT_{v} / T_{v} × Δz = 9.81 × 3 / 255 × 9,000 m ≈ 1,040 J/kg. (c) With U = 25 m/s, ½U² = 312.5 m²/s², BRN = 2,500 / 312.5 = 8 (shear-dominated, at or below the low end of the supercell range). With U = 12 m/s, ½U² = 72 m²/s², BRN ≈ 35, squarely within the 10–50 supercell range.

─────────────────────────────────
Lesson 2: Vertical Wind Shear, Hodographs and Storm-Relative Helicity
─────────────────────────────────

📌 Key idea of this section:

        SRH = −∫_{0}^{h} k · [(V − c) × ∂V/∂z] dz   — the streamwise vorticity available to a moving storm

The hodograph

A hodograph is the curve traced by the tips of the horizontal wind vectors at successive heights, plotted from a common origin in (u, v) space. Its geometry encodes the vertical wind shear: the shear vector over any layer is the segment joining the two heights on the hodograph, and its length is the bulk wind difference. A straight hodograph means unidirectional shear (the shear vector does not change direction with height), even if the wind itself veers. A hodograph that curves clockwise with height (in the Northern Hemisphere) is associated with a veering wind profile and, as shown below, strongly favours cyclonically rotating, right-moving supercells. The archetypal tornado hodograph has a large, clockwise-curved segment in the lowest 1–3 km and long straight segments above.

Horizontal vorticity from shear

Vertical wind shear is equivalent to horizontal vorticity. For a wind V(z) = (u(z), v(z)), the horizontal vorticity vector is ω_{h} = (−∂v/∂z, ∂u/∂z); it points 90° to the left of the shear vector. A westerly wind increasing by 10 m/s per km produces horizontal vorticity of 0.01 s^{−1} pointing northward. In a typical tornadic environment the low-level shear alone represents horizontal vorticity of 0.01–0.03 s^{−1}, which is comparable to or larger than the vertical vorticity of a mesocyclone. The central dynamical question of supercells is how this horizontal vorticity is reoriented into the vertical.

Storm motion and the Bunkers method

What matters for a moving storm is not the ground-relative wind but the storm-relative wind V − c, where c is storm motion. Supercells deviate from the mean wind because of dynamic pressure effects on their flanks (Lesson 3). Bunkers et al. (2000) proposed an empirical, Galilean-invariant method that is now standard. The right-moving and left-moving supercell motions are:

        c_{RM} = V_{mean} + D (S × k) / |S|
        c_{LM} = V_{mean} − D (S × k) / |S|
        V_{mean} = non-pressure-weighted mean wind over 0–6 km
        S = shear vector from the 0–500 m mean wind to the 5.5–6 km mean wind
        D = 7.5 m/s

Here S × k with S = (S_{x}, S_{y}) is the vector (S_{y}, −S_{x}), which points 90° to the right of the shear. Typical errors of this technique are about 4–5 m/s, mostly due to storm interactions with boundaries and outflow.

Streamwise vorticity and helicity

The component of horizontal vorticity parallel to the storm-relative inflow is called streamwise vorticity; the perpendicular component is crosswise vorticity. Air parcels with purely crosswise vorticity, entering an updraft, are tilted so as to produce a pair of counter-rotating vortices on either flank of the updraft, with the updraft maximum lying between them — vorticity and vertical velocity are uncorrelated. Air with purely streamwise vorticity, by contrast, is tilted so that the rotating air coincides with the rising air: the updraft as a whole rotates. Davies-Jones (1984) formalised this, showing that the correlation between updraft and vertical vorticity is governed by the streamwise vorticity of the storm-relative inflow. This is the physical reason supercells occur in sheared environments with curved hodographs.

The integrated measure is storm-relative helicity (SRH), defined above, which equals −2 times the signed area swept out on the hodograph by the storm-relative wind vectors between the surface and height h. For discrete wind observations at levels n = 0 … N it can be computed as:

        SRH = Σ_{n} [ (u_{n+1} − c_{x})(v_{n} − c_{y}) − (u_{n} − c_{x})(v_{n+1} − c_{y}) ]

Positive SRH favours cyclonic (right-moving) supercells in the Northern Hemisphere. Operationally, SRH is computed over 0–1 km and 0–3 km and over the "effective inflow layer" (the contiguous layer in which lifted parcels have CAPE ≥ 100 J/kg and CIN > −250 J/kg). Rough guidance: 0–3 km SRH of 150–250 m²/s² supports supercells; 0–1 km SRH above about 100–150 m²/s² is associated with an increasing likelihood of significant tornadoes. Research since about 2017 (e.g. Coffer and Parker, and Coffer et al.) suggests that streamwise vorticity and SRH in the lowest 500 m are better discriminators between tornadic and non-tornadic supercells than deeper layers, consistent with the idea that near-ground inflow controls the low-level mesocyclone.

✏️ Your Turn

(a) The 0–6 km mean wind is (15, 5) m/s and the Bunkers shear vector is S = (20, 10) m/s. Compute the right-mover motion.
(b) Winds at 0, 1, 2 and 3 km are (5, 0), (10, 10), (15, 15) and (20, 15) m/s, and the storm moves at c = (12, 2) m/s. Compute 0–3 km SRH with the discrete formula and state which layer contributes most.
(c) A westerly wind increases from 5 m/s at the surface to 25 m/s at 1 km. What is the magnitude and direction of the horizontal vorticity?

Answers: (a) |S| = √(20² + 10²) ≈ 22.36 m/s; S × k = (10, −20); unit vector (0.447, −0.894); times 7.5 gives (3.35, −6.71). So c_{RM} ≈ (15 + 3.35, 5 − 6.71) = (18.4, −1.7) m/s. (b) Layer 0–1 km: (10 − 12)(0 − 2) − (5 − 12)(10 − 2) = 4 + 56 = 60. Layer 1–2 km: (15 − 12)(10 − 2) − (10 − 12)(15 − 2) = 24 + 26 = 50. Layer 2–3 km: (20 − 12)(15 − 2) − (15 − 12)(15 − 2) = 104 − 39 = 65. Total SRH ≈ 175 m²/s²; the 2–3 km layer contributes slightly the most, the 0–1 km layer nearly as much. (c) ∂u/∂z = 20 m/s per 1,000 m = 0.02 s^{−1}; ω_{h} = (0, 0.02) s^{−1}, i.e. 0.02 s^{−1} pointing north (90° to the left of the eastward shear).

─────────────────────────────────
Lesson 3: Supercell Dynamics
─────────────────────────────────

📌 Key idea of this section:

        ∂ζ/∂t ≈ −V·∇ζ + ω_{h}·∇_{h}w + ζ ∂w/∂z   (advection + tilting + stretching)

The vertical vorticity equation

Neglecting the Coriolis parameter (which is small compared with storm-scale vorticity of 10^{−2} s^{−1}), friction and baroclinic effects in the vertical component, the vertical vorticity ζ evolves according to

        Dζ/Dt = (∂w/∂y ∂u/∂z − ∂w/∂x ∂v/∂z) + ζ ∂w/∂z
        (term in parentheses: tilting of horizontal vorticity;  last term: stretching)

Tilting converts horizontal vorticity into vertical vorticity where there are horizontal gradients of vertical velocity; stretching amplifies existing vertical vorticity exponentially where vertical velocity increases with height (convergence beneath an updraft). Stretching alone cannot create vertical vorticity from zero — this is a key fact in the tornadogenesis problem (Lesson 4). Tilting at mid-levels on the flanks of an updraft, followed by stretching, produces the mid-level mesocyclone (typically 3–8 km diameter, vertical vorticity ~0.01–0.05 s^{−1}, located 3–7 km above ground).

Perturbation pressure and propagation

Supercells propagate off the mean wind because of vertical perturbation pressure gradients. Following Rotunno and Klemp (1982, 1985), the anelastic perturbation pressure can be split into a buoyancy part, a linear dynamic part and a nonlinear dynamic part:

        ∇²p'_{L}  = −2 ρ_{0} (∂V/∂z · ∇_{h} w)              linear: high upshear, low downshear of the updraft
        ∇²p'_{NL} = −ρ_{0} (e_{ij}e_{ij} − ½|ω'|²)          nonlinear: "spin" term gives low pressure in vortices
        since ∇²p' behaves like −p'/L², p'_{L} ∝ +∂V/∂z · ∇_{h} w and p'_{NL} ∝ (e_{ij}e_{ij} − ½|ω'|²)

The linear term creates high pressure on the upshear flank of an updraft and low pressure on its downshear flank at each level; where the shear vector turns clockwise with height (curved hodograph), the resulting vertical pressure gradient force favours new updraft growth on the right flank, giving the right-mover its preferred status. The nonlinear term produces low pressure in the cores of both cyclonic and anticyclonic mid-level vortices regardless of sign; this upward-directed pressure gradient force beneath the vortices lifts air on both flanks of the original updraft, which, together with precipitation loading in the centre, causes storm splitting in straight-hodograph environments into a right-mover and a left-mover. In a cyclostrophically balanced vortex of radius R rotating as a solid body with angular velocity Ω = ζ/2, the central pressure deficit is ρ Ω² R² / 2.

Downdrafts and the low-level mesocyclone

A mature supercell has two principal downdrafts. The forward-flank downdraft lies beneath the main precipitation region and produces a cool, evaporatively chilled outflow whose leading edge is the forward-flank gust front. Along and across this boundary there is a horizontal buoyancy gradient, which generates horizontal vorticity baroclinically:

        Dω_{h}/Dt ⊇ k × ∇_{h}B    (baroclinic generation; B = buoyancy)

Air moving along the forward-flank baroclinic zone towards the updraft can acquire streamwise horizontal vorticity several times larger than that of the ambient environment. The rear-flank downdraft forms on the upshear side of the mesocyclone, driven by a combination of precipitation loading, evaporative cooling and a downward-directed perturbation pressure gradient as the low-level mesocyclone intensifies beneath the mid-level one. The RFD wraps cyclonically around the mesocyclone, creating the hook echo and an occlusion; the mesocyclone and potential tornado typically form near the "triple point" where the RFD gust front, forward-flank gust front and inflow meet.

The low-level mesocyclone (below about 1 km) is dynamically distinct from the mid-level one. Simulations and observations show that much of its vorticity derives from baroclinically generated and environmental streamwise vorticity that is tilted and stretched by the strong upward pressure gradient force beneath the rotating updraft. A strong, low-level mesocyclone with intense dynamic lifting is a necessary, though not sufficient, condition for a significant tornado.

✏️ Your Turn

(a) Horizontal vorticity of 0.02 s^{−1} is directed along a horizontal gradient of vertical velocity of 20 m/s over 4 km. Estimate the tilting rate of vertical vorticity.
(b) Vertical vorticity of 0.01 s^{−1} is subjected to stretching with ∂w/∂z = 0.005 s^{−1}. How long does it take to increase to 0.1 s^{−1}?
(c) A mid-level mesocyclone has radius 2.5 km and vertical vorticity 0.02 s^{−1} in an environment of density 0.7 kg/m³. Estimate the edge wind and the cyclostrophic pressure deficit at the centre.

Answers: (a) ∂w/∂x = 20 / 4,000 = 0.005 s^{−1}; tilting ≈ 0.02 × 0.005 = 1 × 10^{−4} s^{−2}, which would create 0.01 s^{−1} in about 100 s if sustained. (b) Exponential growth: ζ(t) = ζ_{0} exp(t ∂w/∂z), so t = ln(10) / 0.005 ≈ 460 s, roughly 8 minutes. (c) Ω = ζ/2 = 0.01 s^{−1}; edge wind V = ΩR = 25 m/s; Δp = ρ Ω² R² / 2 = 0.7 × 625 / 2 ≈ 220 Pa ≈ 2.2 hPa — small compared with a tornado, but enough to drive strong upward accelerations over several kilometres.

─────────────────────────────────
Lesson 4: Tornadogenesis — Theories and Open Questions
─────────────────────────────────

📌 Key idea of this section:

        Γ = ∮ V · dl = 2πrv ≈ conserved  →  contracting a ring of air from 1 km to 100 m multiplies v by 10

The problem

Only a minority of supercells and mesocyclones produce tornadoes. Trapp, Stumpf and Manross (2005) found that roughly a quarter of mesocyclones detected by the WSR-88D network were associated with tornadoes, and the fraction is lower still for weak or short-lived mesocyclones. Environments that look identical in soundings often produce tornadic and non-tornadic supercells within a few tens of kilometres of each other. Understanding why some storms produce tornadoes and others do not is the defining open problem of the field.

The requirement for a downdraft

An updraft that tilts environmental horizontal vorticity creates vertical vorticity that is being carried upward as it is produced; near the ground, where w → 0, tilting by an updraft alone cannot produce substantial vertical vorticity. Davies-Jones (1982) and Davies-Jones and Brooks (1993) pointed out that, in the absence of pre-existing vertical vorticity at the ground, a downdraft is required: air parcels that descend while being tilted can arrive near the surface with vertical vorticity, and can then be stretched by the low-level updraft. Observations from the VORTEX (1994–95) and VORTEX2 (2009–10) field programmes and high-resolution simulations broadly support this picture, with the RFD and the occlusion region as the source of near-surface rotation.

Rear-flank downdraft thermodynamics

Markowski, Straka and Rasmussen (2002) used mobile mesonet observations to show that the RFDs of tornadic supercells were, on average, warmer and moister (less negatively buoyant, with smaller deficits in virtual potential temperature and higher CAPE) than those of non-tornadic supercells. The interpretation is that very cold outflow is hard to lift and stretch: even when it carries large vertical vorticity to the surface, the low-level updraft cannot accelerate it upward fast enough to concentrate the vorticity. This is consistent with the climatological finding that low LCL heights (high boundary-layer relative humidity, which limits evaporative cooling) favour significant tornadoes.

Circulation and contraction

Tornadogenesis is fundamentally a problem of concentrating circulation. By Kelvin's circulation theorem (inviscid, barotropic fluid), the circulation Γ around a closed material loop is conserved. A ring of air of radius 1 km with tangential wind 5 m/s has Γ = 2π × 1,000 × 5 ≈ 31,400 m²/s; contracted to 100 m radius it would have a tangential wind of 50 m/s, and to 50 m, 100 m/s. In reality the atmosphere is baroclinic and frictional, so circulation is not exactly conserved, and the question becomes whether convergence beneath the updraft can contract a sufficiently large circulation quickly enough before outflow undercuts the updraft or friction destroys it.

Competing mechanisms

Several mechanisms, not mutually exclusive, have been proposed. (1) The descending-reflectivity-core or RFD pathway: vorticity is generated baroclinically and tilted in descending air, then carried into the low-level updraft. (2) Ambient environmental streamwise vorticity: in environments with very large near-ground SRH, the low-level mesocyclone can be supplied directly by the environment, and the downdraft's role is mainly to provide some vertical vorticity at the ground. (3) The streamwise vorticity current (SVC): Orf et al. (2017), using a 30 m grid simulation of a long-track EF5-strength tornado based on the 24 May 2011 El Reno–Piedmont environment, identified a narrow, rope-like current of intense streamwise vorticity along the forward-flank outflow that feeds the low-level updraft. (4) Surface friction: friction can generate horizontal vorticity in the near-ground inflow and, in some simulations (e.g. Schenkman et al.; Roberts et al.), helps produce near-ground vertical vorticity; however the effect depends on how friction is parameterised, and it is an active debate. (5) Vortex-sheet and shear-instability processes along the RFD gust front, which produce misocyclones that may merge or be stretched.

Observational campaigns and results

VORTEX2, the largest tornado field campaign to date, deployed about a dozen mobile radars, mobile mesonets, disdrometers and unmanned aircraft and collected data on several tornadic and many non-tornadic supercells (Wurman et al., 2012). Among its findings were that the differences between tornadic and non-tornadic storms are often subtle, that low-level rotation can intensify very rapidly (on time scales of minutes), and that tornadoes can form both from the top down and from the bottom up, or nearly simultaneously over a depth of a kilometre or more. Rapid-scan mobile radar data (e.g. French et al., and Houser et al.) suggest that many tornadoes develop first near the ground or over a deep layer at once, contrary to the older "dynamic pipe effect" model in which the vortex built downward from the mid-level mesocyclone.

Open questions

Key unresolved issues include: the relative importance of environmental versus storm-generated vorticity; the role of surface drag and its proper representation in models; why tornadoes sometimes fail to form in near-ideal environments ("tornadogenesis failure"); the predictability limit of tornadogenesis (possibly controlled by small-scale, stochastic outflow features); the dynamics of long-track tornadoes and cyclic tornado production; and the influence of complex terrain, land surface and boundaries. Current efforts — such as the TORUS campaign (2019, 2022), PERiLS (2022–2023) in the Southeast, and very high-resolution simulations — target these questions.

✏️ Your Turn

(a) A ring of air of radius 2 km has a mean tangential wind of 4 m/s. Compute its circulation, and the tangential wind if it contracts to a radius of 80 m with circulation conserved.
(b) If a low-level updraft produces convergence such that ∂w/∂z = 0.02 s^{−1} near the ground, how many e-foldings are needed to amplify vertical vorticity from 0.01 to 1 s^{−1}, and how long does that take?

Answers: (a) Γ = 2π × 2,000 × 4 ≈ 50,300 m²/s. At r = 80 m, v = Γ / (2π × 80) = 4 × 2,000 / 80 = 100 m/s. (b) Amplification factor 100 = e^{4.6}, so about 4.6 e-foldings; time = 4.6 / 0.02 ≈ 230 s, roughly 4 minutes — consistent with observed tornadogenesis time scales of a few minutes once a favourable configuration exists.

─────────────────────────────────
Lesson 5: Non-Supercell Tornadoes
─────────────────────────────────

📌 Key idea of this section:

        Pre-existing vertical vorticity (shear zones, misocyclones) + stretching beneath a growing updraft = tornado without a mesocyclone

Landspouts and waterspouts

Not all tornadoes come from supercells. Wakimoto and Wilson (1989) documented tornadoes near Denver that formed when vortices already present along a low-level convergence boundary — produced by horizontal shearing instability of the boundary's vortex sheet — were stretched by rapidly growing cumulus congestus and cumulonimbus overhead. Such tornadoes are popularly called landspouts. Fair-weather waterspouts form in an analogous way beneath growing cumulus over warm water, especially in the Florida Keys, the Mediterranean and the Great Lakes, often in weak-shear environments. These non-mesocyclonic tornadoes are usually weak (EF0–EF1), narrow and short-lived, but they can occasionally reach EF2 or stronger. Because there is no mesocyclone, radar signatures are weak or absent, and warning skill is low.

A useful environmental proxy is the non-supercell tornado parameter, which combines steep low-level lapse rates, high low-level CAPE, weak CIN, a pre-existing boundary with strong vertical vorticity and weak deep-layer shear. Steep lapse rates in the lowest 3 km allow very rapid updraft acceleration close to the ground, which is what stretching requires.

QLCS tornadoes

Quasi-linear convective systems (squall lines and bow echoes) produce a substantial minority of tornadoes. In their climatology for 1998–2000, Trapp et al. (2005) found that about 18% of US tornadoes came from QLCSs and about 79% from cells (the remainder unclassified), with QLCS tornadoes more common in the cool season and in the Midwest and Southeast. QLCS tornadoes are typically associated with low-level mesovortices, 2–20 km in scale, that form along the leading edge of the cold pool, often north of a bow apex or along a "line-end vortex". Mechanisms include tilting of baroclinically generated horizontal vorticity by downdrafts (Trapp and Weisman, 2003) and tilting by updrafts of horizontal vorticity in the inflow (Atkins and St. Laurent, 2009).

QLCS tornadoes are a serious warning problem. They often form within minutes, are frequently rain-wrapped, occur at night, and are embedded in damaging straight-line winds. Their parent mesovortices may be shallow, below the lowest radar beam at long range. Operational forecasters use the "three-ingredients" method (Schaumann and Przybylinski, 2012): a balance between the cold pool and the line-normal 0–3 km shear, a line-normal 0–3 km bulk shear of 30 kt (≈ 15 m/s) or more, and a rear-inflow jet or surge that bows the line. Warnings for QLCS tornadoes have lower probability of detection and shorter lead times than those for supercell tornadoes.

Tropical cyclone tornadoes

Landfalling tropical cyclones commonly spawn tornadoes, mainly in the right-front quadrant relative to motion and in outer rainbands, where low-level shear and SRH are extremely large but CAPE is modest (often below 1,000 J/kg). Hurricane Ivan (2004) is associated with more than 100 tornadoes and Hurricane Beulah (1967) with more than 100 as well. The parent storms are typically small, shallow "mini-supercells" whose mesocyclones may lie mostly below 3 km, making detection at long range difficult.

Cold-air funnels, gustnadoes and misclassification

Cold-air funnels in cool, unstable air aloft rarely reach the ground. Gustnadoes — brief, shallow vortices along a gust front — are not connected to the cloud-base updraft and are usually not classified as tornadoes, although the boundary between a strong gustnado and a weak QLCS tornado is ambiguous in practice. The definition of what counts as a tornado therefore affects climatological counts, especially for weak events.

✏️ Your Turn

(a) A convergence boundary has a jump in along-boundary wind of 10 m/s across 500 m. What vertical vorticity does this shear zone contain?
(b) The 0–3 km shear vector is (20, 5) m/s. A squall line is oriented along the unit vector (0.5, 0.866), i.e. running SSW–NNE. Compute the line-normal component of the 0–3 km shear and compare it with the three-ingredients threshold.

Answers: (a) ζ ≈ ΔV/Δx = 10 / 500 = 0.02 s^{−1}, comparable to a mesocyclone; stretching by a factor of 50 would give tornadic vorticity of order 1 s^{−1}. (b) The line-normal unit vector is (0.866, −0.5). Normal component = 20 × 0.866 + 5 × (−0.5) = 17.32 − 2.5 = 14.8 m/s ≈ 29 kt, just below the 30 kt guide value; the along-line component is 20 × 0.5 + 5 × 0.866 ≈ 14.3 m/s.

─────────────────────────────────
Lesson 6: Tornado Vortex Dynamics and Wind Profiles
─────────────────────────────────

📌 Key idea of this section:

        Cyclostrophic balance:  (1/ρ) ∂p/∂r = v²/r   →   Rankine core deficit Δp = ρ V_{max}²

Regions of the tornado flow

A mature tornado can be divided into several flow regions: (1) the outer region, in approximately cyclostrophic balance, where tangential wind decreases with radius roughly as 1/r; (2) the core, inside the radius of maximum wind (RMW), in near solid-body rotation; (3) the surface boundary layer, where friction disrupts cyclostrophic balance, so that the inward pressure gradient force is no longer balanced and air spirals strongly inward; (4) the corner flow region, where the inflowing boundary layer turns upward; and (5) the rising core flow aloft. Because the inflow layer is driven by a pressure gradient that is not balanced by centrifugal force, the corner region can contain the strongest winds anywhere in the vortex, often within the lowest 10–100 m. Mobile radar observations confirm that peak Doppler velocities in strong tornadoes are commonly found below about 100 m above ground.

Cyclostrophic balance and pressure

On the scale of a tornado the Rossby number is enormous (V/fL ~ 100 / (10^{−4} × 100) ~ 10^{4}), so Coriolis forces are negligible and the radial momentum equation outside the boundary layer reduces to cyclostrophic balance. Tornadoes may therefore rotate either way; however, because they derive their rotation from cyclonic mesocyclones, the great majority (well over 95% in the US) are cyclonic. Anticyclonic tornadoes occur, often as satellite tornadoes or in the anticyclonic shear region on the RFD gust front.

The Rankine combined vortex is the simplest model:

        v(r) = V_{max} r / R      for r ≤ R     (solid-body core)
        v(r) = V_{max} R / r      for r > R     (potential vortex)
        p(∞) − p(R) = ½ ρ V_{max}²;   p(R) − p(0) = ½ ρ V_{max}²;   total Δp = ρ V_{max}²

For V_{max} = 90 m/s and ρ = 1.15 kg/m³, the central deficit is about 9,300 Pa (93 hPa). The largest in-situ pressure deficit measured in a tornado is about 100 hPa, recorded by a probe deployed by Tim Samaras in the Manchester, South Dakota, tornado of 24 June 2003, consistent with this order of magnitude.

The Burgers–Rott vortex

The Rankine vortex has a discontinuous vorticity profile. The Burgers–Rott vortex is an exact solution of the Navier–Stokes equations in which radial inflow (u = −ar) and axial stretching (w = 2az) balance viscous diffusion:

        v(r) = (Γ / 2πr) [1 − exp(−r²/r_{c}²)],   r_{c} = √(2ν/a)
        v_{max} ≈ 0.638 Γ / (2π r_{c})   at r ≈ 1.12 r_{c}

Here ν is the (eddy) viscosity and a the strain rate. Doppler radar profiles of real tornadoes are often well fitted by a Burgers–Rott or modified Rankine profile v ∝ r^{−α} outside the RMW with α ≈ 0.5–0.8 rather than 1, reflecting turbulence and the finite radar resolution.

Swirl ratio and vortex structure

Laboratory vortex chambers (Ward, 1972; Church et al., 1979) showed that tornado-like vortex structure is controlled largely by the swirl ratio, the ratio of angular momentum input to the volume flux through the updraft. One common definition is

        S = r_{0} Γ_{∞} / (2Q)    (r_{0} = updraft radius, Γ_{∞} = ambient circulation, Q = volume flow rate)

At low swirl ratio the vortex is narrow, laminar and single-celled (rising motion throughout the core). As S increases, a vortex breakdown — an abrupt transition to a wider, turbulent vortex with a central downdraft — forms aloft and descends; when it reaches the surface the vortex becomes two-celled, with a downdraft in the core and an annulus of rising air. At still higher swirl ratio the two-celled vortex becomes unstable and splits into two, three or more secondary vortices rotating around the parent vortex. In Church et al.'s apparatus, the breakdown reached the surface at S of roughly 0.45 and multiple vortices appeared for S of order 1, but these thresholds depend on the apparatus and the definition used. Fujita's aerial surveys of cycloidal "suction swath" marks in crop fields, especially after the 1974 Super Outbreak, provided the first convincing evidence of multiple-vortex structure in nature; mobile radars have since resolved subvortices directly (e.g. in El Reno 2013).

Translation and near-ground winds

Ground-relative winds combine rotation and translation. On the right side of a cyclonic tornado (relative to its motion), the translation speed adds to the rotational wind; on the left side it subtracts. Subvortices add a third component: a subvortex of 30–40 m/s rotating within a parent of 60 m/s, itself translating at 20 m/s, can produce very short-lived gusts above 110 m/s along narrow swaths, which explains the abrupt transitions from total destruction to minor damage seen in many surveys. Debris loading near the ground reduces the effective wind but greatly increases damage potential through impact.

✏️ Your Turn

(a) Using the Rankine model, estimate the central pressure deficit for V_{max} = 90 m/s and ρ = 1.15 kg/m³. What fraction of this deficit occurs outside the RMW?
(b) A Burgers–Rott vortex has r_{c} = 100 m and v_{max} = 80 m/s. Find the radius of maximum wind and the circulation Γ far from the axis.
(c) A tornado with a peak rotational wind of 70 m/s translates at 20 m/s. Estimate the ground-relative peak winds on its right and left sides.

Answers: (a) Δp = ρ V_{max}² = 1.15 × 8,100 ≈ 9,300 Pa ≈ 93 hPa; half (about 47 hPa) occurs between infinity and R and half inside the core. (b) RMW ≈ 1.12 × 100 m ≈ 112 m; Γ = 2π r_{c} v_{max} / 0.638 = 2π × 100 × 80 / 0.638 ≈ 7.9 × 10^{4} m²/s. (c) Right side ≈ 70 + 20 = 90 m/s; left side ≈ 70 − 20 = 50 m/s. The asymmetry is why damage intensity is often greater on the right side of the track.

─────────────────────────────────
Lesson 7: The Fujita and Enhanced Fujita Scales
─────────────────────────────────

📌 Key idea of this section:

        Tornado ratings are damage-based estimates of a 3-second gust, not measurements of wind

The original Fujita scale

Tetsuya Theodore Fujita introduced his scale in 1971 to link damage to wind speed and to allow consistent comparison of tornadoes and hurricanes. He bridged the Beaufort scale (whose force 12 begins at 73 mph) and the speed of sound (Mach 1, about 738 mph) with a power law, so that F1 begins at Beaufort 12 and F12 at Mach 1:

        V_{F} = 6.30 (F + 2)^{3/2}  m/s

This gives the lower bounds F0 40 mph, F1 73 mph, F2 113 mph, F3 158 mph, F4 207 mph, F5 261 mph and F6 319 mph. Only F0–F5 were used in practice. The F-scale was applied by the National Weather Service from the 1970s, and tornadoes from 1950 onward were rated retrospectively from newspaper accounts and photographs, which introduces large inhomogeneities into the historical record. Engineering studies after the 1990s showed that the F-scale wind speeds for F3 and above were substantially too high: well-built frame houses fail at much lower speeds than Fujita assumed, and the scale did not account for construction quality.

The Enhanced Fujita scale

The Enhanced Fujita (EF) scale was developed by the Wind Science and Engineering Center at Texas Tech University with a forum of meteorologists and engineers (WSEC, 2006) and implemented by the NWS on 1 February 2007; Environment and Climate Change Canada adopted a Canadian version in 2013. It retains six categories but recalibrates the wind speeds (estimated 3-second gusts at about 10 m above ground):

        Rating   3-s gust (mph)   3-s gust (m/s, approx.)
        EF0       65–85            29–38
        EF1       86–110           38–49
        EF2      111–135           50–60
        EF3      136–165           61–74
        EF4      166–200           74–89
        EF5        > 200            > 89

The core of the EF scale is a set of 28 damage indicators (DIs) — buildings, structures and trees, such as one- and two-family residences (FR12), single-wide and double-wide manufactured homes, schools, strip malls, transmission towers and hardwood and softwood trees — each with a sequence of degrees of damage (DODs). For every DOD the scale gives an expected wind speed with lower and upper bounds. For example, for the FR12 indicator the highest degree of damage (destruction of a well-constructed house, slab swept clean) has an expected wind speed of about 200 mph. Surveyors judge the construction quality and adjust within the bounds.

Damage surveys and their limitations

Ratings are assigned after a ground survey (and increasingly drone, aerial and satellite imagery) by NWS staff using the Damage Assessment Toolkit. The rating reflects the highest wind consistent with the most severe credible damage along the path, not the typical damage. Consequently: a violent tornado crossing open fields may be rated EF0–EF2 for lack of damage indicators ("rating by opportunity"); ratings cluster where well-defined indicators exist; and EF5 requires a high-quality indicator with near-total destruction that cannot be explained by construction defects. Mobile radar measurements are not used to assign EF ratings in the US because radar measures winds aloft, at volume-averaged scales, and cannot be compared directly with 10 m, 3-second gust estimates — as illustrated by El Reno 2013 (Case Studies). A joint ASCE/SEI–AMS committee has for several years been developing a consensus standard for wind-speed estimation in tornadoes and other windstorms, intended to add methods (including tree-fall pattern analysis, radar and forensic engineering) and to update and extend the damage indicators.

The distribution of intensity

Most tornadoes are weak: in the US roughly 85–90% are rated EF0–EF1, about 10% EF2–EF3, and only about 1–2% are violent (EF4–EF5). Violent tornadoes nevertheless account for a large majority of tornado deaths (historically on the order of two-thirds). There were about 59 F5/EF5 tornadoes in the US from 1950 through 2013; after the Moore EF5 of 20 May 2013, no tornado was rated EF5 until the Enderlin, North Dakota, tornado of 20 June 2025 was upgraded to EF5 in October 2025. The long gap has fuelled debate over whether the EF scale, as applied, makes EF5 ratings too difficult to assign, rather than reflecting any physical change.

Other scales

Europe uses the International Fujita (IF) scale, introduced by the European Severe Storms Laboratory in 2023, which adapts the EF approach to European building stock and includes fractional ratings (IF0– … IF5). The TORRO scale (T0–T11), based on the Beaufort scale, is used in the UK.

✏️ Your Turn

(a) Use Fujita's formula to compute the lower-bound wind speed of F3, in m/s and mph, and verify that F12 corresponds to roughly Mach 1.
(b) An EF4 lower-bound gust of 166 mph acts on a wall. Compute the dynamic pressure q = ½ρV² for ρ = 1.2 kg/m³, in Pa and psf (1 Pa = 0.020885 psf).

Answers: (a) V = 6.30 × 5^{1.5} = 6.30 × 11.18 ≈ 70.4 m/s ≈ 158 mph. For F = 12, V = 6.30 × 14^{1.5} = 6.30 × 52.4 ≈ 330 m/s, close to the speed of sound near the surface (about 340 m/s). (b) 166 mph = 74.2 m/s; q = 0.5 × 1.2 × 74.2² ≈ 3,300 Pa ≈ 69 psf. Actual loads depend on pressure coefficients, internal pressurisation through broken windows and doors, and the unusual vertical and uplift components of tornado flow.

─────────────────────────────────
Lesson 8: Radar Observation of Tornadoes
─────────────────────────────────

📌 Key idea of this section:

        v_{N} = λ·PRF / 4,   r_{max} = c / (2·PRF)   →   v_{N} r_{max} = cλ / 8 (the Doppler dilemma)

Doppler radar principles

A Doppler weather radar measures the phase shift between successive pulses scattered by hydrometeors and debris, giving the radial (along-beam) component of target velocity. The maximum unambiguous velocity (Nyquist velocity) and the maximum unambiguous range trade off against each other through the pulse repetition frequency: for the US WSR-88D (an S-band radar, λ ≈ 10–11 cm), a PRF of 1,000 Hz gives v_{N} ≈ 27 m/s and r_{max} = 150 km. Velocities larger than v_{N} are aliased (folded) and must be unfolded by algorithms or by eye. The WSR-88D network (about 160 radars, deployed 1990–1997 and upgraded to dual polarization in 2011–2013) has a half-power beamwidth of about 0.95°.

Beam geometry

Two geometric facts limit tornado detection. First, the beam rises above the ground with range because of its elevation angle and Earth's curvature; with the standard 4/3-Earth-radius refraction model:

        h = √(r² + R'² + 2 r R' sin θ) − R',   R' = (4/3) × 6,371 km ≈ 8,495 km

At 100 km range the centre of the 0.5° beam is about 1.5 km above the radar level, so shallow circulations and the near-ground tornado itself are not sampled. Second, the beam broadens linearly with range (≈ r × beamwidth in radians), reaching about 1.7 km at 100 km — far wider than most tornadoes. Velocity extremes are therefore smoothed, and a tornado appears as a strong "gate-to-gate" shear signature rather than a resolved vortex. Mobile radars (e.g. Doppler on Wheels, RaXPol) deployed a few kilometres from tornadoes, with beamwidths of 0.9–1.0°, achieve resolution of tens of metres, which is how the highest tornado wind speeds have been measured.

Reflectivity signatures

Classic supercells display a hook or appendage echo on the rear flank, wrapping around the mesocyclone, a weak-echo region or BWER beneath the overhanging precipitation aloft where the updraft is strongest, and, in strong tornadoes, a "debris ball" — a small, roughly circular area of high reflectivity at the hook tip produced by lofted debris. In very intense tornadoes, a radial "debris spike" of spurious echo can appear down-range of the debris ball, caused by multiple scattering (three-body-type and multipath effects) from the dense debris cloud, as in the Mayfield 2021 tornado.

Velocity signatures

In storm-relative velocity, a mesocyclone appears as an azimuthally adjacent pair of inbound (negative, towards the radar) and outbound (positive) velocities — a couplet — with cyclonic sense (outbound to the right when looking from the radar). The rotational velocity is commonly defined as

        V_{rot} = (V_{max,out} − V_{max,in}) / 2,   with inbound velocities negative

and azimuthal shear as ΔV / D, where D is the distance between the extremes. A tornadic vortex signature (TVS) is an intense, gate-to-gate (adjacent azimuths) couplet, typically extending through several elevation angles; the original TVS was identified by NSSL in the 1973 Union City, Oklahoma, tornado. Studies of thousands of WSR-88D tornado cases (e.g. Smith et al., 2015) show that the probability of a given EF rating increases strongly with low-level V_{rot}, conditioned on range and the near-storm environment; such relationships underpin modern warning decision guidance.

Dual-polarization signatures

Dual-polarization radars transmit and receive both horizontally and vertically polarised waves, yielding differential reflectivity (Z_{DR}), the co-polar correlation coefficient (ρ_{hv}) and specific differential phase (K_{DP}). Hydrometeors have ρ_{hv} close to 1 (above ~0.97 for rain); debris — irregular, randomly oriented and of mixed composition — has much lower values. The tornadic debris signature (TDS) (Ryzhkov et al., 2005) is a localised region of high reflectivity (typically > 40–45 dBZ), low ρ_{hv} (often < 0.8–0.9) and near-zero or negative Z_{DR}, collocated with a strong velocity couplet. A TDS confirms that a tornado is in progress and lofting debris, often at night or in rain-wrapped situations where spotters cannot see it. The height to which debris is lofted correlates broadly with tornado intensity. Other dual-pol features in supercells include the Z_{DR} arc along the forward-flank reflectivity gradient (indicating size sorting by strong storm-relative helicity) and the Z_{DR} column (a column of large raindrops lofted above the melting level, marking the updraft).

Emerging technologies

Rapid-update scanning (SAILS and MESO-SAILS, which insert extra low-level scans), phased-array radars that scan volumes in about one minute, gap-filling X-band networks (e.g. CASA), and rapid-scan mobile radars are improving temporal resolution, which matters because tornadogenesis can occur within the 4–5 minutes of a conventional volume scan. The US is planning a successor to the WSR-88D network, likely based on phased-array technology.

✏️ Your Turn

(a) An S-band radar has λ = 10.7 cm. Compute v_{N} and r_{max} for PRF = 1,000 Hz and the product v_{N} r_{max}.
(b) Compute the height of the 0.5° beam centre and the beam width at 100 km range (beamwidth 0.95°).
(c) A couplet has a maximum outbound velocity of +45 m/s and a maximum inbound of −40 m/s, 1 km apart. Compute V_{rot} and the azimuthal shear.

Answers: (a) v_{N} = 0.107 × 1,000 / 4 ≈ 26.8 m/s; r_{max} = 3 × 10^{8} / 2,000 = 150 km; v_{N} r_{max} = cλ/8 ≈ 4.0 × 10^{6} m²/s. Doubling PRF doubles v_{N} but halves r_{max}. (b) h = √(r² + R'² + 2rR' sin 0.5°) − R' ≈ 1.46 km; beam width ≈ 100 km × 0.95° × π/180 ≈ 1.66 km. (c) V_{rot} = (45 − (−40)) / 2 = 42.5 m/s; azimuthal shear = 85 / 1,000 = 0.085 s^{−1} — an intense, likely tornadic circulation at that range.

─────────────────────────────────
Lesson 9: Forecasting, Watches and Warnings
─────────────────────────────────

📌 Key idea of this section:

        STP = (mlCAPE/1500) × ((2000 − mlLCL)/1000) × (ESRH/150) × (EBWD/20) × ((200 + mlCIN)/150)

Ingredients-based forecasting

Modern tornado forecasting combines the ingredients of deep convection (instability, moisture, lift) with those of supercells (deep-layer shear) and of tornadic supercells (strong low-level shear and SRH, low LCL, limited CIN, and storm mode favouring discrete or semi-discrete cells). Proximity-sounding studies (e.g. Rasmussen and Blanchard, 1998; Thompson et al., 2003) established that significant (EF2+) tornadoes are most strongly associated with 0–1 km SRH and low LCL heights (below about 1,000 m), in the presence of sufficient CAPE and 0–6 km bulk shear above about 20 m/s. Convective mode is a critical additional factor: the same environment produces many more significant tornadoes if storms are discrete than if they quickly grow upscale into lines.

Composite parameters

Composite parameters condense these ingredients into dimensionless numbers. The fixed-layer Significant Tornado Parameter (Thompson et al., 2003) is

        STP = (sbCAPE/1500 J/kg) × ((2000 − sbLCL)/1000 m) × (SRH_{0–1km}/150 m²/s²) × (BWD_{0–6km}/20 m/s)

with the LCL term set to 1 when LCL < 1,000 m and to 0 when LCL > 2,000 m, and the shear term set to 0 below 12.5 m/s and capped at 1.5 above 30 m/s. The effective-layer version (Thompson et al., 2012; shown in the key-idea line) uses mixed-layer parcels, effective-layer SRH and bulk shear, and a CIN term (set to 1 when mlCIN > −50 J/kg). The Supercell Composite Parameter (Thompson et al., 2004) is

        SCP = (muCAPE/1000) × (ESRH/50) × (EBWD/20)

with the EBWD term set to 0 below 10 m/s and capped at 1 above 20 m/s. Values of STP above 1 indicate an environment increasingly supportive of significant tornadoes in the presence of supercells; most violent tornadoes occur with STP above 3–4. These parameters are diagnostic of environment only — they say nothing about whether storms will form, and they are frequently misapplied when storms are elevated or when convective mode is linear.

Numerical guidance and the outlook-watch-warning chain

Convection-allowing models with grid spacing of about 3 km (e.g. HRRR, NAM 3 km, the High-Resolution Ensemble Forecast) explicitly simulate storms and provide "surrogate severe" fields such as updraft helicity, the vertical integral of w ζ over 2–5 km (or 0–3 km), whose extremes indicate simulated rotating storms. The NOAA Storm Prediction Center (SPC) issues convective outlooks up to 8 days ahead, with Day 1–2 probabilistic tornado forecasts (2, 5, 10, 15, 30, 45 and 60% within 25 miles of a point) and hatched areas for significant tornadoes; mesoscale discussions; and tornado watches, typically valid for 4–8 hours over tens of thousands of square kilometres, sometimes labelled "particularly dangerous situation" (PDS). Local NWS forecast offices issue tornado warnings for storm-based polygons (since October 2007), based on radar, spotter and public reports, now often with impact-based tags ("considerable" damage threat) and, for confirmed large tornadoes threatening populated areas, a tornado emergency — first used by the NWS in Norman, Oklahoma, on 3 May 1999.

Warning performance

Warning skill is measured with a 2 × 2 contingency table of hits (H), misses (M) and false alarms (F):

        POD = H / (H + M);   FAR = F / (H + F);   CSI = H / (H + M + F)

From the mid-1980s to the early 2010s the NWS increased the probability of detection of tornadoes to roughly 0.7–0.75 and the mean lead time (with unwarned tornadoes counted as zero) to around 13–14 minutes, while the false alarm ratio stayed near 0.75. Since about 2012, efforts to reduce false alarms have lowered FAR modestly at the cost of lower POD and lead time (Brooks and Correia, 2018). Performance is markedly worse for QLCS, tropical-cyclone and nocturnal tornadoes, and for weak tornadoes generally. The NOAA Warn-on-Forecast programme aims to extend lead times to tens of minutes or more through rapidly updating, radar-assimilating, convection-allowing ensembles (the WoFS system), and the FACETs paradigm envisages continuously updated probabilistic hazard information rather than binary warnings.

Social and behavioural dimensions

A warning is effective only if it is received, understood, believed and acted upon. Research on Joplin 2011 and other events shows that many people seek confirmation (visual, social media, sirens) before sheltering, that repeated false alarms can reduce response, and that nocturnal tornadoes, mobile homes, language barriers and lack of access to shelters drive casualties. Sirens are outdoor warning devices and are not designed to be heard indoors.

✏️ Your Turn

(a) Compute the fixed-layer STP for sbCAPE = 2,500 J/kg, sbLCL = 800 m, 0–1 km SRH = 250 m²/s² and 0–6 km shear = 25 m/s.
(b) Compute SCP for muCAPE = 3,000 J/kg, ESRH = 300 m²/s² and EBWD = 25 m/s.
(c) In one season a forecast office records 60 warned tornadoes, 40 unwarned tornadoes and 140 warnings without a tornado. Compute POD, FAR and CSI.

Answers: (a) CAPE term 2,500/1,500 = 1.667; LCL term = 1 (LCL < 1,000 m); SRH term 250/150 = 1.667; shear term 25/20 = 1.25. STP ≈ 1.667 × 1 × 1.667 × 1.25 ≈ 3.5 — strongly supportive of significant tornadoes if discrete supercells form. (b) SCP = 3.0 × 6.0 × 1 (capped) = 18. (c) POD = 60/100 = 0.60; FAR = 140/200 = 0.70; CSI = 60/240 = 0.25.

─────────────────────────────────
Lesson 10: Climatology, Trends, Vulnerability and Engineering
─────────────────────────────────

📌 Key idea of this section:

        Risk = hazard × exposure × vulnerability;   point strike probability ≈ (N × ā) / A

Climatology of the United States

The US averaged about 1,200 tornadoes per year over recent decades, although the reported count roughly doubled between the 1950s and 1990s mostly because of improved reporting of weak tornadoes, so trends in raw counts are meaningless. The Great Plains ("Tornado Alley", from northern Texas through Oklahoma and Kansas to Nebraska) has its peak in May and June; the lower Mississippi and Tennessee Valleys ("Dixie Alley") have a broader season with peaks in spring and a secondary maximum in late autumn and winter, and many tornadoes there are nocturnal, fast-moving, rain-wrapped and associated with high-shear, low-CAPE environments. Florida has a high density of weak tornadoes and waterspouts. The geography is explained by the juxtaposition of the Gulf of Mexico moisture source, the elevated mixed layer from the west, and strong upper-level jets crossing the Rockies.

Global climatology

Canada records on the order of 60–100 confirmed tornadoes per year, but the Northern Tornadoes Project (since 2017) has shown that many forest tornadoes were previously missed. Europe has roughly 300 tornadoes per year over land, plus many waterspouts (Groenemeijer and Kühne, 2014), and has suffered violent tornadoes (e.g. the Hodonín tornado in Czechia, 24 June 2021, rated F4/IF4, which killed 6 people). Argentina, southern Brazil and Uruguay form South America's tornado corridor. Bangladesh and eastern India experience deadly pre-monsoon (March–May) tornadoes, embedded in "nor'wester" (kalbaishakhi) storms; though fewer in number, they produce the highest death tolls in the world because of extreme population density and weak housing.

Trends and climate change

Since the 1950s, the annual number of F1/EF1-and-stronger tornadoes in the US shows no significant trend. However, the number of days with tornadoes has decreased while the number of days with many tornadoes has increased: tornado occurrence has become more clustered and variable (Brooks et al., 2014). There has also been a statistically significant eastward shift in tornado activity, with decreases in parts of the southern Plains and increases in the Mid-South and Midwest (Gensini and Brooks, 2018). Climate models project increases in CAPE and modest decreases in deep shear over the US; the net effect is an increase in the frequency of environments favourable for severe convection, particularly in spring (Diffenbaugh et al., 2013). The IPCC AR6 assesses low confidence in past trends of tornado frequency and intensity, because of observational limitations and the small scale of the phenomenon.

Vulnerability

Tornado mortality is controlled by vulnerability as much as by hazard. In the US, mobile/manufactured homes house roughly 6% of the population but account for roughly 40–50% of tornado deaths in recent decades (Ashley, 2007). Nocturnal tornadoes are about a quarter of all tornadoes but cause around 40% of deaths, partly because people are asleep and visual cues are absent. The southeastern US combines these factors with long, forested tracks and poverty, which explains its disproportionate fatalities. Per-capita US tornado mortality fell steeply from the 1920s to the 1990s, owing to forecasting, warning and communication, but has not continued to fall since, and 2011 showed that well-warned outbreaks can still kill hundreds.

Point probability

For an area A that experiences N tornadoes per year with mean damage area ā, the annual probability that a given point is struck by damaging winds is approximately N ā / A. Such probabilities are the basis of the tornado design loads introduced into the US building standard ASCE 7-22 (Chapter 32), which applies to Risk Category III and IV buildings (e.g. schools, hospitals, emergency facilities) in the tornado-prone region of the central and eastern US.

Engineering and safe rooms

The leading cause of residential failure in EF1–EF3 winds is a weak load path: roofs lifted off because of toe-nailed rafters, inadequately anchored walls, failure of garage doors leading to internal pressurisation, and debris impact. Simple measures (hurricane straps or clips, anchor bolts with large washers, rated garage doors, proper sheathing nailing) can raise resistance from roughly EF1 to EF2–EF3 levels at modest cost. After the 2013 tornado, the city of Moore, Oklahoma, became the first US municipality to adopt a residential code with a 135 mph design wind speed (2014). For life safety in violent tornadoes, the standard is a safe room or storm shelter: FEMA P-361 and the ICC 500 standard specify design wind speeds up to 250 mph in the most tornado-prone areas and debris-impact resistance to a 15 lb (6.8 kg) 2×4 timber missile travelling horizontally at 100 mph against walls and doors (and at 67 mph, falling vertically, against roofs). The NIST investigation of Joplin (2014) recommended nationally accepted tornado-resistant design standards and shelters in critical facilities, contributing to ASCE 7-22.

✏️ Your Turn

(a) A region of 100,000 km² records 60 tornadoes per year with a mean damage area of 0.5 km². Estimate the annual point-strike probability and the mean return period.
(b) If manufactured homes house 6% of the population but account for 45% of tornado deaths, what is the relative risk of death for occupants of manufactured homes compared with other residents?
(c) Compute the kinetic energy and momentum of the ICC 500 / FEMA P-361 test missile.

Answers: (a) P ≈ 60 × 0.5 / 100,000 = 3 × 10^{−4} per year — a mean return period of about 3,300 years for any single point, even though the region as a whole is struck every few days in season. (b) Relative risk = (0.45 / 0.06) / (0.55 / 0.94) = 7.5 / 0.585 ≈ 13. (c) m = 6.8 kg, v = 44.7 m/s: KE = ½ × 6.8 × 44.7² ≈ 6,800 J; momentum ≈ 304 kg·m/s.

═════════════════════════════════════════════
Case Studies
═════════════════════════════════════════════

The following events were chosen because each illustrates a physical process, an observational advance or a lesson in vulnerability and warning. Death tolls and path lengths are given as currently accepted by the responsible agencies or the principal reanalyses; where figures differ between sources, ranges are stated. Ratings before 2007 are on the original Fujita scale, and those before about 1970 were assigned retrospectively.

1925 Tri-State Tornado, Missouri–Illinois–Indiana

On 18 March 1925 a tornado touched down in Shannon County, Missouri, shortly after 1 p.m. local time and travelled east-northeast across southern Illinois into southwestern Indiana, where it dissipated around 4:30 p.m. — about three and a half hours later. The traditional path length of 219 miles (352 km) implies a mean forward speed near 60 mph (about 27 m/s), with peaks above 70 mph. The tornado killed 695 people and injured more than 2,000, making it the deadliest tornado in US history; the town of Murphysboro, Illinois, alone lost 234 residents, the largest toll from a single tornado in any one US community. It was rated F5 retrospectively by Grazulis.

For decades it was debated whether this was one tornado or a family of tornadoes produced by a single supercell. Johns et al. (2013) reanalysed newspapers, survey records and contemporary weather maps and concluded that the tornado was very probably continuous for at least 174 miles (280 km) and possibly longer than the traditional figure, embedded in a fast-moving, possibly HP supercell near the warm-sector side of a deepening surface cyclone. The rain-wrapped, low-visibility character of the tornado, the absence of any forecast or warning (the word "tornado" was then discouraged in US Weather Bureau forecasts), poorly built rural and mining-town housing and the very rapid translation all contributed to the toll. The event remains the archetype of the long-track, fast-moving, rain-wrapped killer tornado, a type that warning systems still find challenging.

1974 Super Outbreak, central and eastern USA

On 3–4 April 1974 an intense, negatively tilted upper trough and a strong mid-level jet over the Ohio and Tennessee Valleys produced 148 tornadoes in about 18 hours in thirteen US states and the Canadian province of Ontario. At least 30 were violent (F4–F5), seven of them F5, an unprecedented concentration of violent tornadoes; families of long-track tornadoes formed from discrete supercells organised in several parallel bands. Published death tolls range from about 315 to about 335, depending on the source and on how indirect deaths are counted, with more than 5,000 injured. Xenia, Ohio, struck by an F5 that killed about 32 people, became an emblem of the outbreak.

Scientifically, the outbreak is significant for Fujita's comprehensive aerial survey, which mapped every track, documented cycloidal suction-vortex swaths (evidence of multiple-vortex structure), and revealed starburst patterns of tree-fall that led him to propose the downburst concept. The event exposed gaps in warning dissemination and spurred expansion of NOAA Weather Radio. A reanalysis by Corfidi et al. (2010) showed that a numerical model initialised with modern techniques could reproduce the synoptic setting well, illustrating the predictability of outbreak environments at day-ahead lead times, in contrast to the limited predictability of individual tornadoes.

1989 Daulatpur–Saturia Tornado, Bangladesh

On the evening of 26 April 1989 (local time) a tornado struck Manikganj District, west of Dhaka, hitting Daulatpur and Saturia (also spelled Daultipur and Salturia) hardest. It is generally considered the deadliest tornado in recorded history: the World Meteorological Organization's estimate is about 1,300 deaths and 12,000 injured, with roughly 80,000 people left homeless, although the death toll is very uncertain. Accounts describe a path of roughly 80 km and a width of up to about 1.5 km, within which nearly all houses and trees were destroyed, but no systematic engineering survey was made and the tornado has no reliable intensity rating.

The meteorological setting is typical of the pre-monsoon season over Bangladesh and eastern India: very moist low-level southerly flow from the Bay of Bengal beneath dry westerlies aloft from the Indian subcontinent, producing large CAPE beneath a cap, with strong deep shear from the subtropical jet. These "nor'wester" environments resemble those of the US Plains. The extreme lethality arises from population densities that exceed 1,000 people per km², houses of tin sheets, bamboo and mud that offer almost no protection, and the absence of an operational tornado warning service. Studies of South Asian tornadoes emphasise that, unlike in the US, community shelters and warning dissemination are effectively absent, so that a single strong tornado can kill hundreds.

1999 Bridge Creek–Moore Tornado, Oklahoma

The 3 May 1999 outbreak produced about 70 tornadoes in Oklahoma and Kansas in an environment with CAPE around 4,000–5,000 J/kg and strong low-level SRH, although the day's convective initiation was poorly forecast. The most destructive tornado developed southwest of Oklahoma City near Amber, passed through Bridge Creek, and then crossed suburban Moore and southern Oklahoma City over a track of about 38 miles (61 km), lasting about 85 minutes. It killed 36 people and damaged or destroyed thousands of homes, with damage of about US$1 billion (1999 dollars), making it at the time the costliest tornado in US history.

A Doppler on Wheels truck scanning the tornado near Bridge Creek measured Doppler velocities of about 135 m/s (301 ± 20 mph) at roughly 30 m above ground, then the highest wind speed ever measured near Earth's surface (Wurman et al., 2007). The tornado was rated F5. Warnings were issued well in advance for most communities; the NWS office in Norman issued the first-ever "tornado emergency" as the tornado approached Moore and Oklahoma City. Post-event engineering surveys (FEMA, ASCE and Texas Tech) found that many houses in the F4–F5 zones had failed because of poor connections — roofs and walls not anchored to foundations — rather than winds exceeding any plausible design, a finding that strongly influenced the later Enhanced Fujita scale. People sheltering beneath highway overpasses were killed or badly injured, demonstrating that overpasses accelerate rather than shelter from tornado winds and debris.

2011 Super Outbreak and the Joplin Tornado, USA

The 25–28 April 2011 outbreak produced about 360 tornadoes, more than 200 of them on 27 April alone, the largest daily total on record. Four tornadoes on 27 April were rated EF5 (Hackleburg–Phil Campbell, Smithville and Rainsville in Alabama and Mississippi, and Philadelphia, Mississippi). The outbreak killed about 320 people, more than 230 of them in Alabama, and caused roughly US$10–11 billion in damage. The Hackleburg–Phil Campbell EF5 killed 72 people over a path of about 130 miles (210 km), and the Tuscaloosa–Birmingham EF4 killed 64 over a path of about 80 miles (130 km). The environment featured extreme low-level and deep shear, ample CAPE and very low LCLs; SPC issued a high-risk outlook and PDS watches, and warning lead times were on average more than 20 minutes. The death toll despite good warnings — many victims were in homes with no below-ground space or in manufactured homes — prompted a re-examination of shelter availability in the Southeast.

Less than a month later, on 22 May 2011, an EF5 tornado struck Joplin, Missouri. It developed on the southwestern edge of the city at about 5:34 p.m. local time and crossed densely built residential and commercial areas over a path of about 22 miles (35 km) with a maximum width close to a mile. The tornado killed 158 people directly (161 counting indirect deaths), the deadliest single US tornado since 1947, injured more than 1,000, and caused damage of roughly US$2.8 billion, the costliest single tornado in US history. St. John's Regional Medical Center was severely damaged and later demolished. The tornado was rain-wrapped and intensified rapidly as it entered the city. A tornado warning had been issued about 17 minutes before touchdown and outdoor sirens sounded, but social-science studies for the NWS Service Assessment found that many residents sought confirmation and did not perceive the threat as imminent. NIST's technical investigation (2014) found that no building in the city had been designed to resist tornado loads and that refuge areas in large buildings were often poorly sited; its recommendations helped lead to tornado provisions in ASCE 7-22. The 2011 calendar year saw about 550 US tornado deaths (551–553 depending on the count), comparable to 1936 and second only to 1925 in the US record.

2013 El Reno Tornado, Oklahoma

On 31 May 2013 a supercell west of Oklahoma City produced a tornado near El Reno that, at its peak, had a damage and Doppler-velocity width of about 2.6 miles (4.2 km), the widest tornado ever documented. Mobile Doppler radars, including RaXPol and the Doppler on Wheels, observed an exceptionally complex multiple-vortex structure, with subvortices moving at very high translation speeds within the broad parent circulation and RaXPol measured Doppler velocities exceeding about 135 m/s (≈ 300 mph) in subvortices a short distance above ground — comparable to the 1999 Bridge Creek record. The parent vortex also changed its forward speed and direction abruptly.

Because the tornado tracked mainly over open farmland with few damage indicators, the NWS, after briefly upgrading it to EF5 in June 2013 on the basis of the mobile radar data, reverted to a final EF3 rating on 30 August 2013 on the basis of the observed damage. The case is now the standard illustration of the difference between radar-measured winds aloft and damage-based ratings at 10 m. The tornado killed eight people, most of them in vehicles, including three experienced storm researchers of the TWISTEX team (Tim Samaras, Paul Samaras and Carl Young) — the first known deaths of storm chasers in a tornado. Thousands of residents of Oklahoma City attempted to flee by car, creating gridlock on interstate highways that could have produced a catastrophe had the tornado tracked over them; flash flooding in the Oklahoma City area that night killed more than a dozen additional people. The event prompted new public guidance against fleeing by car without a clear plan.

2021 Western Kentucky (Mayfield) Tornado, Tennessee–Kentucky

On the night of 10–11 December 2021, a long-lived supercell — often called the Quad-State supercell — produced a series of strong to violent tornadoes over roughly 250 miles (400 km) of Arkansas, Missouri, Tennessee and Kentucky. Its most destructive tornado touched down in northwestern Tennessee and tracked about 165 miles (266 km) across western Kentucky, through Mayfield, Princeton and Dawson Springs; it was rated EF4 with peak winds of about 190 mph (85 m/s) and killed 57 people. The tornado is among the longest-tracked in the modern record, and the outbreak as a whole killed around 90 people, the deadliest December tornado outbreak in US history. In Mayfield, the collapse of a candle factory killed 9 workers; a separate EF3 tornado in Edwardsville, Illinois, killed 6 at an Amazon distribution centre.

The environment combined record December warmth and moisture with an intense mid-level jet: CAPE of about 1,000–2,000 J/kg and extreme low-level shear produced a persistent, fast-moving discrete supercell at night. The radar presentation (see the image accompanying this course) displayed a classic hook echo, a debris ball and a TDS lofted to several kilometres, and a debris spike. Warnings were in effect well before the tornado reached most communities along the path, and tornado emergencies were issued for several of them, yet casualties remained high because of the nocturnal timing, the cool-season unfamiliarity with tornadoes, workplace sheltering decisions and manufactured housing. The event renewed scientific interest in cold-season, high-shear tornado environments and in workplace safety obligations during warnings.

2023 Rolling Fork–Silver City Tornado, Mississippi

On the evening of 24 March 2023 a supercell over the lower Mississippi Delta produced a violent tornado that devastated the small town of Rolling Fork (population about 1,900) and then Silver City. It was rated EF4 with peak winds of about 170 mph (76 m/s), travelled about 59 miles (95 km), and killed 17 people (counts differ slightly between sources on direct and indirect deaths), with more than 150 injured. Much of the destruction occurred after dark. A tornado warning was in effect, and the NWS office in Jackson upgraded it to a tornado emergency as the tornado approached the town.

The event exemplifies the Dixie Alley vulnerability profile identified in research by Ashley and others: nocturnal, rain-wrapped tornadoes, a high proportion of manufactured homes, limited access to shelters, high poverty rates and a predominantly rural, dispersed population. The tornado was well sampled by the WSR-88D network and showed a pronounced TDS, so that confirmation of a violent tornado on the ground was possible in the dark, but receipt of warnings and the availability of a sturdy place to shelter, rather than detection, were the limiting factors. Following the tornado, federal and state programmes funded community safe rooms in the Delta, illustrating the shift in policy emphasis from warning alone towards shelter access.

═════════════════════════════════════════════
References
═════════════════════════════════════════════

  1. Markowski, P., and Richardson, Y. (2010). Mesoscale Meteorology in Midlatitudes. Wiley-Blackwell.
  2. Doswell, C. A. III (Ed.) (2001). Severe Convective Storms. Meteorological Monographs, Vol. 28, No. 50. American Meteorological Society.
  3. Davies-Jones, R. (2015). A review of supercell and tornado dynamics. Atmospheric Research, 158–159, 274–291.
  4. Weisman, M. L., and Klemp, J. B. (1982). The dependence of numerically simulated convective storms on vertical wind shear and buoyancy. Monthly Weather Review, 110, 504–520.
  5. Rotunno, R., and Klemp, J. B. (1985). On the rotation and propagation of simulated supercell thunderstorms. Journal of the Atmospheric Sciences, 42, 271–292.
  6. Davies-Jones, R. (1984). Streamwise vorticity: The origin of updraft rotation in supercell storms. Journal of the Atmospheric Sciences, 41, 2991–3006.
  7. Bunkers, M. J., Klimowski, B. A., Zeitler, J. W., Thompson, R. L., and Weisman, M. L. (2000). Predicting supercell motion using a new hodograph technique. Weather and Forecasting, 15, 61–79.
  8. Thompson, R. L., Edwards, R., Hart, J. A., Elmore, K. L., and Markowski, P. (2003). Close proximity soundings within supercell environments obtained from the Rapid Update Cycle. Weather and Forecasting, 18, 1243–1261.
  9. Markowski, P. M., Straka, J. M., and Rasmussen, E. N. (2002). Direct surface thermodynamic observations within the rear-flank downdrafts of nontornadic and tornadic supercells. Monthly Weather Review, 130, 1692–1721.
  10. Wurman, J., Dowell, D., Richardson, Y., Markowski, P., Rasmussen, E., Burgess, D., Wicker, L., and Bluestein, H. B. (2012). The second Verification of the Origins of Rotation in Tornadoes Experiment: VORTEX2. Bulletin of the American Meteorological Society, 93, 1147–1170.
  11. Orf, L., Wilhelmson, R., Lee, B., Finley, C., and Houston, A. (2017). Evolution of a long-track violent tornado within a simulated supercell. Bulletin of the American Meteorological Society, 98, 45–68.
  12. Trapp, R. J., Tessendorf, S. A., Godfrey, E. S., and Brooks, H. E. (2005). Tornadoes from squall lines and bow echoes. Part I: Climatological distribution. Weather and Forecasting, 20, 23–34.
  13. Church, C. R., Snow, J. T., Baker, G. L., and Agee, E. M. (1979). Characteristics of tornado-like vortices as a function of swirl ratio: A laboratory investigation. Journal of the Atmospheric Sciences, 36, 1755–1776.
  14. Fujita, T. T. (1971). Proposed Characterization of Tornadoes and Hurricanes by Area and Intensity. SMRP Research Paper No. 91, University of Chicago.
  15. Wind Science and Engineering Center (2006). A Recommendation for an Enhanced Fujita Scale (EF-Scale). Texas Tech University, Lubbock.
  16. Wurman, J., Alexander, C., Robinson, P., and Richardson, Y. (2007). Low-level winds in tornadoes and potential catastrophic tornado impacts in urban areas. Bulletin of the American Meteorological Society, 88, 31–46.
  17. Ryzhkov, A. V., Schuur, T. J., Burgess, D. W., and Zrnić, D. S. (2005). Polarimetric tornado detection. Journal of Applied Meteorology, 44, 557–570.
  18. Brooks, H. E., and Correia, J. Jr. (2018). Long-term performance metrics for National Weather Service tornado warnings. Weather and Forecasting, 33, 1501–1511.
  19. Brooks, H. E., Carbin, G. W., and Marsh, P. T. (2014). Increased variability of tornado occurrence in the United States. Science, 346, 349–352.
  20. Gensini, V. A., and Brooks, H. E. (2018). Spatial trends in United States tornado frequency. npj Climate and Atmospheric Science, 1, 38.
  21. Ashley, W. S. (2007). Spatial and temporal analysis of tornado fatalities in the United States: 1880–2005. Weather and Forecasting, 22, 1214–1228.
  22. Grazulis, T. P. (2001). The Tornado: Nature's Ultimate Windstorm. University of Oklahoma Press.
  23. Johns, R. H., Burgess, D. W., Doswell, C. A. III, Gilmore, M. S., Hart, J. A., and Piltz, S. F. (2013). The 1925 Tri-State tornado damage path and associated storm system. Electronic Journal of Severe Storms Meteorology, 8(2).
  24. Corfidi, S. F., Weiss, S. J., Kain, J. S., Corfidi, S. J., Rabin, R. M., and Levit, J. J. (2010). Revisiting the 3–4 April 1974 Super Outbreak of tornadoes. Weather and Forecasting, 25, 465–510.
  25. National Institute of Standards and Technology (2014). Final Report, NIST NCSTAR 3: Technical Investigation of the May 22, 2011, Tornado in Joplin, Missouri. NIST, Gaithersburg, MD.

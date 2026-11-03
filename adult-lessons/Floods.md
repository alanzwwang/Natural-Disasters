Floods — An Advanced Course
══════════════════════════════════════════

Introduction
─────────────────────────────────

Floods are the most frequent natural hazard on Earth and, measured by the number of people affected, the most consequential. In the UN Office for Disaster Risk Reduction's review of the period 2000–2019, floods accounted for roughly 44% of all recorded disaster events and affected about 1.65 billion people. A flood is, at its simplest, the temporary inundation of land that is normally dry, but behind that definition sit several distinct physical systems: the atmosphere that delivers water, the soils and landscapes that partition it between storage and runoff, the channels and floodplains that convey it, the coastal ocean that can push water landwards, and the human infrastructure that is meant to control all of these and occasionally becomes the hazard itself.

This course treats floods at the level expected of a graduate student in hydrology, civil engineering or disaster risk management. It starts from the catchment water balance and the processes by which rainfall becomes runoff, develops the hydrograph and the hydraulic equations that describe flow in rivers, and then turns to the statistical methods used to estimate how often a flood of a given size should be expected. Later lessons cover forecasting and warning, structural defences such as levees and dams, the economics of flood risk and insurance, and the way a warming climate is changing both rainfall extremes and sea level. Eight case studies, from the Yellow River in the nineteenth century to Derna in 2023, show how these ideas play out when systems fail.

Throughout, numbers are given with their uncertainties. Historical death tolls for the great Chinese floods, for example, differ by an order of magnitude between sources, and peak discharges of extreme floods are usually reconstructed after the event because the gauges were destroyed. Recognising where knowledge is firm and where it is soft is itself an essential professional skill in flood science.

In this course, you will:

  1. Write and apply the catchment water balance and the main infiltration and runoff-generation models
  2. Construct flood hydrographs with the unit hydrograph and estimate design peaks with the rational method
  3. Distinguish the physical mechanisms of riverine, flash, pluvial, coastal, snowmelt, ice-jam, glacial and dam-break floods
  4. Use continuity, Manning's equation and the Froude number to describe open-channel flow and flood routing
  5. Carry out a basic flood frequency analysis and explain return periods, exceedance probabilities and non-stationarity
  6. Evaluate forecasting and warning systems, structural defences and the "levee effect"
  7. Quantify flood risk as expected annual damage and discuss insurance and floodplain policy
  8. Summarise the evidence for how climate change is altering flood hazard

─────────────────────────────────
Lesson 1: The Hydrological Cycle and the Catchment Water Balance
─────────────────────────────────

📌 Key idea of this section:

        P = ET + Q + ΔS        (precipitation = evapotranspiration + runoff + change in storage)

The global water cycle

The atmosphere holds only about 12,700 km³ of water at any moment, roughly 0.001% of the water on the planet, yet it moves an enormous flux. Estimates by Trenberth and colleagues (2007) put annual precipitation over the land at about 113,000 km³ and evapotranspiration from the land at about 73,000 km³; the difference, about 40,000 km³ per year, returns to the sea as river discharge and groundwater outflow, balanced by a net transport of water vapour from ocean to land. Dividing atmospheric storage by the global precipitation flux of roughly 490,000 km³ per year gives a mean residence time for atmospheric water of only about 9–10 days. Floods are the result of this rapid recycling becoming locally concentrated: a single atmospheric river or a stalled convective system can deliver in a day what a region normally receives in a month or more.

The catchment as a control volume

Hydrologists analyse floods within a catchment (drainage basin, watershed): the area of land draining to a given point on a river. Applying conservation of mass to this control volume over any time interval gives the water balance. Precipitation P is partitioned into evapotranspiration ET, streamflow Q leaving through the outlet, and a change in storage ΔS in snowpack, soil moisture, groundwater, lakes and channels. Over long periods ΔS tends to zero and the ratio Q/P, the runoff ratio, characterises the climate and landscape. Over the hours or days of a flood, by contrast, ET is small and the essential question is how much of the storm's precipitation goes into storage and how much leaves rapidly as quickflow.

        Long-term:   P − ET ≈ Q          Storm event:   P ≈ Q_{quick} + ΔS_{soil} + ΔS_{surface}

Units and conversions

Flood hydrology constantly converts between depths over an area and volumes or rates. A depth of 1 mm over 1 km² is 1,000 m³. A discharge of 1 m³/s sustained for a day is 86,400 m³, equivalent to 86.4 mm over 1 km². In US practice, discharges are given in cubic feet per second (1 m³/s ≈ 35.31 ft³/s) and volumes in acre-feet (1 acre-foot ≈ 1,233.5 m³). Precipitation is measured by gauges (with undercatch errors of several percent to more than 10% in windy conditions, especially for snow), by weather radar and by satellites such as the Global Precipitation Measurement mission; discharge is almost never measured directly but is inferred from water level (stage) through a rating curve, a point we return to in Lesson 5.

Antecedent conditions

The same storm can produce a trivial or a catastrophic flood depending on the state of the catchment beforehand. Soil moisture, groundwater level, the presence of a snowpack and frozen ground all control how much new rainfall can be absorbed. The Mississippi floods of 1927 and 1993 and the Central European floods of 2002 and 2013 all followed prolonged wet periods that left soils saturated before the decisive rains. Antecedent wetness is often summarised by indices such as an antecedent precipitation index, by soil-moisture accounting within a model, or, increasingly, by satellite soil-moisture retrievals.

✏️ Your Turn

(a) A catchment of 500 km² receives a mean annual precipitation of 900 mm and loses 550 mm to evapotranspiration. Assuming no long-term change in storage, find the runoff ratio and the mean annual discharge at the outlet in m³/s.
(b) A storm deposits 100 mm of rain over a 50 km² sub-catchment. What volume of water is that, and how long would a channel carrying 100 m³/s take to remove it if all of it ran off?

Answers: (a) Q = 900 − 550 = 350 mm, so the runoff ratio is 350/900 ≈ 0.39. The annual volume is 0.35 m × 500 × 10⁶ m² = 1.75 × 10⁸ m³; dividing by 3.156 × 10⁷ s per year gives a mean discharge of about 5.5 m³/s. (b) 0.1 m × 50 × 10⁶ m² = 5 × 10⁶ m³. At 100 m³/s this takes 5 × 10⁴ s, about 14 hours, which is why even a moderate storm can keep a small river in flood for most of a day.

─────────────────────────────────
Lesson 2: Infiltration and Runoff Generation
─────────────────────────────────

📌 Key idea of this section:

        Overland flow forms when rainfall exceeds infiltration capacity (Hortonian) or falls on already saturated ground (saturation excess)

Infiltration capacity and Horton's equation

Infiltration is the entry of water through the soil surface. Its maximum rate under given conditions, the infiltration capacity f, declines during a storm as the near-surface soil wets up, pores fill and surface crusts form. Robert Horton described this decay empirically in the 1930s:

        f(t) = f_{c} + (f_{0} − f_{c}) e^{−kt}

where f₀ is the initial capacity, f_c the final, near-constant capacity (close to the saturated hydraulic conductivity) and k a decay constant. Integrating gives the cumulative infiltration F(t) = f_c t + (f₀ − f_c)(1 − e^{−kt})/k. Typical values of f_c range from more than 10 mm/h on sandy soils to below 1 mm/h on clays, while compacted, crusted or sealed urban surfaces approach zero.

The Green–Ampt model

A more physically based approach, due to Green and Ampt (1911), idealises the wetting front as a sharp boundary moving downward. If K_s is the saturated hydraulic conductivity, ψ the suction head at the wetting front and Δθ the increase in volumetric water content, the infiltration rate is

        f = K_{s} (1 + ψ Δθ / F)

so that f is very large when little water has entered (F small) and approaches K_s as F grows. Green–Ampt parameters have been tabulated for soil texture classes and the model remains widely used in event-based modelling.

Two ways to make overland flow

Horton argued that storm runoff is produced when rainfall intensity exceeds infiltration capacity, so that the excess flows over the surface across the whole hillslope. Infiltration-excess (Hortonian) overland flow is indeed dominant on semi-arid hillslopes, on bare or crusted agricultural soils, on burned land after wildfire and in cities. Field work in humid, vegetated catchments in the 1960s and 1970s, however, found that such soils usually infiltrate rain faster than it falls. Hewlett and Hibbert (1967) proposed the variable source area concept, and Dunne and Black (1970) showed in Vermont that storm runoff came mostly from saturation-excess overland flow: rain falling on areas near streams and in hollows where the water table had risen to the surface, plus return flow of subsurface water emerging there. The contributing area expands and contracts with catchment wetness, which is the physical reason antecedent conditions matter so much. Subsurface stormflow through macropores and pipes, and the rapid displacement of stored "old" water (revealed by isotope tracers, which often show that most storm hydrograph water is pre-event water), complete the picture.

The SCS Curve Number method

Engineering practice frequently uses the empirical method developed by the US Soil Conservation Service (now the Natural Resources Conservation Service). Direct runoff depth Q is related to rainfall depth P by

        Q = (P − I_{a})² / (P − I_{a} + S)      for P > I_{a},     I_{a} = 0.2 S,     S = 25400/CN − 254   (mm)

where S is a potential maximum retention and CN, the curve number (between about 30 and 100), is tabulated by soil group, land use and antecedent moisture condition. The method is simple, but it is not a physical model of infiltration, and the 0.2 ratio for initial abstraction is now regarded by many as too large; values near 0.05 fit many data sets better.

✏️ Your Turn

(a) A soil has Horton parameters f₀ = 75 mm/h, f_c = 10 mm/h and k = 4 h⁻¹. What is the infiltration capacity after 30 minutes, and the cumulative infiltration capacity over the first hour?
(b) Using the Curve Number method with CN = 80, how much direct runoff does a 100 mm storm produce?

Answers: (a) f(0.5 h) = 10 + 65 e^{−2} = 10 + 8.8 ≈ 18.8 mm/h. F(1 h) = 10 × 1 + (65/4)(1 − e^{−4}) = 10 + 16.25 × 0.982 ≈ 26.0 mm. Any rain arriving faster than these capacities becomes infiltration-excess runoff. (b) S = 25400/80 − 254 = 63.5 mm and I_a = 12.7 mm, so Q = (100 − 12.7)²/(100 − 12.7 + 63.5) = 87.3²/150.8 ≈ 50.5 mm, a runoff coefficient of about 0.5 for this storm.

─────────────────────────────────
Lesson 3: Hydrographs, the Unit Hydrograph and the Rational Method
─────────────────────────────────

📌 Key idea of this section:

        Q_{n} = Σ P_{m} U_{n−m+1}        (direct runoff is the convolution of effective rainfall with the unit hydrograph)

Anatomy of a hydrograph

A flood hydrograph plots discharge against time at a point. It has a rising limb, a peak and a falling (recession) limb, superimposed on baseflow sustained by groundwater. Key time scales are the lag time (usually measured from the centroid of effective rainfall to the peak), the time to peak and the time of concentration t_c, the travel time from the hydraulically most distant point of the catchment to the outlet. Small, steep, impervious catchments have t_c of minutes; the lower Mississippi integrates rainfall over weeks. The shape of the hydrograph also depends on catchment geometry: an elongated basin attenuates the peak, a round basin with converging tributaries concentrates it.

Sherman's unit hydrograph

In 1932 L. K. Sherman introduced the unit hydrograph: the direct-runoff hydrograph produced by one unit (for example 1 mm or 1 inch) of effective rainfall falling uniformly over the catchment in a specified duration D. If the catchment responds linearly and time-invariantly, the response to any sequence of effective rainfall pulses P₁, P₂, … is the sum of appropriately lagged and scaled unit hydrographs, which is the discrete convolution in the key idea above. Unit hydrographs can be derived from observed storm events, or synthesised for ungauged basins (Snyder's method, the SCS dimensionless and triangular unit hydrographs, Clark's time–area method with a linear reservoir). The SCS triangular unit hydrograph has a peak of approximately

        q_{p} ≈ 0.208 A / t_{p}        (m³/s per mm of runoff, A in km², time to peak t_{p} in hours)

The linearity assumption is the method's main weakness: real catchments respond faster and more strongly in large storms, as velocities rise and contributing areas expand.

The rational method

For small urban catchments and drainage design, the rational method (credited to Mulvaney in Ireland in the 1850s and to Kuichling in the United States in 1889) estimates the peak discharge as

        Q = C i A        (US units: Q in ft³/s, i in in/h, A in acres)
        Q = 0.278 C i A  (SI: Q in m³/s, i in mm/h, A in km²)

where C is a dimensionless runoff coefficient (about 0.7–0.95 for pavement and roofs, 0.1–0.3 for lawns and woodland) and i is the rainfall intensity for a duration equal to the time of concentration, taken from an intensity–duration–frequency (IDF) curve at the design return period. Its logic is that the peak occurs when the entire catchment is contributing. It is usually restricted to areas below a few square kilometres. Time of concentration is commonly estimated from empirical formulas such as Kirpich's, or by summing travel times along overland, shallow-concentrated and channel flow paths.

✏️ Your Turn

(a) A 2 km² urban catchment has C = 0.7 and a 10-year design rainfall intensity of 50 mm/h for a duration equal to its time of concentration. Estimate the design peak discharge.
(b) The 1-hour unit hydrograph of a catchment has ordinates 2, 5, 3 and 1 m³/s per mm at hours 1–4. Effective rainfall is 10 mm in the first hour and 20 mm in the second. Find the direct-runoff hydrograph, and check that its volume equals the effective rainfall over the catchment.

Answers: (a) Q = 0.278 × 0.7 × 50 × 2 ≈ 19.4 m³/s. (b) Convolving: hour 1: 10 × 2 = 20; hour 2: 10 × 5 + 20 × 2 = 90; hour 3: 10 × 3 + 20 × 5 = 130; hour 4: 10 × 1 + 20 × 3 = 70; hour 5: 20 × 1 = 20 m³/s. Total volume = (20 + 90 + 130 + 70 + 20) × 3600 = 1.188 × 10⁶ m³. The unit hydrograph contains 11 × 3600 = 39,600 m³ per mm, implying an area of 39.6 km²; 30 mm over 39.6 km² is 1.188 × 10⁶ m³, so the volumes agree.

─────────────────────────────────
Lesson 4: Types of Floods and Their Generating Mechanisms
─────────────────────────────────

📌 Key idea of this section:

        Flood type is set by the water source and the time scale: from minutes (flash, dam-break) to months (large river basins)

Riverine (fluvial) floods

Riverine floods occur when channel capacity is exceeded and water spreads onto the floodplain. In large basins they result from weeks of widespread rain, often enhanced by snowmelt, and develop slowly enough to be forecast days to weeks ahead. Their hazard lies in extent and duration rather than speed: the 1993 Upper Mississippi flood kept some areas under water for months. Meteorologically, many of the largest mid-latitude river floods are linked to atmospheric rivers, long filaments of intense water-vapour transport, or to slow-moving cut-off lows; in South and East Asia they are tied to the monsoon and to tropical cyclones.

Flash floods

A flash flood is one that rises within about six hours of the causative rain (a common operational definition) or of a dam or ice-jam failure. Flash floods are generated by intense convective rainfall, often from quasi-stationary or back-building thunderstorm systems, falling on steep, small catchments, urban surfaces, burned land or arid terrain with low infiltration. Velocities of several metres per second and heavy debris loads make them disproportionately deadly; in the United States, a large share of flood deaths occur in vehicles driven into flooded roads. The 1976 Big Thompson flood in Colorado (around 144 deaths) and the 2021 Ahr valley flood are classic examples.

Pluvial and urban floods

Pluvial flooding occurs when intense rain overwhelms drainage before water ever reaches a river. Urbanisation increases runoff volume and peak and shortens lag time; storm sewers are typically designed only for 2- to 10-year events. Flooding in Zhengzhou in July 2021, when a station recorded 201.9 mm in a single hour, and repeated cloudburst flooding in Copenhagen (2011) and New York (2021, the remnants of Hurricane Ida) illustrate the vulnerability of dense cities.

Coastal floods and storm surge

Coastal flooding combines astronomical tide, storm surge, wave setup and runup, and long-term sea level. Surge has two main components. The inverse-barometer effect raises sea level by about 1 cm for every hectopascal of pressure deficit. Wind setup arises when onshore wind stress piles water against the coast; in a simple steady balance across a shelf of depth h,

        dη/dx = τ / (ρ g h),        τ = ρ_{a} C_{d} U²

so setup is largest over broad, shallow shelves (the North Sea, the Bay of Bengal, the northern Gulf of Mexico). Compound floods occur when coastal surge and heavy rainfall or high river flow coincide, blocking drainage; Wahl et al. (2015) showed that the joint probability of such events has risen at several major US cities.

Snowmelt and ice-jam floods

Snowmelt floods depend on the snow water equivalent of the pack and on the energy available for melt, often approximated by a degree-day model M = DDF × (T − T₀) with DDF typically 3–8 mm per °C per day for snow. Rain-on-snow events, in which warm rain falls on a ripe pack, can produce exceptional floods. Ice jams form during freeze-up or break-up when ice floes accumulate at constrictions or bends, raising water levels upstream sharply and releasing a surge when they fail; northern rivers in Canada, Russia and Alaska are particularly affected.

Glacial lake outburst floods

Glacial lake outburst floods (GLOFs) occur when moraine- or ice-dammed lakes drain suddenly through dam failure, often triggered by ice or rock avalanches into the lake. In Iceland, subglacial volcanic and geothermal melting produces jökulhlaups; the 1996 Grímsvötn jökulhlaup reached a peak of the order of 45,000–50,000 m³/s. The late-Pleistocene Missoula floods, which repeatedly drained a glacial lake across what is now eastern Washington, had estimated peaks of the order of 10⁷ m³/s and carved the Channeled Scablands. The October 2023 outburst of South Lhonak Lake in Sikkim, India, destroyed the Teesta III hydropower dam downstream.

Dam-break floods

Dam failures release stored water in a wave whose peak can exceed any natural flood on the same river by an order of magnitude. Earthen dams fail most often by overtopping (when spillway capacity is inadequate) and by internal erosion (piping). The idealised dam-break problem on a dry, frictionless bed has an analytical solution due to Ritter (1892): the front advances at 2√(g h₀) and the flow at the dam site settles at a depth of 4h₀/9, where h₀ is the initial reservoir depth. Real dam breaks are far more complex, but the scaling with √(g h₀) explains why the waves are so fast.

✏️ Your Turn

(a) Estimate the inverse-barometer contribution to surge in the eye of a storm with a central pressure of 960 hPa, relative to an ambient pressure of 1013 hPa.
(b) A sustained onshore wind of 30 m/s blows across a shelf 100 km wide with a mean depth of 20 m. Using ρ_a = 1.2 kg/m³, C_d = 2.5 × 10⁻³ and ρ = 1025 kg/m³, estimate the steady wind setup at the coast.
(c) A snowpack covering 300 km² melts at a degree-day factor of 4 mm/°C/day under a mean air temperature 8 °C above the melt threshold for 5 days. What mean meltwater discharge does this produce, ignoring losses?

Answers: (a) A deficit of 53 hPa gives about 53 cm. (b) τ = 1.2 × 2.5 × 10⁻³ × 30² = 2.7 Pa. Setup η ≈ τL/(ρgh) = 2.7 × 10⁵ / (1025 × 9.81 × 20) ≈ 1.3 m. Doubling the shelf width or halving its depth doubles the setup. (c) Melt = 4 × 8 × 5 = 160 mm. Volume = 0.16 × 300 × 10⁶ = 4.8 × 10⁷ m³, which over 5 × 86,400 s is a mean discharge of about 111 m³/s.

─────────────────────────────────
Lesson 5: Open-Channel Hydraulics and Flood Routing
─────────────────────────────────

📌 Key idea of this section:

        Q = A V,     V = (1/n) R^{2/3} S^{1/2},     Fr = V / √(g D)

Continuity and uniform flow

Discharge is the product of the cross-sectional flow area A and the mean velocity V. For steady, uniform flow, in which gravity is balanced by boundary friction, the velocity is commonly estimated with Manning's equation, given above in SI units; in US customary units the coefficient 1/n becomes 1.49/n. Here R = A/P is the hydraulic radius (area divided by wetted perimeter), S the friction slope (equal to the bed slope in uniform flow) and n Manning's roughness coefficient, about 0.03–0.04 for natural clean channels and 0.05–0.15 or more for vegetated floodplains. The Chézy equation V = C√(RS) is the older equivalent. Because floodplains are much rougher and shallower than the main channel, compound channels are analysed by dividing the section into sub-areas, and floodplain velocities are typically far lower than those in the channel.

The Froude number and flow regime

The Froude number Fr = V/√(gD), where D is the hydraulic depth (A divided by top width), compares flow velocity to the speed of small surface gravity waves. Flow is subcritical (Fr < 1) in most lowland rivers, so disturbances propagate upstream and water levels are controlled from downstream; it is supercritical (Fr > 1) on steep reaches, spillways and in flash floods, where control is from upstream. A transition from supercritical to subcritical flow produces a hydraulic jump, a highly turbulent and erosive feature exploited in stilling basins below spillways.

Stage, discharge and rating curves

At a gauging station, discharge is measured occasionally by current meter or acoustic Doppler current profiler, and a rating curve of the form Q = a(h − h₀)^{b} is fitted to relate it to stage h. During extreme floods, ratings must be extrapolated far beyond measured flows, the channel may scour or aggrade, and hysteresis appears (discharge is higher on the rising limb than on the falling limb at the same stage). Extreme flood peaks are therefore often reconstructed after the event by slope–area or indirect methods using high-water marks, with uncertainties of 20–50% not unusual.

The Saint-Venant equations

Unsteady, gradually varied flow in a channel is governed by the one-dimensional Saint-Venant equations, expressing conservation of mass and momentum:

        ∂A/∂t + ∂Q/∂x = q_{lat}
        ∂Q/∂t + ∂(Q²/A)/∂x + g A ∂h/∂x = g A (S_{0} − S_{f})

Dropping terms gives a hierarchy of approximations. The kinematic wave retains only the balance of bed slope and friction; for a wide channel obeying Manning's equation its celerity is c = (5/3)V, so a flood wave moves faster than the water itself. The diffusion wave adds the pressure-gradient term and allows attenuation; the full dynamic wave is needed where backwater effects, tides or rapid changes matter. Two-dimensional shallow-water models (for example HEC-RAS 2D, TELEMAC, LISFLOOD-FP) are now standard for floodplain mapping.

Hydrological routing

Simpler storage-based methods remain widely used. The Muskingum method, developed in the 1930s for the Muskingum River basin in Ohio, treats a reach as storage S = K[XI + (1 − X)O], where K is a travel time and X (0–0.5) a weighting factor, leading to the recursion

        O_{2} = C_{0} I_{2} + C_{1} I_{1} + C_{2} O_{1},      C_{0} + C_{1} + C_{2} = 1

Routing explains why flood peaks attenuate and are delayed as they move downstream, and why the removal of floodplain storage by levees can raise downstream peaks.

Hydraulic hazard to people and vehicles

The danger to people depends on the combination of depth and velocity. Laboratory and field studies show that many adults lose stability when the product of depth and velocity exceeds roughly 0.6–1.2 m²/s, and children at lower values; vehicles can float in water around 0.3–0.6 m deep, especially when it is moving. This is the basis of hazard-rating schemes used in the UK and Australia, and of the advice never to enter flood water.

✏️ Your Turn

(a) A rectangular channel 20 m wide carries water 3 m deep on a slope of 0.0005 with n = 0.035. Find the mean velocity, the discharge and the Froude number, and state the flow regime.
(b) What is the kinematic wave celerity for this flow, and how long would a flood wave take to travel 100 km?

Answers: (a) A = 60 m², P = 26 m, R = 2.31 m, R^{2/3} ≈ 1.745. V = (1/0.035) × 1.745 × √0.0005 ≈ 1.12 m/s, so Q ≈ 67 m³/s. With D = 3 m, Fr = 1.12/√(9.81 × 3) ≈ 0.21: subcritical. (b) With the wide-channel result, c ≈ (5/3) × 1.12 ≈ 1.86 m/s; 100 km takes about 1.0 × 10⁵/1.86 ≈ 54,000 s, or 15 hours. This channel is not very wide (B/h ≈ 7), and the exact rectangular-section result c = V[5/3 − (4/3)h/(B + 2h)] ≈ 1.51V ≈ 1.69 m/s gives about 16 hours.

─────────────────────────────────
Lesson 6: Flood Frequency Analysis
─────────────────────────────────

📌 Key idea of this section:

        p = 1/T,     R = 1 − (1 − 1/T)^{n}     (risk of at least one T-year flood in n years)

Return period and exceedance probability

A flood with a return period T is one whose magnitude is exceeded, on average, once every T years; equivalently it has an annual exceedance probability p = 1/T. The "100-year flood" is therefore the 1% annual-chance flood. Because floods in successive years are treated as independent, the probability of at least one exceedance in n years is 1 − (1 − p)^{n}. The phrase "100-year flood" is widely misunderstood: two such floods can occur in consecutive years, and a building with a 30-year mortgage on the edge of the 1% floodplain has about a one-in-four chance of being flooded during the loan.

Data series

Frequency analysis usually starts from the annual maximum series (AMS), the largest instantaneous peak in each water year at a gauge. The alternative partial-duration or peaks-over-threshold (POT) series uses all independent peaks above a threshold, extracting more information from short records; it is naturally modelled with a Poisson occurrence process and a generalised Pareto distribution of exceedances. Empirical exceedance probabilities are assigned to ranked observations with a plotting-position formula; the Weibull formula p = m/(n + 1), where m is the rank from the largest, is the most familiar.

Distributions

Extreme-value theory suggests that maxima of many independent variables tend towards the generalised extreme value (GEV) family, whose special case with zero shape parameter is the Gumbel (EV1) distribution. Using the method of moments, a Gumbel quantile is

        x_{T} = x̄ + K_{T} s,      K_{T} = −(√6/π) [0.5772 + ln ln(T/(T − 1))]

where x̄ and s are the sample mean and standard deviation. In the United States, federal guidance since 1967 has prescribed the log-Pearson Type III distribution, fitted to the logarithms of annual peaks. Bulletin 17B (1982) has been replaced by Bulletin 17C (England et al., 2019), which uses the Expected Moments Algorithm to incorporate historical and paleoflood information, censored data and interval estimates, and the multiple Grubbs–Beck test to screen low outliers. In the UK the Flood Estimation Handbook favours the generalised logistic distribution with regional pooling of records. The choice of distribution matters little near the centre of the data but greatly for the 500- or 1000-year quantiles, which are extrapolations beyond typical record lengths of 30–100 years.

Uncertainty, regionalisation and historical information

Sampling uncertainty is large: the 95% confidence interval for a 100-year flood estimated from 50 years of data may span a factor of two. Regional frequency analysis pools records from hydrologically similar sites, often with L-moments (Hosking and Wallis). Historical flood marks, documentary archives and paleoflood evidence such as slackwater deposits can extend records by centuries; reconstructions of the 1804 and 1910 floods on the Ahr, for instance, showed after 2021 that the gauged record had badly understated the hazard.

Non-stationarity

All these methods assume that the statistics of floods do not change over time. Milly et al. (2008) argued in Science that "stationarity is dead" as a default assumption because of climate change and land-use change. Trends are indeed detectable: Blöschl et al. (2019), analysing thousands of European gauges for 1960–2010, found increasing floods in north-western Europe and decreasing floods in southern and eastern Europe. Non-stationary frequency analysis lets distribution parameters vary with time or with covariates such as temperature or a climate index, but extrapolating such trends into the future is itself highly uncertain, and many practitioners prefer scenario-based design allowances.

✏️ Your Turn

(a) What is the probability of at least one 100-year flood during (i) a 30-year mortgage and (ii) a 100-year design life?
(b) An annual maximum series has a mean of 800 m³/s and a standard deviation of 300 m³/s. Estimate the 10-year and 100-year floods with the Gumbel method of moments.

Answers: (a) (i) 1 − 0.99³⁰ ≈ 0.26; (ii) 1 − 0.99¹⁰⁰ ≈ 0.63. (b) K₁₀ = −0.7797 × [0.5772 + ln ln(10/9)] = −0.7797 × (0.5772 − 2.2504) ≈ 1.305, so Q₁₀ ≈ 800 + 1.305 × 300 ≈ 1190 m³/s. K₁₀₀ = −0.7797 × [0.5772 + ln ln(100/99)] = −0.7797 × (0.5772 − 4.6001) ≈ 3.137, so Q₁₀₀ ≈ 800 + 3.137 × 300 ≈ 1740 m³/s.

─────────────────────────────────
Lesson 7: Forecasting and Warning
─────────────────────────────────

📌 Key idea of this section:

        Lead time is the value of a forecast: detection → forecast → warning → response, and any broken link defeats the system

The forecasting chain

Operational flood forecasting couples a meteorological forecast of precipitation and temperature to a hydrological model of runoff generation and a hydraulic model of routing, updated continuously with observations. For large rivers, most of the useful lead time comes from rain that has already fallen and from routing: a crest observed upstream can be propagated downstream days in advance. For flash floods, lead time must come from the atmosphere itself, and is limited to minutes or hours.

Observing precipitation

Weather radar estimates rainfall from reflectivity Z (mm⁶/m³, usually expressed as dBZ = 10 log₁₀ Z) through an empirical Z–R relationship, the classic Marshall–Palmer form being

        Z = 200 R^{1.6}        (R in mm/h)

Radar estimates suffer from beam blockage, bright-band contamination, attenuation and variation in drop-size distribution; dual-polarisation radar, now standard in the United States and much of Europe, improves estimates and identifies hail and debris. Radar is merged with gauges and, over data-sparse regions, with satellite products. Gauge networks remain sparse in much of the world, which is one reason flood risk in Africa and South Asia is so hard to manage.

Models and ensembles

Hydrological models range from lumped conceptual models (for example the Sacramento Soil Moisture Accounting model, HBV, GR4J) to distributed physically based models. The US National Water Model, operational since 2016, simulates streamflow on some 2.7 million river reaches. At continental and global scales, the European Flood Awareness System (EFAS) and the Global Flood Awareness System (GloFAS), run under the Copernicus Emergency Management Service, use ensemble weather forecasts to produce probabilistic flood forecasts days to weeks ahead. Ensembles express forecast uncertainty and allow decision thresholds to be set by cost–loss reasoning: if the cost of protective action is C and the avoidable loss is L, action is rational when the forecast probability exceeds C/L.

Flash-flood guidance and nowcasting

Flash Flood Guidance, used in the United States and in many countries through WMO's Flash Flood Guidance System, estimates the rainfall over a given duration needed to bring small streams to bankfull, given current soil moisture; forecasters compare it with observed and nowcast rainfall. Radar-based nowcasting extrapolates storm motion over 0–3 hours. Systems such as the US Multi-Radar Multi-Sensor product and the FLASH framework provide distributed estimates of flash-flood potential at high resolution.

Verification and the human link

Forecasts are verified with contingency statistics: the probability of detection POD = a/(a + c), the false alarm ratio FAR = b/(a + b) and the critical success index CSI = a/(a + b + c), where a, b and c are hits, false alarms and misses. Repeated false alarms erode trust, but the deadliest failures are usually in communication rather than in physics. In July 2021, EFAS issued flood notifications for the Rhine tributaries days before the disaster, yet in parts of the Ahr valley warnings did not reach residents in a form that prompted evacuation in time. Impact-based warnings, which describe what a flood will do rather than how high a river will rise, and cell-broadcast alerts to mobile phones (introduced in Germany in 2023) are responses to such failures. The UN Early Warnings for All initiative, launched in 2022, aims for universal coverage of early-warning systems by 2027.

✏️ Your Turn

(a) Convert radar reflectivities of 40 and 45 dBZ to rainfall rates using Z = 200 R^{1.6}.
(b) Over a season a warning service records 18 hits, 12 false alarms and 6 misses. Compute POD, FAR and CSI.
(c) Moving equipment out of a factory costs €20,000 and avoids a loss of €200,000 if the factory floods. Above what forecast probability is moving the equipment worthwhile?

Answers: (a) 40 dBZ: Z = 10⁴, R = (10⁴/200)^{1/1.6} = 50^{0.625} ≈ 11.5 mm/h. 45 dBZ: Z ≈ 31,600, R = (158)^{0.625} ≈ 23.7 mm/h; an increase of 5 dBZ roughly doubles the estimated rate. (b) POD = 18/24 = 0.75; FAR = 12/30 = 0.40; CSI = 18/36 = 0.50. (c) Act when p > C/L = 20,000/200,000 = 0.1, i.e. when the probability exceeds 10%.

─────────────────────────────────
Lesson 8: Levees, Dams and the Levee Effect
─────────────────────────────────

📌 Key idea of this section:

        dS/dt = I − O        (reservoir storage changes at the rate inflow exceeds outflow)

Levees and their failure modes

Levees (dikes, embankments) confine floodwater to the channel and the land between the embankments. They fail mainly by overtopping, which erodes the landward slope; by internal erosion or piping through or beneath the embankment, often heralded by sand boils; by slope instability when the embankment becomes saturated; and by erosion of the river-side slope. The 2005 New Orleans disaster involved both overtopping and foundation failures of floodwalls, and the subsequent investigations reshaped US levee engineering. Flow over an overtopped levee crest behaves approximately as flow over a broad-crested weir, with q ≈ 1.7 H^{3/2} m²/s per metre of crest, where H is the head above the crest. Confining a river also raises flood levels by removing floodplain storage and, on sediment-laden rivers such as the Yellow River, encourages deposition within the embankments until the bed lies above the surrounding plain.

Dams and reservoirs

Reservoirs reduce downstream peaks by storing part of the flood volume. Routing through a reservoir follows from continuity and the outlet's stage–discharge relation (the level-pool or modified Puls method). Flood-control storage must be kept empty in advance of the flood season, creating a conflict with water supply and hydropower. The Three Gorges Dam on the Yangtze, for example, has a designated flood-control storage of 22.15 km³, large in absolute terms but small compared with the volumes of the great Yangtze floods of 1931, 1954 and 1998. Spillways for large dams whose failure would endanger life are commonly designed for the probable maximum flood (PMF), derived from probable maximum precipitation (PMP), rather than for any statistically defined return period. There are some 58,000 large dams (higher than 15 m) registered worldwide by the International Commission on Large Dams, many of them now more than 50 years old.

Dam safety

Historical analyses show that overtopping and internal erosion together account for the large majority of embankment dam failures, in roughly comparable proportions. Modern dam-safety practice combines regular inspection, instrumentation (piezometers, seepage weirs, survey monuments), risk-informed assessment of failure probabilities and consequences, emergency action plans with inundation maps, and the legal duty of owners. The Banqiao (1975), Johnstown (1889) and Derna (2023) disasters, described in the case studies, are all, in essence, failures of dam safety rather than simply natural events.

Non-structural and nature-based measures

Detention basins, retention ponds, permeable pavements and green roofs reduce urban peaks; upstream "slow the flow" measures such as woody debris dams and wetland restoration can help in small catchments but have limited effect on large floods. Controlled floodplains and floodways provide space for water: the Bonnet Carré Spillway above New Orleans (completed 1931) and the Dutch "Room for the River" programme (largely completed in the late 2010s) deliberately lower flood levels by giving the river more room.

The levee effect

In his 1945 dissertation "Human Adjustment to Floods", Gilbert F. White observed that despite massive investment in flood control, flood losses in the United States were rising, because protection encouraged development in the protected areas. This "levee effect" or safe-development paradox means that structural defences reduce the frequency of flooding but can increase the consequences when a larger event overtops or breaches them. Socio-hydrology (Di Baldassarre et al., 2013) models these feedbacks between flood experience, memory, risk perception and settlement explicitly. A complementary "adaptation effect" occurs when recent floods reduce vulnerability for subsequent events, as appears to have happened in the Rhine and Meuse between the floods of 1993 and 1995.

✏️ Your Turn

(a) An inflow hydrograph is triangular, rising linearly from zero to a peak of 3000 m³/s and falling back to zero over a total base time of 48 hours. A flood-control reservoir can release at most 1000 m³/s without causing downstream damage. What storage is needed to keep releases at or below 1000 m³/s?
(b) A 200 m length of levee is overtopped by 0.5 m. Estimate the overtopping discharge.

Answers: (a) The volume above 1000 m³/s is a similar triangle with height 2000 m³/s and base 48 × (2000/3000) = 32 h. Volume = ½ × 32 × 3600 × 2000 ≈ 1.15 × 10⁸ m³ (0.115 km³). (b) q ≈ 1.7 × 0.5^{1.5} ≈ 0.60 m²/s, so Q ≈ 0.60 × 200 ≈ 120 m³/s, enough to flood a protected polder quickly and to start eroding the landward slope.

─────────────────────────────────
Lesson 9: Flood Risk, Insurance and Floodplain Management
─────────────────────────────────

📌 Key idea of this section:

        Risk = Hazard × Exposure × Vulnerability;      EAD = ∫₀¹ D(p) dp

Defining and measuring risk

In the language of the IPCC and UNDRR, risk results from the interaction of hazard (the probability and intensity of flooding), exposure (people and assets in harm's way) and vulnerability (their susceptibility to damage and their capacity to cope). Economic flood risk is usually quantified as expected annual damage (EAD), the integral of damage over annual exceedance probability, computed from a set of modelled events by numerical integration of the risk curve. Damage for each event is estimated with depth–damage functions that relate water depth (and sometimes velocity and duration) to the fraction of an asset's value lost. Loss of life is modelled separately, using exposed population, warning time, flood depth and velocity, building collapse and the time of day; mortality in modern European river floods is usually far below 1% of the exposed population, but it can be many times higher in sudden flash floods and dam failures.

Global exposure

Satellite and model studies have changed estimates of global exposure. Tellman et al. (2021) mapped 913 large floods between 2000 and 2018 from MODIS imagery and estimated that the population living in the observed flood areas grew by 58–86 million between 2000 and 2015, a faster proportional increase than global population. Rentschler et al. (2022) estimated that about 1.8 billion people live in areas exposed to a 1-in-100-year flood with significant depth, the large majority in low- and middle-income countries. Asia dominates both deaths and exposure.

Insurance and financial instruments

Flood is difficult for private insurers because losses are highly correlated, adverse selection is strong and premiums reflecting true risk can be unaffordable. The US National Flood Insurance Program (1968) offers federally backed cover in communities that adopt floodplain regulations based on the Special Flood Hazard Area, the 1% annual-chance floodplain mapped on FEMA's Flood Insurance Rate Maps. Subsidised premiums and repeated payouts on "repetitive loss" properties left the programme deeply in debt after hurricanes Katrina, Sandy and Harvey, and in 2021 FEMA introduced Risk Rating 2.0 to price policies by property-level risk. In the UK, Flood Re (operating since 2016) is a reinsurance scheme that caps household premiums while a transition to risk-reflective pricing takes place, scheduled to end in 2039. Catastrophe bonds, parametric insurance and regional pools such as the African Risk Capacity and the Caribbean Catastrophe Risk Insurance Facility extend risk transfer to governments.

Land-use planning and policy

The most effective long-term measure is to avoid placing new exposure in flood-prone areas. The 1994 Galloway report on the 1993 Mississippi flood recommended a balanced approach combining avoidance, buyouts and relocation, and restoration of floodplain storage alongside structural defence. The EU Floods Directive (2007) requires member states to produce preliminary flood risk assessments, flood hazard and risk maps, and flood risk management plans on a six-year cycle. The Netherlands moved in 2017 from exceedance-probability standards to risk-based standards that guarantee a basic individual risk of death from flooding no greater than 1 in 100,000 per year. The Sendai Framework for Disaster Risk Reduction 2015–2030 provides the global policy context. Benefit–cost analysis compares the reduction in EAD, discounted over the life of a project, with its cost; it tends to favour protection of wealthy areas, raising questions of equity that agencies increasingly address explicitly.

✏️ Your Turn

(a) A flood risk model gives damages of 0, 2, 20, 50 and 120 million euros for floods with annual exceedance probabilities of 0.5, 0.1, 0.02, 0.01 and 0.002. Estimate the expected annual damage by the trapezoidal rule, ignoring events rarer than 0.002.
(b) A defence costing €30 million would prevent all damage for floods up to the 0.01 event. Assume the residual damage curve is 0 at p = 0.01 and still 120 million euros at p = 0.002. How many years of avoided damage would repay its cost, ignoring discounting?

Answers: (a) EAD ≈ 0.4 × (0 + 2)/2 + 0.08 × (2 + 20)/2 + 0.01 × (20 + 50)/2 + 0.008 × (50 + 120)/2 = 0.40 + 0.88 + 0.35 + 0.68 = 2.31 million euros per year. (b) The residual EAD is 0.008 × (0 + 120)/2 = 0.48 million euros per year, so the benefit is 2.31 − 0.48 = 1.83 million euros per year and the payback period is 30/1.83 ≈ 16 years. With discounting at a few percent per year the scheme needs a considerably longer life to break even, which is why benefit–cost results are sensitive to the discount rate.

─────────────────────────────────
Lesson 10: Floods in a Changing Climate
─────────────────────────────────

📌 Key idea of this section:

        d(ln e_{s})/dT ≈ 6–7% per K        (Clausius–Clapeyron: a warmer atmosphere holds more water vapour)

Thermodynamics of heavier rain

The saturation vapour pressure of water increases with temperature at about 6–7% per kelvin at typical surface temperatures, as described by the Clausius–Clapeyron relation. If relative humidity and circulation are unchanged, the moisture available to extreme storms increases at a similar rate, and so does the intensity of the most extreme precipitation. Observations of daily extremes broadly support scaling close to this rate, while some studies of hourly and sub-hourly convective extremes find rates up to about twice the Clausius–Clapeyron rate ("super-CC" scaling), probably because latent heat release strengthens updraughts. Dynamical changes, in storm tracks, blocking and monsoon circulation, can amplify or offset this thermodynamic signal regionally and are much less certain.

What the IPCC concluded

The IPCC Sixth Assessment Report (Working Group I, 2021) concluded that the frequency and intensity of heavy precipitation events have increased since the 1950s over most land areas where observations are sufficient, and that human-induced climate change is likely the main driver. It estimated that a heavy daily precipitation event that occurred once in 10 years in a climate without human influence now occurs about 1.3 times as often and is about 6.7% wetter, and that at 2 °C of global warming it would occur about 1.7 times as often and be about 14% wetter. For river floods, the assessment was more cautious: there is low confidence in the sign of observed trends in flood magnitude at the global scale, because changes in rainfall are filtered through soil moisture, snow, land use and river regulation, which can increase floods in some regions and decrease them in others.

Sea-level rise and coastal floods

Global mean sea level rose by about 0.20 m between 1901 and 2018, and the rate accelerated to about 3.7 mm per year over 2006–2018. Because extreme sea levels sit on top of mean sea level, even modest rises sharply increase flood frequency; the IPCC projects that extreme sea-level events that occurred once per century in the recent past will occur at least annually at more than half of all tide-gauge locations by 2100 under all assessed scenarios. Land subsidence, from groundwater extraction and sediment compaction, adds local relative sea-level rise of centimetres per year in cities such as Jakarta, Manila and parts of the Mississippi delta.

Event attribution

Extreme-event attribution estimates how climate change altered the probability or intensity of a specific event by comparing observations and models with and without anthropogenic forcing. World Weather Attribution studies concluded that climate change made the July 2021 rainfall in Western Europe 1.2 to 9 times more likely and 3–19% more intense, and that it had increased the extreme monsoon rainfall in Pakistan in 2022, though with large model uncertainty. Such studies are increasingly used in litigation and loss-and-damage negotiations, and their methods are actively debated.

Open research questions

Major open questions include how convective extremes will change at sub-daily scales; how land-use change, river regulation and human adaptation will interact with climate change; how to design infrastructure for a non-stationary hazard when trends are hard to separate from natural variability; how to represent compound and cascading events; and how to bring reliable forecasts and warnings to the populations most exposed, many of whom live in data-sparse, rapidly urbanising regions.

✏️ Your Turn

(a) A design storm today delivers 100 mm. If extreme rainfall scales at 7% per kelvin, what would the same-probability storm deliver after 2 K of local warming?
(b) Using the Curve Number model from Lesson 2 with CN = 80, how much does the runoff increase in percentage terms?

Answers: (a) 100 × 1.07² ≈ 114.5 mm, an increase of about 14.5%. (b) Runoff rises from 50.5 mm to (114.5 − 12.7)²/(114.5 − 12.7 + 63.5) = 101.8²/165.3 ≈ 62.7 mm, an increase of about 24%. Because runoff generation is nonlinear, a given percentage increase in rainfall produces a larger percentage increase in runoff, especially on wet or impervious catchments.

═════════════════════════════════════════════
Case Studies
═════════════════════════════════════════════

The following eight case studies span more than 130 years and every major flood mechanism except coastal tsunami. Several share a theme: the most lethal floods were made far worse, or created outright, by failures of human infrastructure and institutions. Casualty figures for the older events, especially in China, are uncertain and are given as ranges.

1887 and 1938, Yellow River, China — a river above the plain

The Yellow River (Huang He) carries one of the highest sediment loads of any large river, historically about 1.6 billion tonnes per year at Sanmenxia before the late twentieth century (it has since fallen sharply because of dams, soil conservation and water withdrawals). In its lower course, sediment deposited between the embankments has raised the bed above the surrounding North China Plain, in places by about 10 m, creating a "suspended river". Any breach therefore drains the river onto the plain and can capture its entire flow, and the lower Yellow River has changed course many times in recorded history, most recently from south to north of the Shandong peninsula in 1855.

In late September 1887 the river breached its dikes near Zhengzhou in Henan province after heavy rains. Floodwater spread south-eastwards across the plain into the Huai River basin, inundating a vast area of Henan and Anhui. Deaths, from drowning and from the famine and disease that followed, are commonly estimated at between about 900,000 and 2 million, figures that are not well documented. The breach took more than a year to close.

On 9 June 1938, during the Second Sino-Japanese War, Nationalist forces deliberately breached the dikes at Huayuankou near Zhengzhou to halt the Japanese advance. The river flowed south-east into the Huai system for nearly nine years, until the breach was closed in 1947. Estimates of deaths range from roughly 400,000 to about 900,000, with several million people displaced; the resulting flooding, famine and disrupted agriculture contributed to the Henan famine of 1942–43. The case is unique as a strategic, man-made flood of enormous scale and illustrates how a perched, embanked river converts a single breach into a regional catastrophe.

1889 Johnstown, USA, and 2023 Derna, Libya — dam-break floods

The South Fork Dam, an earthen embankment roughly 22 m high impounding Lake Conemaugh on the Little Conemaugh River about 23 km upstream of Johnstown, had been bought and modified by the South Fork Fishing and Hunting Club, whose members included wealthy Pittsburgh industrialists. The club lowered the crest to widen the road along it, did not replace the discharge pipes that had been removed earlier, and placed fish screens across the spillway, which clogged with debris. After heavy rain on 30–31 May 1889, the lake overtopped the dam, which breached at about 3:10 pm on 31 May. The lake, about 14–18 million m³, emptied within about an hour, and the flood wave, carrying wreckage, reached Johnstown in under an hour. At least 2,209 people died. Debris piled against the Stone Bridge caught fire, killing further victims trapped in it. A 2016 reanalysis by Coleman and colleagues concluded that the club's modifications reduced the dam's capacity to pass the flood and plausibly determined whether it failed. Lawsuits against the club failed, and the disaster contributed to US courts adopting strict liability for harm caused by stored water.

In September 2023, the Mediterranean cyclone Daniel, after causing record rainfall in Greece, made landfall in eastern Libya on 10 September. Rainfall exceeded 400 mm in 24 hours at Al-Bayda. In the night of 10–11 September, the two embankment dams on the Wadi Derna above the city of Derna, the Abu Mansour dam (capacity about 22.5 million m³) and the smaller Derna (Al-Bilad) dam (about 1.5 million m³), built in the 1970s, failed in succession. The resulting flood destroyed large parts of the city centre and swept buildings into the sea. The death toll is highly uncertain: Libyan and UN figures placed confirmed deaths at roughly 4,000–6,000, with thousands more missing, and some estimates exceed 11,000. Engineers had warned in a 2022 paper that the dams needed urgent maintenance, and contracts for repair had not been completed; divided governance after the civil war hampered both maintenance and emergency response. Rapid attribution studies concluded that climate change had made the extreme rainfall more likely, but emphasised that the dam failures and conflict-related vulnerability turned a severe storm into a catastrophe.

1927 and 1993, Mississippi River, United States — limits of levees

In the 1927 flood, heavy rain across the Mississippi basin from late 1926 into spring 1927 drove the lower river to record stages. The "levees-only" policy of the Mississippi River Commission had confined the river to its embanked channel; the levees failed at well over a hundred places, including a catastrophic crevasse at Mounds Landing, Mississippi, on 21 April 1927. Some 70,000 km² were flooded, in places to depths of 9 m, and roughly 600,000–700,000 people were displaced. The official death toll was about 250, though some historians argue that several times that number died, many of them African Americans whose deaths went unrecorded. On 29 April the Caernarvon levee below New Orleans was dynamited to protect the city, flooding poorer parishes downstream whose residents were inadequately compensated. The disaster led to the Flood Control Act of 1928 and the Mississippi River and Tributaries Project, which added floodways, spillways and channel improvements to levees.

The 1993 Great Flood affected the upper Mississippi and Missouri basins from April to September after an exceptionally wet spring and summer, with persistent rain over saturated soils. The Mississippi at St. Louis crested at 49.58 ft (15.11 m) on the gauge on 1 August 1993, almost 20 ft above flood stage, with a peak discharge of about 1.08 million ft³/s (about 30,600 m³/s). About 50 people died and damage estimates range from about 15 to 20 billion US dollars. More than a thousand levees, most of them small non-federal agricultural levees, were overtopped or breached. The Galloway report (1994) recommended a shift towards floodplain management, and federally funded buyouts relocated thousands of properties; the town of Valmeyer, Illinois, was rebuilt on a bluff above the river.

1931, Central China — the Yangtze and Huai floods

After a severe winter and heavy spring rains, an exceptionally active summer monsoon in July and August 1931, with a series of cyclones, brought prolonged heavy rain to the Yangtze and Huai basins. The Yangtze reached extreme stages at Hankou (Wuhan), which was flooded for weeks, and dike failures inundated an estimated 180,000 km² across several provinces. On 26 August, high water and strong winds breached the dikes of the Grand Canal near Gaoyou Lake, flooding a densely populated area at night.

The death toll is one of the most uncertain in the history of natural disasters. Contemporary surveys, notably one by the University of Nanking, put drowning deaths in the order of 150,000 and total deaths, including those in the following months, at roughly 400,000 or more; widely repeated figures of 3.7–4 million deaths are poorly sourced. As the historian Chris Courtney has shown, most victims died not of drowning but of famine, cholera, dysentery and other diseases in the months after the flood. The Nationalist government's National Flood Relief Commission undertook large relief and dike-reconstruction programmes, in part with international loans of American wheat. The 1931 flood remains a textbook example of a disaster whose impact was governed by the long chain of displacement, hunger and disease following the inundation.

1953, North Sea — the storm surge that remade the Netherlands

On the night of 31 January to 1 February 1953, a deep low-pressure system moved south-east across the North Sea, driving northerly gales down its length. The resulting storm surge, which exceeded 2 m and in places approached 3 m, coincided with a spring high tide and overwhelmed sea defences in the Netherlands, eastern England and Belgium. Dikes failed at hundreds of locations in Zeeland and South Holland, inundating well over a thousand square kilometres of polder. In the Netherlands 1,836 people died; in England 307 died, notably on Canvey Island and at Jaywick; in Belgium 28 died; and several hundred more were lost at sea, including 133 aboard the ferry MV Princess Victoria in the North Channel.

The Dutch response was the Delta Plan, which shortened the coastline by closing estuaries with dams and barriers and set statutory safety standards, as high as a 1-in-10,000-year exceedance level for the central provinces of North and South Holland. The Delta Works were completed with the storm-surge barrier across the Eastern Scheldt (1986), a movable design adopted to preserve the estuary's tidal ecology, and the Maeslant barrier on the New Waterway near Rotterdam (1997). In the UK, the event led to improved storm-tide forecasting and ultimately to the Thames Barrier, operational from 1982. The 1953 flood showed how coastal flood risk depends on the joint probability of surge and tide, and on the weakest point of a long defence line.

1975, Henan, China — the Banqiao and Shimantan dam failures

In early August 1975 the remnants of Typhoon Nina stalled over southern Henan, where the interaction of the decaying typhoon with a cold air mass and the topography produced extraordinary rainfall: Linzhuang recorded about 1,060 mm in 24 hours and about 1,630 mm in three days, values far beyond the design assumptions of the reservoirs in the Huai basin. Communication lines failed, and the floodgates at Banqiao Dam on the Ru River were reportedly partly obstructed. Banqiao, an earthen dam designed for a 1-in-1000-year flood, was overtopped and failed around 1 am on 8 August; the Shimantan Dam on the Hong River failed about the same time, and some 60 smaller dams failed in cascade.

Chinese sources later reported that Banqiao released several hundred million cubic metres of water within hours, with a peak outflow of the order of 78,000 m³/s. The flood wave and the subsequent inundation of a huge area of the Huai plain killed at least about 26,000 people directly according to official figures; estimates including deaths from subsequent famine and epidemics range up to about 170,000–230,000 and are disputed. The disaster was kept secret for many years. Its lessons include the danger of designing dams for statistically defined floods rather than for probable maximum precipitation, the importance of spillway capacity and reliable gates, and the vulnerability of cascades of dams in which one failure triggers others.

2010 and 2022, Pakistan — monsoon floods in the Indus basin

In late July 2010, an exceptionally intense monsoon, linked to a blocking pattern that also produced the Russian heat wave of that summer, brought very heavy rain to Khyber Pakhtunkhwa and the upper Indus. The flood wave travelled the length of the Indus over several weeks, breaching embankments and barrage protection in Punjab and Sindh. About one-fifth of Pakistan's land area was affected at the peak, roughly 20 million people were affected, and close to 2,000 people died (official figures between about 1,700 and 2,000).

In 2022, an extreme monsoon season from June to September, with August rainfall in Sindh and Balochistan several times the long-term average, combined with heavy glacier melt in the north after a spring heat wave. Rather than one riverine flood wave, much of the flooding in Sindh was caused by rain pooling across the flat plain, which drains poorly and was cut by embankments and roads. About 1,700 people died and around 33 million were affected. The Post-Disaster Needs Assessment estimated damages of about 14.9 billion US dollars and economic losses of about 15.2 billion US dollars, with reconstruction needs of over 16 billion. An attribution study by the World Weather Attribution group found that climate change had probably increased the intensity of the extreme rainfall, but could not quantify the increase precisely. The floods became central to the agreement at COP27 in 2022 to establish a loss-and-damage fund.

2021, Germany and Belgium — flash floods in a wealthy region

On 13–15 July 2021, a slow-moving cut-off low over western Germany and eastern Belgium produced 100–150 mm of rain in 24–48 hours over large areas, falling on soils already wet from a rainy early summer. Steep, narrow valleys such as those of the Ahr, Erft and Vesdre responded within hours. On the Ahr, the gauge at Altenahr was destroyed; reconstructions suggest a peak discharge of the order of 1,000 m³/s (estimates vary widely), several times the previous gauged maximum and far above the official 100-year flood estimate, but comparable to floods documented on the Ahr in 1804 and 1910. The water carried uprooted trees, caravans and debris that blocked bridges, causing backwater and abrupt surges.

About 190 people died in Germany, 135 of them in the Ahr valley, and about 40 in Belgium, with further deaths in neighbouring countries. Insured and uninsured losses for the event were estimated at around 40–50 billion euros, the costliest natural disaster in Germany's history. The meteorological forecasts and EFAS notifications gave days of warning of extreme rainfall, but the translation into local warnings, evacuation orders and public understanding was inadequate in many places, and inquiries in Rhineland-Palatinate examined the response of the district authorities. A World Weather Attribution study (Kreienkamp et al., 2021) found that climate change had made rainfall of this kind 1.2 to 9 times more likely and 3–19% more intense. The flood illustrated that modern warning systems are only as good as their final link, and that historical (pre-gauge) floods must be included when estimating design floods.

═════════════════════════════════════════════
References
═════════════════════════════════════════════

  1. Chow, V. T. (1959). Open-Channel Hydraulics. McGraw-Hill, New York.
  2. Chow, V. T., Maidment, D. R. & Mays, L. W. (1988). Applied Hydrology. McGraw-Hill, New York.
  3. Dingman, S. L. (2015). Physical Hydrology, 3rd edition. Waveland Press, Long Grove, Illinois.
  4. Beven, K. J. (2012). Rainfall–Runoff Modelling: The Primer, 2nd edition. Wiley-Blackwell, Chichester.
  5. Horton, R. E. (1933). The role of infiltration in the hydrologic cycle. Transactions, American Geophysical Union, 14, 446–460.
  6. Dunne, T. & Black, R. D. (1970). Partial area contributions to storm runoff in a small New England watershed. Water Resources Research, 6(5), 1296–1311.
  7. Sherman, L. K. (1932). Streamflow from rainfall by the unit-graph method. Engineering News-Record, 108, 501–505.
  8. Marshall, J. S. & Palmer, W. McK. (1948). The distribution of raindrops with size. Journal of Meteorology, 5, 165–166.
  9. Trenberth, K. E., Smith, L., Qian, T., Dai, A. & Fasullo, J. (2007). Estimates of the global water budget and its annual cycle using observational and model data. Journal of Hydrometeorology, 8, 758–769.
  10. England, J. F., Jr., Cohn, T. A., Faber, B. A., Stedinger, J. R., Thomas, W. O., Jr., Veilleux, A. G., Kiang, J. E. & Mason, R. R., Jr. (2019). Guidelines for Determining Flood Flow Frequency — Bulletin 17C. U.S. Geological Survey Techniques and Methods, book 4, chapter B5.
  11. Milly, P. C. D., Betancourt, J., Falkenmark, M., Hirsch, R. M., Kundzewicz, Z. W., Lettenmaier, D. P. & Stouffer, R. J. (2008). Stationarity is dead: whither water management? Science, 319, 573–574.
  12. Blöschl, G. et al. (2019). Changing climate both increases and decreases European river floods. Nature, 573, 108–111.
  13. IPCC (2021). Climate Change 2021: The Physical Science Basis. Contribution of Working Group I to the Sixth Assessment Report of the Intergovernmental Panel on Climate Change. Cambridge University Press.
  14. Wahl, T., Jain, S., Bender, J., Meyers, S. D. & Luther, M. E. (2015). Increasing risk of compound flooding from storm surge and rainfall for major US cities. Nature Climate Change, 5, 1093–1097.
  15. White, G. F. (1945). Human Adjustment to Floods. Department of Geography Research Paper No. 29, University of Chicago.
  16. Di Baldassarre, G., Viglione, A., Carr, G., Kuil, L., Salinas, J. L. & Blöschl, G. (2013). Socio-hydrology: conceptualising human-flood interactions. Hydrology and Earth System Sciences, 17, 3295–3303.
  17. Tellman, B. et al. (2021). Satellite imaging reveals increased proportion of population exposed to floods. Nature, 596, 80–86.
  18. Interagency Floodplain Management Review Committee (1994). Sharing the Challenge: Floodplain Management into the 21st Century. Report to the Administration Floodplain Management Task Force, Washington, DC.
  19. Barry, J. M. (1997). Rising Tide: The Great Mississippi Flood of 1927 and How It Changed America. Simon & Schuster, New York.
  20. McCullough, D. (1968). The Johnstown Flood. Simon & Schuster, New York.
  21. Courtney, C. (2018). The Nature of Disaster in China: The 1931 Yangzi River Flood. Cambridge University Press.
  22. Gerritsen, H. (2005). What happened in 1953? The Big Flood in the Netherlands in retrospect. Philosophical Transactions of the Royal Society A, 363, 1271–1291.
  23. Kreienkamp, F. et al. (2021). Rapid attribution of heavy rainfall events leading to the severe flooding in Western Europe during July 2021. World Weather Attribution.
  24. Government of Pakistan, Asian Development Bank, European Union, United Nations Development Programme & World Bank (2022). Pakistan Floods 2022: Post-Disaster Needs Assessment. Islamabad.

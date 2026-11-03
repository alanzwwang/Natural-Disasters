Droughts — An Advanced Course
══════════════════════════════════════════

Introduction
─────────────────────────────────

Drought is the most diffuse of the natural hazards. It has no epicentre, no landfall and no single moment of onset; it is defined not by the presence of something but by the persistent absence of water relative to what a society or an ecosystem has come to expect. That relative character is what makes drought both scientifically subtle and socially destructive. A year with 300 mm of rain is a catastrophe in a humid farming district and an ordinary year in a semi-arid one, so every operational definition of drought must be anchored to a local climatology, to a particular part of the hydrological system, and ultimately to a particular demand for water.

Measured by the number of people affected and by long-run economic loss, drought ranks among the costliest hazards on Earth. In the United States, NOAA's billion-dollar disaster inventory places droughts, together with their associated heatwaves, among the most expensive event types per event, and historically droughts have been implicated in some of the deadliest famines ever recorded. Yet the death toll of a drought is never a purely physical quantity: whether a rainfall deficit becomes a crop failure, and whether a crop failure becomes a famine, depends on markets, governance, conflict, entitlements and the presence or absence of functioning relief systems. A graduate-level treatment of drought must therefore move from the physics of the surface energy balance to the political economy of food.

This course treats drought as a propagating anomaly in the coupled land–atmosphere–hydrosphere system. We begin with definitions and the propagation of a precipitation deficit through soil moisture, streamflow, reservoirs and groundwater. We then develop the physical machinery — the surface energy and water balances, the Penman–Monteith equation and the role of vapour-pressure deficit — that determines how much water the atmosphere demands. We examine the standard drought indices and how they are calculated, the large-scale ocean–atmosphere drivers of drought, land–atmosphere feedbacks and the newer concept of flash drought, groundwater depletion as observed from space, and the tree-ring record of megadroughts far larger than anything in the instrumental era. The later lessons address impacts, monitoring, management and the detection and attribution of drought in a warming climate. Nine case studies, from the Global Famine of 1876–78 to the Horn of Africa drought of 2020–23, illustrate how physical and human factors combine.

In this course, you will:

  1. Distinguish meteorological, agricultural, hydrological and socioeconomic drought, and describe how deficits propagate and lag through the hydrological cycle
  2. Apply the surface energy and water balances and the FAO-56 Penman–Monteith equation to quantify atmospheric evaporative demand
  3. Calculate and interpret the SPI, SPEI, Palmer Drought Severity Index and satellite vegetation indices, and understand their limitations
  4. Explain how ENSO, the Indian Ocean Dipole, Pacific and Atlantic multidecadal variability, blocking and subtropical ridges organise drought
  5. Analyse land–atmosphere feedbacks, flash-drought development and groundwater depletion observed by GRACE
  6. Interpret tree-ring reconstructions of past megadroughts and their statistical uncertainties
  7. Evaluate drought impacts on agriculture, ecosystems and food security without reducing famine to rainfall alone
  8. Assess monitoring, early-warning, management and attribution frameworks, including the evidence for anthropogenic influence on drought

─────────────────────────────────
Lesson 1: Defining Drought and Its Propagation
─────────────────────────────────

📌 Key idea of this section:

        Drought = a sustained deficit relative to normal; it propagates P → soil moisture → streamflow → storage → society

The four classical types

The most widely cited conceptual framework is that of Wilhite and Glantz (1985), who reviewed more than 150 published definitions and grouped them into four classes. Meteorological drought is a deficit of precipitation relative to a long-term mean or median over some period, sometimes combined with anomalously high evaporative demand. Agricultural drought, now often called agricultural and ecological drought (the term adopted by IPCC AR6), is a deficit of root-zone soil moisture sufficient to reduce crop yield or plant productivity. Hydrological drought is a deficit in surface and subsurface water — streamflow, lake and reservoir levels, snowpack, groundwater. Socioeconomic drought occurs when the supply of some economic good that depends on water (food, hydropower, municipal water) falls short of demand; its definition therefore involves both the physical supply and the human demand, and it can intensify with no change in climate at all if demand grows.

These categories are not separate events but stages of a single anomaly seen through different storages. A two-month rainfall shortfall in spring may produce a meteorological drought and a short agricultural drought without any noticeable hydrological drought in a large river basin with deep aquifers. Conversely, after several dry years a basin may remain in hydrological drought — low reservoirs, depleted aquifers — long after rainfall has returned to normal. The distinction matters operationally because each stakeholder watches a different storage: a wheat farmer watches the root zone, a hydropower operator watches reservoir inflow, and a groundwater-dependent city watches the water table.

Drought, aridity and water scarcity

Drought must also be distinguished from aridity and from water scarcity. Aridity is a permanent climatic feature, conventionally measured by the aridity index AI = P / PET (annual precipitation over potential evapotranspiration); the UNEP classification calls regions with AI below 0.05 hyper-arid, 0.05–0.20 arid, 0.20–0.50 semi-arid and 0.50–0.65 dry sub-humid. Drought is a temporary departure from a region's own normal and can occur in any climate, including rainforests — the Amazon experienced severe droughts in 2005, 2010 and 2023–24. Water scarcity is a structural imbalance between demand and renewable supply. Much of what is reported as "drought" in heavily developed basins is in fact chronic overallocation exposed by a dry spell, and good analysis separates the climatic anomaly from the underlying imbalance.

Propagation, lagging, attenuation and lengthening

Van Loon (2015) summarises the characteristic transformations as a precipitation deficit propagates through the terrestrial hydrological cycle. First, pooling: several short meteorological droughts can merge into one prolonged hydrological drought, because storages do not have time to recover between them. Second, attenuation: the high-frequency variability of precipitation is smoothed, so hydrological drought is less frequent but more persistent. Third, lag: the onset of streamflow and groundwater drought trails the meteorological onset by weeks to years, depending on catchment storage. Fourth, lengthening: hydrological droughts end later than the meteorological drought that caused them. A simple linear-reservoir model captures much of this behaviour. If catchment storage S drains as Q = S / k, where k is a time constant, then in the absence of recharge

        dS/dt = −S/k   ⇒   Q(t) = Q₀ · e^{−t/k}

so baseflow recession, and with it the rate at which streamflow drought develops, is controlled by k. Groundwater-fed catchments with large k (many months to years) respond sluggishly; flashy, shallow catchments with k of days to weeks follow rainfall closely. Seasonal snowpack adds another delay: in snowmelt-dominated basins a dry winter becomes a low-flow summer, and a warm winter in which precipitation falls as rain rather than snow can create a "snow drought" even with near-normal precipitation.

Run theory

For quantitative analysis, drought events are commonly extracted from a time series by the threshold-level method, or run theory, introduced by Yevjevich (1967). A threshold X₀ is chosen — a fixed value, or a varying value such as the monthly 20th percentile of streamflow — and a drought is a run of consecutive time steps with X_{t} falling below X₀. Three properties characterise each event:

        Duration  D = number of consecutive steps below threshold
        Severity  S = Σ (X₀ − X_{t})   over the run (cumulative deficit)
        Intensity I = S / D            (mean deficit per step)

Because severity and duration are correlated, drought frequency analysis increasingly uses bivariate distributions linked by copulas to estimate joint return periods. Minor inter-event recoveries are often pooled (for example, events separated by fewer than a set number of steps, or with an inter-event excess volume below some fraction of the preceding deficit, are merged), and very short events are filtered out; these choices noticeably affect drought statistics and should always be reported.

✏️ Your Turn

(a) Monthly mean streamflow at a gauge, against a fixed threshold of 50 m³/s, is 42, 35, 30, 38, 47 and then 55 m³/s. Determine the duration, severity (in m³/s·months) and intensity of the drought event.
(b) A catchment behaves as a linear reservoir with k = 6 months. If recharge stops entirely, how long does it take for baseflow to fall to half its initial value?

Answers: (a) The first five months are below threshold, so D = 5 months. The deficits are 8, 15, 20, 12 and 3 m³/s, giving S = 58 m³/s·months, and I = 58/5 = 11.6 m³/s. (b) Q/Q₀ = e^{−t/k} = 0.5, so t = k ln 2 = 6 × 0.693 ≈ 4.2 months.

─────────────────────────────────
Lesson 2: The Surface Energy and Water Balance and Evaporative Demand
─────────────────────────────────

📌 Key idea of this section:

        P = ET + Q + ΔS     and     R_{n} − G = H + λE

The two balances

Drought is fundamentally an imbalance between supply and demand at the land surface, and two conservation laws govern it. Over a control volume extending from the surface to below the root zone, the water balance states that precipitation P is partitioned into evapotranspiration ET, runoff and drainage Q, and change in storage ΔS (soil moisture, snow, groundwater). At the surface, the energy balance states that net radiation R_{n}, less the ground heat flux G, is partitioned into sensible heat H and latent heat λE, where λ ≈ 2.45 MJ kg⁻¹ is the latent heat of vaporisation. The two balances are linked by evapotranspiration: every kilogram of water evaporated consumes λ of energy. When soil water is plentiful, much of the available energy goes to λE and the surface stays cool; when soil water runs out, energy is diverted to H, the surface and boundary layer warm, and the ratio H / λE — the Bowen ratio β — rises sharply. This switch is the physical basis for the strong coupling between drought and heatwaves discussed in Lesson 5.

Potential, reference and actual evapotranspiration

Potential evapotranspiration (PET) is the evapotranspiration that would occur from a surface with unlimited water supply under the prevailing meteorological conditions. Because PET depends on the surface, the FAO defines a standardised reference evapotranspiration ET₀ for a hypothetical well-watered grass crop 0.12 m tall with a fixed surface resistance of 70 s m⁻¹ and an albedo of 0.23 (Allen et al. 1998). Actual evapotranspiration ET falls below PET when soil moisture limits transpiration; crop evapotranspiration is approximated as ET_{c} = K_{c} · ET₀ with a crop coefficient K_{c}, further reduced by a water-stress coefficient K_{s} when the root zone dries. In energy-limited regimes ET ≈ PET; in water-limited regimes ET ≈ P over the long run, and the transition between them is described by the Budyko framework (Lesson 6).

The Penman–Monteith equation

The Penman–Monteith equation combines the energy balance with an aerodynamic description of vapour transport. In the FAO-56 form for daily reference evapotranspiration (mm day⁻¹):

        ET₀ = [0.408 Δ (R_{n} − G) + γ · (900 / (T + 273)) · u₂ · (e_{s} − e_{a})] / [Δ + γ (1 + 0.34 u₂)]

Here R_{n} and G are in MJ m⁻² day⁻¹, T is the daily mean air temperature at 2 m (°C), u₂ the wind speed at 2 m (m s⁻¹), e_{s} − e_{a} the vapour-pressure deficit (kPa), Δ the slope of the saturation vapour-pressure curve (kPa °C⁻¹), and γ the psychrometric constant (≈ 0.0674 kPa °C⁻¹ at sea-level pressure of 101.3 kPa, from γ = 0.665 × 10⁻³ P). The factor 0.408 converts MJ m⁻² to mm of evaporated water (1/λ). The numerator contains a radiative term and an aerodynamic term: the first represents energy available for evaporation, the second the drying power of the air. The saturation vapour pressure is given by the Tetens-type expression used in FAO-56:

        e°(T) = 0.6108 · exp[17.27 T / (T + 237.3)]   kPa
        Δ = 4098 · e°(T) / (T + 237.3)²

Vapour-pressure deficit and the thirsty atmosphere

The vapour-pressure deficit VPD = e_{s} − e_{a} measures how far the air is from saturation and is the most direct index of the atmosphere's evaporative demand. Because e_{s} rises roughly exponentially with temperature — about 6–7 % per °C near typical surface temperatures, from the Clausius–Clapeyron relation — warming at constant relative humidity increases VPD in proportion to e_{s}, and warming with falling relative humidity (as is observed over many continental regions) increases it faster still. High VPD has two opposing effects. It raises PET and can therefore deplete soil moisture faster, but it also causes plants to close their stomata to limit water loss, so actual transpiration may not rise and photosynthesis falls. Many recent studies identify VPD as a primary driver of drought-induced tree mortality, crop yield loss and fire weather, independent of precipitation. The phrase "hot drought" is used for droughts in which elevated temperature and VPD, rather than precipitation deficits alone, determine severity.

PET formulations and their pitfalls

Simpler temperature-based PET formulas (Thornthwaite 1948; Hargreaves) are attractive where radiation, humidity and wind data are lacking, but they assume that temperature is a proxy for energy availability. Under climate change that assumption fails: temperature-only formulas substantially overstate future increases in PET, and hence future drying, relative to the physically based Penman–Monteith formulation (Sheffield et al. 2012). Even Penman–Monteith PET is an imperfect measure of future drought because it holds surface resistance fixed, whereas rising atmospheric CO₂ tends to reduce stomatal conductance and increase plant water-use efficiency. This "PET paradox" — models projecting large increases in PET-based aridity while simulating little change or even increases in runoff in some regions — is an active research topic, and it is one reason the IPCC distinguishes between aridity indices and modelled soil moisture or runoff.

✏️ Your Turn

(a) At an air temperature of 30 °C and relative humidity of 30 %, calculate the saturation vapour pressure, the actual vapour pressure and the vapour-pressure deficit.
(b) Calculate the FAO-56 ET₀ for a day with T = 25 °C, relative humidity 50 %, u₂ = 2.0 m s⁻¹, R_{n} = 15 MJ m⁻² day⁻¹, G = 0 and sea-level pressure. Report the radiative and aerodynamic contributions separately.
(c) Holding relative humidity at 50 %, by what percentage does VPD increase if the temperature rises from 25 °C to 27 °C?

Answers: (a) e_{s} = 0.6108 exp(17.27 × 30 / 267.3) ≈ 4.24 kPa; e_{a} = 0.30 × 4.24 ≈ 1.27 kPa; VPD ≈ 2.97 kPa. (b) e_{s} = 3.17 kPa, e_{a} = 1.58 kPa, Δ = 4098 × 3.17 / 262.3² ≈ 0.189 kPa °C⁻¹, γ = 0.0674 kPa °C⁻¹. Denominator = 0.189 + 0.0674 × 1.68 ≈ 0.302. Radiative term = 0.408 × 0.189 × 15 / 0.302 ≈ 3.83 mm day⁻¹; aerodynamic term = 0.0674 × (900/298) × 2 × 1.58 / 0.302 ≈ 2.14 mm day⁻¹; ET₀ ≈ 5.96 mm day⁻¹. (c) VPD rises from 1.58 to 1.78 kPa, an increase of about 12.6 %, i.e. about 6.3 % per °C at constant relative humidity.

─────────────────────────────────
Lesson 3: Drought Indices and Their Calculation
─────────────────────────────────

📌 Key idea of this section:

        SPI = Φ⁻¹[ F_{Γ}(P_{k}) ]    — a precipitation total mapped to a standard normal deviate

Why indices

A drought index condenses a complex multivariate anomaly into a single number that can be compared across places and times and tied to management triggers. The WMO's Handbook of Drought Indicators and Indices (WMO and GWP 2016) catalogues more than fifty. No index is universally best; each represents a particular storage and time scale, and good practice combines several. The key design choices are which variables are used (precipitation only, a water balance, soil moisture, vegetation), which accumulation period is considered, and how anomalies are standardised so that a given value means the same probability everywhere.

The Standardized Precipitation Index

The Standardized Precipitation Index (McKee, Doesken and Kleist 1993) is the WMO-recommended index for meteorological drought (Lincoln Declaration on Drought Indices, 2009). For a chosen accumulation period k (commonly 1, 3, 6, 12, 24 or 48 months), precipitation totals ending in each calendar month are fitted, separately for each month, with a two-parameter gamma distribution, which suits the positively skewed, bounded-at-zero nature of precipitation. A mixed distribution accounts for zero totals. The cumulative probability of an observed total is then transformed to the equiprobable standard normal deviate:

        H(x) = q + (1 − q) · G(x),   SPI = Φ⁻¹[H(x)]

where q is the probability of zero precipitation and G the fitted gamma CDF. By construction SPI has mean 0 and unit variance at every location. The McKee classes are: −1.00 to −1.49 moderately dry, −1.50 to −1.99 severely dry, and ≤ −2.00 extremely dry, which correspond to probabilities of roughly 9.2 %, 4.4 % and 2.3 % respectively; P(SPI ≤ −1) ≈ 15.9 %. Short-window SPI (1–3 months) tracks soil moisture and agricultural conditions; long-window SPI (12–48 months) tracks reservoirs and groundwater. Its advantages are simplicity, spatial comparability and multi-scalar flexibility. Its main weakness is that it ignores evaporative demand, so it cannot capture a drought intensified by heat, and its tails are sensitive to the record length and fitting method — at least 30 years of data are recommended, and extreme values beyond about ±3 are poorly constrained.

The Standardized Precipitation Evapotranspiration Index

The SPEI (Vicente-Serrano, Beguería and López-Moreno 2010) applies the same multi-scalar standardisation to the climatic water balance D = P − PET accumulated over k months. Because D can be negative, a three-parameter distribution is used (log-logistic in the original formulation). SPEI therefore responds to temperature and VPD as well as precipitation, which makes it better suited to studying warming-driven drought, but its results depend on the PET formula: with Thornthwaite PET the index can exaggerate trends, and the Penman–Monteith form is now recommended where data allow.

The Palmer Drought Severity Index

Palmer's (1965) index was the first comprehensive water-balance drought index and remained the backbone of US drought monitoring for decades. It runs a two-layer soil bucket model (total available water capacity often set to about 25 mm in the surface layer plus a location-dependent amount below) with Thornthwaite PET. For each month it computes the precipitation that would have been "climatically appropriate for existing conditions" (CAFEC), from which the moisture departure d = P − P̂ is derived and weighted by a climatic characteristic K to give the moisture anomaly index Z = K · d. The PDSI is then built recursively, giving the index memory:

        X_{i} = 0.897 X_{i−1} + Z_{i} / 3

Values of −2.0 to −2.99 indicate moderate drought, −3.0 to −3.99 severe drought, and −4.0 or below extreme drought. The coefficients 0.897 and 1/3 were derived empirically from limited data in central Iowa and western Kansas, so the original PDSI is not spatially comparable — a −4 in one climate is not equally rare in another. The self-calibrating PDSI (sc-PDSI; Wells, Goddard and Hayes 2004) recalculates K and the duration factors from each station's own record. Further limitations include the fixed time scale (roughly 9–12 months of memory), the neglect of snow and frozen ground in the original, and an arbitrary backtracking procedure for deciding when a drought began or ended. Nevertheless, the PDSI's long history makes it invaluable for climate studies, and it is the target variable of most tree-ring drought reconstructions (Lesson 7).

Soil-moisture, vegetation and evaporative indices

Soil moisture is the most direct measure of agricultural drought but is sparsely observed in situ. It is estimated by land-surface models (for example the North American Land Data Assimilation System), by microwave satellites (ESA SMOS since 2009, NASA SMAP since 2015, which sense roughly the top 5 cm), and by combining both via data assimilation. Root-zone moisture from GRACE-assimilating models extends the view deeper. Vegetation-based indices use optical remote sensing. The Normalized Difference Vegetation Index NDVI = (ρ_{NIR} − ρ_{red}) / (ρ_{NIR} + ρ_{red}) exploits the strong near-infrared reflectance of healthy leaves. Kogan's Vegetation Condition Index scales NDVI by its historical range at each pixel for the same period of year, and the Temperature Condition Index does likewise for brightness temperature, inverted; the Vegetation Health Index averages the two:

        VCI = 100 · (NDVI − NDVI_{min}) / (NDVI_{max} − NDVI_{min})
        TCI = 100 · (BT_{max} − BT) / (BT_{max} − BT_{min})
        VHI = α · VCI + (1 − α) · TCI,   commonly α = 0.5

VCI below about 35–40 is commonly taken to indicate drought stress. Vegetation indices integrate the actual biological response, but they lag the onset of stress and confound drought with pests, fire, land-use change and cloud contamination. The Evaporative Stress Index (Anderson et al.) uses thermal-infrared estimates of actual ET relative to reference ET and can detect stress before vegetation visibly browns, which makes it useful for flash-drought detection. Solar-induced chlorophyll fluorescence, now retrieved from several satellites, offers a still more direct measure of photosynthetic activity.

✏️ Your Turn

(a) At a station, three-month precipitation totals ending in August are approximately normally distributed with mean 150 mm and standard deviation 40 mm. This year the June–August total is 70 mm. Estimate SPI-3, classify the anomaly and estimate its return period for that season.
(b) The PDSI for May is −1.5. The moisture anomaly index Z is −2.0 in June, −3.0 in July and −1.0 in August. Compute PDSI for June, July and August and classify August.
(c) A pixel's NDVI for the current dekad is 0.32, while its historical minimum and maximum for this dekad are 0.25 and 0.65. Compute the VCI.

Answers: (a) z = (70 − 150)/40 = −2.0, an extremely dry anomaly; P(Z ≤ −2) ≈ 0.0228, so the return period for that season is about 1/0.0228 ≈ 44 years. (In practice a gamma fit would be used; the normal approximation is shown for clarity.) (b) June: 0.897 × (−1.5) + (−2.0/3) ≈ −2.01. July: 0.897 × (−2.01) − 1.00 ≈ −2.80. August: 0.897 × (−2.80) − 0.33 ≈ −2.85, a moderate drought — note that the index barely recovers despite a milder August because of its memory. (c) VCI = 100 × (0.32 − 0.25)/(0.65 − 0.25) = 17.5, indicating severe vegetation stress.

─────────────────────────────────
Lesson 4: Large-Scale Drivers — Ocean Modes, Ridges and Blocking
─────────────────────────────────

📌 Key idea of this section:

        Persistent drought requires persistent descent: SST patterns and blocking anchor the subsiding branch over land

Subsidence and the physics of dry weather

Precipitation requires ascent, and drought is ultimately the result of persistent descending motion or the persistent displacement of storm tracks away from a region. Descending air warms adiabatically at the dry lapse rate of about 9.8 K km⁻¹, so its relative humidity falls sharply, clouds evaporate, and surface insolation and evaporative demand rise. The subtropical deserts lie beneath the descending branches of the Hadley circulation; seasonal and interannual droughts in the margins of these deserts — the Mediterranean, the Sahel, the southwestern United States, southern Africa, southern Australia — occur when the subtropical high-pressure belt expands, strengthens or stalls. Observations and models indicate a poleward expansion of the tropical belt in recent decades, with contributions from greenhouse gases, stratospheric ozone depletion and natural variability, although the magnitude remains uncertain.

ENSO teleconnections

The El Niño–Southern Oscillation is the dominant source of interannual drought predictability. During El Niño, warm sea surface temperatures (SSTs) in the central and eastern equatorial Pacific shift deep convection eastward, weakening the Walker circulation and producing anomalous subsidence over the Maritime Continent and northern Australia. Typical El Niño drought regions include eastern Australia, Indonesia and Papua New Guinea, southern Africa (in the austral summer), northeastern Brazil, Central America and the Caribbean, and India, where El Niño years are associated with a weakened summer monsoon (although the relationship is not one-to-one and weakened in the late twentieth century). La Niña tends to produce drought across the southern tier of the United States and northern Mexico, in Argentina and southern Brazil, and in equatorial East Africa during the October–December "short rains". These are statistical tendencies, not certainties: each event differs in its spatial SST pattern (central-Pacific versus eastern-Pacific events), and atmospheric internal variability can overwhelm the forced signal in any given season.

The Indian Ocean Dipole

The Indian Ocean Dipole (IOD) is an east–west SST gradient across the tropical Indian Ocean. In its positive phase, cooler water off Sumatra and warmer water in the west enhance convection over East Africa and suppress it over Indonesia and southern Australia. A negative IOD, especially combined with La Niña, is strongly associated with failure of the East African short rains; a positive IOD is linked to drought in southeastern Australia, and the extreme positive IOD of 2019 contributed to the conditions that preceded the 2019–20 Australian bushfires.

Multidecadal ocean variability

Pacific Decadal Variability, of which the Pacific Decadal Oscillation (PDO) is one index, modulates ENSO teleconnections on decadal time scales; the negative (cool) phase resembles a persistent weak La Niña and favours drought in the southwestern United States. Atlantic Multidecadal Variability (the AMO) has been linked to Sahel rainfall and North American drought. McCabe, Palecki and Betancourt (2004) found that much of the multidecadal variance in US drought frequency was associated with these two modes, with the combination of a positive AMO and a negative PDO particularly favourable for drought over the conterminous United States. Giannini, Saravanan and Chang (2003) showed with an atmospheric model forced only by observed SSTs that the Sahel's wet 1950s and dry 1970s–80s could be reproduced largely from the interhemispheric SST contrast and Indian Ocean warming. Whether the AMO is a genuine internal oscillation or partly a response to anthropogenic aerosol forcing is debated, and this bears directly on attribution of the Sahel drought (Case Studies).

Blocking, ridges and stationary waves

On subseasonal to seasonal time scales, drought is frequently organised by quasi-stationary anticyclones. Atmospheric blocking — a persistent high that splits or diverts the westerly jet for a week or more — suppresses precipitation and favours clear skies and heat beneath it; the 2010 Russian heatwave and drought and the 2003 European heatwave were both associated with persistent blocking. In winter, a persistent ridge off the west coast of North America deflects Pacific storms northward; during 2013–14 such a feature, nicknamed the "Ridiculously Resilient Ridge" by Daniel Swain, was central to the California drought. Such ridges are often forced, at least in part, by remote tropical heating patterns that excite stationary Rossby wave trains, which is why they can recur year after year when SST anomalies persist. Distinguishing forced from internally generated circulation anomalies is one of the main difficulties of drought prediction, and climate models have known biases in their representation of blocking frequency.

Moisture transport

Finally, drought can result from changes in moisture supply rather than ascent alone. Much continental precipitation is recycled from upwind land evapotranspiration (Lesson 5), and the low-level jets that import oceanic moisture — the Great Plains low-level jet, the South American low-level jet — vary with large-scale circulation. A weakened or displaced jet can starve a region of moisture even where synoptic disturbances still pass.

✏️ Your Turn

(a) In a region, drought years occur in 20 % of years on average. El Niño years make up 25 % of all years, and in El Niño years the probability of drought is 50 %. Given that a drought year has occurred, what is the probability that it was an El Niño year?
(b) Air in a subsiding anticyclone descends dry-adiabatically from 1,500 m to the surface. By how much does it warm, and qualitatively what happens to its relative humidity?

Answers: (a) By Bayes' theorem, P(El Niño | drought) = P(drought | El Niño) × P(El Niño)/P(drought) = 0.5 × 0.25/0.2 = 0.625, so 62.5 % of droughts occur in El Niño years. (b) ΔT ≈ 9.8 K km⁻¹ × 1.5 km ≈ 14.7 K. Since its vapour content is conserved while the saturation vapour pressure rises roughly 6–7 % per kelvin, the relative humidity falls by more than half, which suppresses cloud and raises evaporative demand at the surface.

─────────────────────────────────
Lesson 5: Land–Atmosphere Feedbacks and Flash Droughts
─────────────────────────────────

📌 Key idea of this section:

        Dry soil → less λE, more H → warmer, deeper boundary layer, higher VPD → faster drying

Soil-moisture regimes

The strength of land–atmosphere coupling depends on where a region sits in the soil-moisture regime space (Seneviratne et al. 2010). When soil moisture is above a critical value, ET is limited by available energy and is insensitive to soil moisture; when it is below the wilting point, ET is near zero. Between these thresholds lies a transitional regime in which ET is roughly linear in soil moisture, and it is here that soil-moisture anomalies most strongly affect the surface fluxes and the overlying atmosphere. The GLACE multi-model experiment (Koster et al. 2004) identified "hot spots" of strong soil-moisture–precipitation coupling in transitional zones between wet and dry climates, such as the central Great Plains of North America, the Sahel and northern India.

Temperature and precipitation feedbacks

The soil-moisture–temperature feedback is well established: as soils dry, the Bowen ratio rises, sensible heating warms the boundary layer, VPD increases, and evaporative demand rises further, while plants under stress close their stomata and transpire less. This positive feedback amplifies heat extremes; the most intense midlatitude heatwaves are almost always associated with preceding soil-moisture deficits. The soil-moisture–precipitation feedback is more ambiguous. Drier soils reduce local moisture supply and moist static energy, tending to suppress convection (a positive feedback), but a deeper, warmer boundary layer over dry patches can also favour convective initiation, and observational studies have found that afternoon storms in some regions preferentially form over drier soils (a negative feedback at small scales). The sign therefore depends on scale and region. Larger-scale feedbacks include reductions in the downwind moisture supplied by evapotranspiration (moisture recycling) and vegetation–albedo feedbacks of the kind Charney (1975) proposed for the Sahel, in which loss of vegetation raises albedo, cools the surface radiatively, enhances subsidence and further suppresses rain. Charney's hypothesis stimulated decades of research; current evidence suggests SST forcing was the primary cause of the Sahel drought and land-surface feedbacks amplified it.

Flash droughts

Classical drought develops over seasons; flash droughts develop within weeks. The term gained currency after the 2012 drought in the central United States, when an anomalously warm spring followed by a hot, dry, sunny June–July rapidly depleted soil moisture across the Corn Belt and central Plains. Otkin et al. (2018) proposed that flash drought should be defined by its rate of intensification, not merely its duration, and it is now usually identified by a rapid decline in soil-moisture percentiles or a rapid increase in evaporative stress — for example a fall from above the 40th to below the 20th soil-moisture percentile within a few weeks, or a two-category or greater degradation in the US Drought Monitor within four weeks. Two pathways are recognised: precipitation-deficit flash droughts, in which rain abruptly stops during a period of high demand, and demand-driven flash droughts, in which heat, low humidity, wind and sunshine drive very high ET even without an exceptional precipitation deficit. Most real events combine both.

Flash droughts are dangerous because they can strike during critical crop stages — maize pollination, for instance — before conventional monitoring flags a problem. US maize yield in 2012 was about 123 bushels per acre, roughly a quarter below the trend expectation, and the drought was among the costliest US weather disasters of the decade. Other notable events include the 2017 northern Great Plains flash drought, which led to large wheat losses and wildfires in Montana and the Dakotas, the 2010 Russian drought and heatwave, which reduced grain harvests sufficiently that Russia banned grain exports, and the 2019 flash drought in the southeastern United States. Pendergrass et al. (2020) argued that flash droughts present a new challenge for subseasonal-to-seasonal (2 weeks to 2 months) prediction, a lead-time window where skill is generally low. Evaporative Stress Index anomalies, rapid changes in modelled soil moisture and VPD forecasts are the most promising early indicators.

✏️ Your Turn

(a) Daily mean available energy R_{n} − G is 150 W m⁻². Compute the latent heat flux and the equivalent evapotranspiration in mm day⁻¹ for a moist surface with Bowen ratio β = 0.25 and for a drought-stressed surface with β = 2.0.
(b) In the moist case, where does the remaining energy go, and why does this matter for the overlying air?

Answers: (a) Since R_{n} − G = H + λE = λE(1 + β), λE = 150/1.25 = 120 W m⁻² for β = 0.25, and 150/3.0 = 50 W m⁻² for β = 2.0. Converting with λ = 2.45 MJ kg⁻¹: 120 × 86,400/2.45 × 10⁶ ≈ 4.2 mm day⁻¹, and 50 × 86,400/2.45 × 10⁶ ≈ 1.8 mm day⁻¹. (b) In the moist case H = 30 W m⁻²; in the dry case H = 100 W m⁻², more than three times as much. The extra sensible heating warms and deepens the boundary layer and raises VPD, the positive feedback that links drought to heatwaves.

─────────────────────────────────
Lesson 6: Hydrological Drought, Streamflow Sensitivity and Groundwater
─────────────────────────────────

📌 Key idea of this section:

        Runoff is a small residual of P − ET, so modest climate anomalies produce amplified streamflow deficits

The Budyko framework

Over long periods, ΔS ≈ 0 and the water balance reduces to Q = P − ET. Budyko observed that the long-term evaporative fraction ET/P is primarily a function of the aridity ratio φ = PET/P, approaching φ when energy is limiting (φ much less than 1) and 1 when water is limiting (φ much greater than 1). A widely used one-parameter form is Fu's equation:

        ET/P = 1 + φ − (1 + φ^{ω})^{1/ω}

where ω (typically about 2–3, with 2.6 a common default) reflects catchment properties such as vegetation, soil storage and rainfall seasonality. Because Q is the small difference between two large numbers in semi-arid basins, it is highly sensitive to changes in P and PET. The precipitation elasticity of streamflow, ε_{P} = (dQ/Q)/(dP/P), is typically about 1–3 and higher in drier basins (Sankarasubramanian, Vogel and Limbrunner 2001): a 10 % precipitation deficit can produce a 20–30 % streamflow deficit. Temperature sensitivity matters too. For the Colorado River, Udall and Overpeck (2017) estimated that warming explained roughly one-sixth to one-half of the 2000–2014 flow loss of about 19 %, and Milly and Dunne (2020) estimated a sensitivity of about 9.3 % decrease in mean annual flow per °C of warming, driven largely by snow loss and reduced albedo.

Reservoirs and human influence

Most large rivers are now regulated, and reservoirs both buffer and complicate drought. Storage carries water across dry years, but reliable yield declines non-linearly as a multi-year drought lengthens, and operating rules (hedging, curtailment priorities, environmental flow obligations) determine who bears the shortage. Human activities also generate drought-like conditions directly: upstream abstraction and irrigation can produce hydrological drought downstream in the absence of any meteorological anomaly. Van Loon et al. have argued that drought in the Anthropocene must be analysed as a coupled human–natural phenomenon, distinguishing climate-induced, human-induced and human-modified droughts.

Groundwater drought and depletion

Groundwater is the slowest storage and the largest freshwater reservoir accessible to people, and it acts as a buffer during surface-water droughts — which is exactly when pumping increases. In confined and unconfined aquifers alike, sustained drought pumping can lower water tables, dry shallow wells, reduce baseflow to streams, and cause irreversible compaction of fine-grained aquitards, producing land subsidence and permanent loss of storage capacity. In California's San Joaquin Valley, subsidence during the 2012–16 drought locally approached 5 cm per month, according to NASA radar interferometry, damaging canals and infrastructure.

GRACE: weighing water from space

The Gravity Recovery and Climate Experiment (GRACE), a joint NASA–German mission launched in March 2002 and operated until 2017, and its successor GRACE Follow-On (launched May 2018), measure month-to-month changes in Earth's gravity field via microwave (and on GRACE-FO, laser) ranging between twin satellites about 220 km apart. After removing atmospheric and oceanic mass changes, the residual over land reflects changes in terrestrial water storage — snow, surface water, soil moisture and groundwater — expressed as an equivalent water thickness. Resolution is coarse (a few hundred kilometres, effectively ≥ about 150,000–200,000 km²), and groundwater changes are inferred by subtracting modelled or observed soil moisture and surface storage, which adds uncertainty. GRACE has nevertheless revealed groundwater depletion in many major aquifers. Rodell, Velicogna and Famiglietti (2009) estimated depletion in the Indian states of Rajasthan, Punjab and Haryana (including Delhi) of about 4.0 ± 1.0 cm yr⁻¹ equivalent water height, or 17.7 ± 4.5 km³ yr⁻¹, between August 2002 and October 2008. Famiglietti et al. (2011) found large groundwater losses in California's Central Valley over 2003–2010, much of it during the 2006–2009 drought, and subsequent studies documented even faster losses in 2012–15. Rodell et al. (2018) synthesised 14 years of GRACE data and identified emerging trends in freshwater availability worldwide, attributing them to a mix of human water management (notably groundwater extraction), climate change and natural variability.

The specific-yield link

To translate a mass loss into a water-table decline in an unconfined aquifer, divide the equivalent water thickness by the specific yield S_{y}, the volume of water released per unit area per unit decline of the water table; S_{y} typically ranges from about 0.01–0.05 for fine-grained sediments to 0.2–0.3 for clean sands and gravels.

✏️ Your Turn

(a) A semi-arid basin has P = 600 mm yr⁻¹ and PET = 900 mm yr⁻¹. Using Fu's equation with ω = 2.6, compute mean annual runoff. Then compute runoff if P falls by 15 % to 510 mm with PET unchanged, and the implied precipitation elasticity.
(b) Repeat with P = 510 mm and PET increased to 950 mm (a hotter drought). What is the total percentage decline in runoff?
(c) GRACE shows a storage loss of 4.0 cm yr⁻¹ over an area of 438,000 km². Convert this to km³ yr⁻¹ and to a water-table decline for an aquifer with S_{y} = 0.10.

Answers: (a) φ = 1.5, ET/P = 1 + 1.5 − (1 + 1.5^{2.6})^{1/2.6} ≈ 0.817, so Q ≈ 110 mm yr⁻¹. With P = 510 mm, φ ≈ 1.765 and Q ≈ 74 mm yr⁻¹, a 32 % decline; ε_{P} ≈ 0.32/0.15 ≈ 2.2. (b) With φ = 950/510 ≈ 1.86, Q ≈ 68 mm yr⁻¹, a decline of about 38 % from the baseline — the additional demand removes another six percentage points of flow. (c) 0.04 m × 4.38 × 10¹¹ m² ≈ 1.75 × 10¹⁰ m³ ≈ 17.5 km³ yr⁻¹. Water-table decline ≈ 0.04 m/0.10 = 0.4 m yr⁻¹.

─────────────────────────────────
Lesson 7: Paleoclimate Reconstructions and Megadroughts
─────────────────────────────────

📌 Key idea of this section:

        The instrumental record is too short: tree rings show multidecadal megadroughts that dwarf twentieth-century droughts

Why the past matters

Instrumental precipitation records rarely exceed 150 years and are shorter still in much of Africa, Asia and South America. That is too short to sample the full range of natural drought variability, especially droughts lasting decades. Water infrastructure designed only on the instrumental record — notably the 1922 Colorado River Compact, negotiated during one of the wettest periods of the past several centuries — may assume more water than the long-term climate supplies. Paleoclimate proxies extend the record across centuries to millennia.

Dendrochronology and drought reconstruction

In semi-arid regions, the annual radial growth of moisture-sensitive conifers is limited by soil water, so ring width tracks growing-season moisture. The workflow is: crossdate many trees precisely to the calendar year using shared ring-width patterns; detrend each series to remove age- and size-related growth trends (with methods chosen to preserve as much low-frequency variance as possible, such as regional curve standardisation); average into a ring-width index (RWI) chronology; calibrate against an instrumental target such as summer PDSI over a common period; and verify on withheld years using statistics such as the reduction of error (RE) and coefficient of efficiency (CE), where positive values indicate skill above climatology. Cook et al. (1999, 2004) used a point-by-point regression of hundreds of chronologies onto a grid of summer PDSI to build the North American Drought Atlas, later extended into the Monsoon Asia, Old World and Mexican drought atlases. Reconstructions typically explain 40–70 % of the calibration-period variance, so individual reconstructed years carry substantial uncertainty, and the variance lost in regression means that reconstructed extremes are often damped.

Other proxies

Lake sediments, cave speleothems (whose oxygen isotopes reflect rainfall amount and source), ocean sediments, relict tree stumps in lakes and rivers, and historical documents all provide independent drought information. Stine (1994) dated tree stumps rooted in what are now submerged lake and river beds of the Sierra Nevada to show that two extreme medieval droughts occurred, one lasting more than two centuries and another more than 140 years. Haug et al. (2003) used titanium in Cariaco Basin sediments off Venezuela to document multiyear droughts around 810, 860 and 910 CE coincident with phases of the Classic Maya collapse, and Medina-Elizalde and Rohling (2012) estimated that the associated reductions in annual precipitation were modest, perhaps 25–40 %, yet enough to stress Maya water systems. Causality in such cases is debated: archaeologists emphasise that warfare, political fragmentation and environmental degradation interacted with climate, and drought is better framed as a stressor than a sole cause.

Medieval megadroughts and the Great Drought

Cook et al. (2004) found that the western United States experienced a period of elevated aridity from about 900 to 1300 CE — the Medieval Climate Anomaly — containing several megadroughts, typically defined as droughts lasting two decades or more, that were more severe and persistent than any twentieth-century event. The late-thirteenth-century "Great Drought" (approximately 1276–1299 CE), first identified by A. E. Douglass from tree rings, coincides with the depopulation of the Four Corners region by Ancestral Puebloan communities, although again the depopulation also reflected social and demographic processes. Paleoclimate data also highlight megadroughts elsewhere: in the Asian monsoon region, the Ming Dynasty drought (around 1638–41) and the Strange Parallels drought (1756–68), and the late fourteenth- and early fifteenth-century droughts that Buckley et al. (2010) linked to the decline of Angkor in Cambodia. Proposed causes of medieval megadroughts include persistent La Niña-like Pacific conditions, possibly enhanced by high solar irradiance and low volcanic activity, together with land-surface feedbacks.

Placing modern droughts in context

Tree rings allow modern droughts to be ranked against a millennium-long distribution. Cook, Seager and Smerdon (2014) showed that 1934 was the most extensive single-year drought in western North America in the reconstructed record since 1000 CE. Griffin and Anchukaitis (2014) found that 2014 was the most severe single year of drought in California in at least 1,200 years by the tree-ring PDSI, and that the accumulated 2012–14 moisture deficit was also the most severe; the precipitation deficit alone was not unprecedented, and it was the combination of low precipitation and record high temperature that made the drought exceptional. Williams, Cook and Smerdon (2022) found that 2000–2021 was the driest 22-year period in southwestern North America since at least 800 CE.

✏️ Your Turn

(a) A calibration of summer PDSI on a regional ring-width index gives PDSI = −4.2 + 4.5 × RWI, with a calibration correlation r = 0.75. Reconstruct PDSI for a year with RWI = 0.55, and state the fraction of variance explained.
(b) A 1,200-year reconstruction contains four megadroughts. Treating megadrought onsets as a Poisson process, estimate the probability that at least one begins in the next 50 years under stationary climate.

Answers: (a) PDSI = −4.2 + 4.5 × 0.55 ≈ −1.73 (mild drought, near the −2 moderate-drought threshold). The explained variance is r² = 0.5625, about 56 %, so the reconstructed value has a substantial uncertainty and the true PDSI may well have been below −2. (b) The rate is 4/1,200 = 1/300 per year. P(at least one in 50 years) = 1 − e^{−50/300} ≈ 0.15, about 15 % — a non-negligible risk for infrastructure with 50–100-year lifetimes, even before considering warming.

─────────────────────────────────
Lesson 8: Impacts — Agriculture, Ecosystems, Food Security and Famine
─────────────────────────────────

📌 Key idea of this section:

        1 − Y_{a}/Y_{m} = K_{y} (1 − ET_{a}/ET_{m});  but famine = shock × vulnerability, not rainfall alone

Crop response to water deficit

Agricultural impact depends on the timing as well as the magnitude of water stress. FAO Irrigation and Drainage Paper 33 (Doorenbos and Kassam 1979) introduced a linear relationship between relative yield loss and relative evapotranspiration deficit, with a yield response factor K_{y} that varies by crop and growth stage. Values greater than one indicate crops more sensitive than proportional; for maize, the seasonal K_{y} is about 1.25, and stress at flowering is particularly damaging because pollen viability and silk emergence are sensitive to heat and water deficits. Modern process-based crop models (DSSAT, APSIM, AquaCrop) simulate these effects mechanistically. Statistical studies of US maize show yields strongly sensitive to the number of days above about 29–30 °C, partly because high temperatures raise VPD and water demand (Schlenker and Roberts 2009; Lobell et al. 2014).

Ecosystems, fire and water quality

Drought kills trees by hydraulic failure — embolism in xylem when tension exceeds the cavitation threshold — and by carbon starvation when prolonged stomatal closure limits photosynthesis, often in combination with insect outbreaks such as bark beetles. The 2012–16 California drought killed an estimated 100 million or more trees in the Sierra Nevada, according to US Forest Service aerial surveys. Drought-weakened, dry fuels raise fire danger, linking drought to wildfire regimes. Low flows concentrate pollutants, raise water temperature and reduce dissolved oxygen, causing fish kills and harmful algal blooms. Droughts also affect energy systems by reducing hydropower and the cooling water available to thermal power stations, and they reduce river navigability, as on the Rhine in 2018 and 2022.

From drought to famine

The connection between drought and mass mortality is mediated by social systems. Amartya Sen's entitlement approach (Sen 1981) showed that several major famines, including the 1943 Bengal famine, occurred without a large decline in total food availability: people starved because their entitlements — wages, prices, assets, social claims — collapsed. Drought acts on entitlements by destroying harvests, killing livestock and the income they provide, depressing the price of livestock that distressed herders sell while raising grain prices (a collapsing terms of trade), and eliminating agricultural employment. Conflict, restricted humanitarian access, market disruption, displacement, epidemic disease, and deliberate policy choices frequently determine the death toll. The classic modern examples — Ethiopia 1983–85 and Somalia 2011 — are both cases in which drought was a trigger operating within a context of conflict and political constraint (see Case Studies). Mortality in such crises is driven more by disease interacting with malnutrition — measles, diarrhoeal disease, cholera, malaria — than by starvation alone, and children under five are disproportionately affected.

Measuring food insecurity

The Integrated Food Security Phase Classification (IPC) classifies areas into five phases from Minimal (1) to Famine (5). A Famine classification requires that at least 20 % of households face extreme food gaps, the prevalence of global acute malnutrition in children exceeds 30 %, and the crude death rate exceeds 2 deaths per 10,000 people per day. The Famine Early Warning Systems Network (FEWS NET), established by USAID in 1985 after the Ethiopian famine, combines satellite rainfall and vegetation monitoring with market prices, livelihood analysis and field surveys to project food insecurity months ahead. The 2010–11 Horn of Africa crisis showed that early warning is necessary but not sufficient: FEWS NET and others issued clear warnings in 2010, yet large-scale response came only after famine was declared in July 2011.

✏️ Your Turn

(a) A maize crop with K_{y} = 1.25 experiences a seasonal actual evapotranspiration of 70 % of maximum. Estimate the relative yield loss.
(b) In a displaced population of 200,000, 1,500 deaths are recorded over 30 days. Compute the crude death rate in deaths per 10,000 per day, compare it with the IPC famine threshold, and estimate excess deaths if the baseline is 0.5 per 10,000 per day.

Answers: (a) 1 − Y_{a}/Y_{m} = 1.25 × (1 − 0.70) = 0.375, a yield loss of about 37.5 %. (b) CDR = 1,500/(200,000 × 30) × 10,000 = 2.5 per 10,000 per day, above the famine threshold of 2. Excess deaths = (2.5 − 0.5) × (200,000/10,000) × 30 = 1,200.

─────────────────────────────────
Lesson 9: Monitoring, Forecasting and Drought Management
─────────────────────────────────

📌 Key idea of this section:

        From crisis management to risk management: monitoring and early warning, vulnerability assessment, mitigation and response

The US Drought Monitor

The US Drought Monitor (USDM), published weekly since 1999 by the National Drought Mitigation Center at the University of Nebraska–Lincoln together with NOAA and the US Department of Agriculture (Svoboda et al. 2002), is the best-known example of a blended, expert-curated drought product. Rather than relying on a single index, authors synthesise many indicators — SPI at multiple scales, PDSI, soil-moisture model percentiles, streamflow, snowpack, vegetation health, the Evaporative Stress Index — together with local reports, and draw categories based on the "convergence of evidence". The five categories are pegged to percentiles: D0 abnormally dry (21st–30th percentile), D1 moderate (11th–20th), D2 severe (6th–10th), D3 extreme (3rd–5th) and D4 exceptional (0–2nd). Labels S (short-term, typically under six months, agricultural and grassland impacts) and L (long-term, hydrological and ecological impacts) indicate dominant time scales. USDM categories have legal force: they trigger eligibility for USDA disaster programmes such as the Livestock Forage Disaster Program and some tax provisions. Similar products exist for North America (NADM), Europe (the European Drought Observatory of the Copernicus Emergency Management Service) and globally (the Global Drought Observatory).

Forecasting

Drought forecasting relies on three sources of predictability: initial conditions in slow land-surface storages (soil moisture, snow, groundwater), slowly evolving SST anomalies such as ENSO, and long-term trends. Seasonal ensemble forecasts from dynamical models (such as the North American Multi-Model Ensemble and the Copernicus C3S multi-system) provide probabilistic outlooks; skill for precipitation is modest outside ENSO-sensitive regions and seasons, whereas skill for persistence and recovery of existing drought is higher because of storage memory. Ensemble streamflow prediction uses current watershed states driven by historical or forecast weather traces. Subseasonal (2–8 week) prediction, critical for flash drought, is an active frontier. The challenge for drought termination forecasting is quantifying how much precipitation would be needed to end a drought, which the USDM and NOAA estimate from the current deficit.

Drought management and policy

Wilhite has long argued that drought policy must move from reactive crisis management — emergency relief after impacts appear — to proactive risk management. The High-level Meeting on National Drought Policy (Geneva 2013), convened by WMO, FAO and the UNCCD, endorsed this shift, and the WMO–GWP Integrated Drought Management Programme published guidelines built on three pillars: monitoring and early warning, vulnerability and impact assessment, and mitigation and response measures (WMO and GWP 2014; Wilhite, Sivakumar and Pulwarty 2014). In practice drought plans define indicators and triggers that activate staged responses, for example voluntary conservation, then mandatory restrictions, then supply augmentation and emergency allocation. Supply-side options include inter-basin transfers, groundwater banking and managed aquifer recharge, water recycling and desalination; demand-side options include pricing, metering, efficiency standards, leak reduction and temporary land fallowing with compensation. Water markets, notably in Australia's Murray–Darling Basin, allow water to move to higher-value uses during scarcity. Financial instruments include crop insurance, index insurance triggered by rainfall or vegetation indices (which reduces moral hazard and administrative cost but suffers basis risk — payouts that do not match actual losses), and contingent credit. Anticipatory action, in which humanitarian funds are released on a forecast trigger before impacts peak, is increasingly used in drought-prone pastoral regions.

✏️ Your Turn

(a) A city's reservoir system has capacity 900 GL and is at 25 % of capacity; the bottom 10 % is unusable in practice. Demand is 600 ML day⁻¹ and dry-season inflow 100 ML day⁻¹. How many days of supply remain? How many if restrictions cut demand to 450 ML day⁻¹?
(b) A county's soil moisture is at the 4th percentile and streamflow at the 2nd. Which USDM categories do these indicate, and what other evidence would an author weigh?

Answers: (a) Usable storage is 15 % of 900 GL = 135 GL = 135,000 ML. Net drawdown 500 ML day⁻¹ gives 270 days; with demand cut to 450 ML day⁻¹, net drawdown 350 ML day⁻¹ gives about 386 days — restrictions buy nearly four months. (b) The 4th percentile corresponds to D3 (extreme) and the 2nd percentile to D4 (exceptional). The author would weigh other indicators, the time scale of each (long-term streamflow suggests an L impact) and local reports of impacts before deciding between D3 and D4.

─────────────────────────────────
Lesson 10: Drought in a Changing Climate — Detection, Attribution and Open Questions
─────────────────────────────────

📌 Key idea of this section:

        Warming raises evaporative demand everywhere; whether drought increases depends on region, metric and time scale

What theory predicts

Thermodynamic arguments give robust expectations: a warmer atmosphere has higher saturation vapour pressure (about 7 % per K), so VPD and PET rise; snowpack shrinks and melts earlier, shifting runoff timing; and a "wet gets wetter, dry gets drier" pattern is expected for P − E over the oceans, though not simply over land. Dynamic changes — poleward expansion of the subtropical dry zones, shifts in storm tracks and monsoons — are less certain and regionally variable. Precipitation also becomes more variable, with longer dry spells punctuated by heavier rainfall in many regions, a pattern sometimes called "precipitation whiplash".

What has been observed

Assessing global trends in drought is surprisingly contentious because results depend on the index and data. Dai (2011) reported widespread drying since 1950 using PDSI; Sheffield, Wood and Roderick (2012) argued that much of this trend arose from using temperature-based PET and that there had been little change in global drought over the past 60 years; Trenberth et al. (2014) reconciled the views by highlighting the role of precipitation datasets and natural variability, while agreeing that warming increases drought intensity where it occurs. IPCC AR6 (Seneviratne et al. 2021) concluded that human-induced climate change has contributed to increases in agricultural and ecological droughts in some regions, with medium confidence, and to increases in hydrological droughts in some regions, also with medium confidence, while noting limited confidence in many individual regions. AR6 assessed that an agricultural and ecological drought in drying regions that occurred once in ten years on average in the 1850–1900 climate now occurs about 1.7 times as often, and is projected to occur about 2.0 times as often at 1.5 °C, 2.4 times at 2 °C and 4.1 times at 4 °C of global warming.

Event attribution

Probabilistic event attribution compares the probability of an event in the current climate P₁ with that in a counterfactual pre-industrial climate P₀, using observations and model ensembles. The probability ratio PR = P₁/P₀ and the fraction of attributable risk FAR = 1 − P₀/P₁ summarise the result. For drought, attribution depends strongly on the variable: studies often find a weak or undetectable signal in precipitation, but a clear signal in temperature-driven evaporative demand and soil moisture. For example, World Weather Attribution found that human-induced warming made the 2020–22 Horn of Africa agricultural drought about 100 times more likely, almost entirely through higher evaporative demand, while precipitation trends were mixed (long-rains decline linked to warming, short-rains failures not clearly). Otto et al. (2018) estimated that warming made the 2015–17 Western Cape rainfall deficit roughly three times more likely, with large uncertainty. Williams et al. (2020, 2022) attributed about 42 % of the severity of the 2000–2021 southwestern North American soil-moisture megadrought to anthropogenic warming, concluding that without it the period would probably not have reached megadrought status. Attribution studies of drought face particular difficulties: long events reduce the effective sample size; models struggle with the multidecadal variability that dominates drought; and observational records in many drought-prone regions are sparse.

Open questions

Several research questions remain prominent. How much does CO₂-induced stomatal closure offset rising PET, and do aridity indices overstate future drying? Are climate models under-representing multidecadal variability and the persistence of circulation anomalies, and therefore under-estimating megadrought risk? How will groundwater respond as recharge regimes shift and pumping intensifies? Can subseasonal forecasts give actionable warning of flash droughts? How should non-stationarity be incorporated into reservoir design and water allocation agreements written for a stationary climate? And how can drought risk be reduced for the poorest populations, for whom drought impacts are governed as much by conflict, markets and governance as by rainfall?

✏️ Your Turn

(a) An agricultural drought with a 10-year return period in the pre-industrial climate is projected to become 2.4 times as frequent at 2 °C of warming. What is its new return period?
(b) An attribution study finds PR = 3. Compute the fraction of attributable risk.
(c) By what percentage does the saturation vapour pressure increase when temperature rises from 20.0 °C to 21.5 °C?

Answers: (a) P rises from 0.10 to 0.24 per year, so the return period falls to about 1/0.24 ≈ 4.2 years. (b) FAR = 1 − 1/3 ≈ 0.67: two-thirds of the current risk of such an event is attributable to the anthropogenic change. (c) e°(20.0) ≈ 2.34 kPa and e°(21.5) ≈ 2.56 kPa, an increase of about 9.7 %, roughly 6.5 % per °C.

═════════════════════════════════════════════
Case Studies
═════════════════════════════════════════════

The following nine droughts illustrate the physical mechanisms and human factors developed in the lessons. They span 150 years and five continents. Mortality and loss figures for historical droughts are frequently uncertain, and where scholarly estimates differ widely the range is given.

1876–1878 The Global Drought and Famine

Between 1876 and 1878, near-simultaneous droughts struck India, northern China, northeastern Brazil, southern Africa and parts of other tropical and subtropical regions. Singh et al. (2018) showed that the event coincided with one of the strongest El Niño events of the past 150 years (1877–78), a record-strength positive Indian Ocean Dipole, and an exceptionally warm North Atlantic, preceded by a strongly negative phase of Pacific decadal variability that had already produced drought in China and India in 1875–76. The combination of these modes produced one of the most extensive multi-continent droughts in the instrumental record.

The mortality was catastrophic, although all estimates are uncertain. Summing the main regional estimates gives a total of roughly 15–25 million deaths for 1876–79, and some authors give considerably higher figures. In India, estimates for the Great Famine of 1876–78 range from about 5.5 million to more than 10 million deaths; in northern China, the Great North China Famine of 1876–79 is estimated to have killed roughly 9–13 million; in Brazil, the Grande Seca in Ceará and neighbouring states killed several hundred thousand people. In India, the colonial administration under Viceroy Lytton continued grain exports and imposed parsimonious relief regimes, including the much-criticised "Temple wage" ration on relief works; historians such as Davis (2001) argue that policy greatly magnified the drought's impact. The Indian Famine Commission of 1880 led to the Famine Codes, an early systematic drought-response framework. The event also stimulated scientific inquiry: Henry Blanford of the India Meteorological Department began issuing monsoon forecasts in the 1880s, and the continuing search for the causes of monsoon failure led Gilbert Walker, in the 1920s, to describe the Southern Oscillation.

1930s Dust Bowl, Great Plains of North America

The droughts of the 1930s affected most of the United States, with peak years in 1934 and 1936; the 1934 drought was the most extensive single-year drought in the North American tree-ring record of the past millennium (Cook, Seager and Smerdon 2014). Schubert et al. (2004) showed with SST-forced atmospheric model experiments that cool tropical Pacific and warm tropical Atlantic SSTs explained much of the precipitation deficit. However, models forced by SSTs alone could not reproduce the intensity or the unusual northward location of the drought centre. Cook, Miller and Seager (2009) showed that including dust aerosol and loss of vegetation from the extensive ploughing of the southern Great Plains grasslands in preceding decades amplified the drought and shifted it northward, a human–land surface amplification.

The impacts were severe both physically and socially. Wind erosion stripped topsoil from tens of millions of acres; the "Black Sunday" storm of 14 April 1935 carried an enormous mass of dust across the southern Plains. Coinciding with the Great Depression, the drought contributed to the migration of an estimated 2.5 million people out of the Plains states during the 1930s. Summer 1936 also brought record heat, with estimates of heat-related deaths in the thousands. The policy legacy was enormous: the Soil Conservation Service (now the Natural Resources Conservation Service) was established in 1935 under Hugh Hammond Bennett, promoting contour ploughing, terracing, crop rotation, shelterbelts and the retirement of marginal cropland. The Dust Bowl remains the canonical example of how land management can amplify a climatic drought.

1968–1985 The Sahel Droughts

The Sahel, the semi-arid belt south of the Sahara, experienced a dramatic shift from the wet 1950s and 1960s to persistent drought from the late 1960s through the 1980s, with the most acute phases in 1972–73 and 1983–84. Rainfall in the 1970s and 1980s was typically 20–40 % below the 1950–69 mean, one of the largest and most persistent regional precipitation changes in the instrumental record. Lake Chad shrank from about 25,000 km² in the early 1960s to a small fraction of that by the 1980s, partly due to irrigation withdrawals as well as rainfall decline (Coe and Foley 2001).

Explanations have evolved. Charney's (1975) biogeophysical feedback hypothesis attributed the drought to overgrazing and desertification raising surface albedo. Later work, especially Giannini, Saravanan and Chang (2003), established that SST changes — a warming of the southern-hemisphere oceans and Indian Ocean relative to the northern hemisphere — reproduced the drought largely on their own, shifting the West African monsoon southward. The northern hemisphere's relative cooling may have been partly caused by anthropogenic sulphate aerosols, implying a human contribution of an unexpected kind, and the partial recovery of Sahel rainfall since the 1990s is consistent with reductions in aerosol emissions and rising greenhouse gases, though the attribution remains debated. Mortality estimates for the 1968–74 famine range widely, commonly from about 100,000 to 250,000, and substantial losses of livestock devastated pastoral livelihoods. The droughts led to the creation of the Permanent Inter-State Committee for Drought Control in the Sahel (CILSS) in 1973 and the AGRHYMET regional centre, and they framed international debates about "desertification" that culminated in the UN Convention to Combat Desertification (1994).

1983–1985 Ethiopia

Following poor rains in the early 1980s and severe failures in 1984 coinciding with the strong 1982–83 El Niño and its aftermath, Ethiopia's northern highlands — Tigray, Wollo and Eritrea (then part of Ethiopia) — suffered a catastrophic famine. Mortality estimates range from about 400,000 to 1 million; a Human Rights Watch study (de Waal 1991) estimated about 400,000 deaths and argued that a large share was attributable to government counter-insurgency policy rather than to drought. The Derg military government was fighting insurgencies in Tigray and Eritrea, restricted relief to rebel-held areas, and undertook forced resettlement of hundreds of thousands of people from the north to the south and west, during which many died. International attention, catalysed by television reporting in October 1984, generated an enormous relief effort and the Live Aid concerts of 1985.

The event remains a case study in the entitlement framework: while harvests in the affected regions were genuinely devastated, the famine's scale reflected conflict, counter-insurgency strategy, market collapse and delayed national and international response. Its institutional legacies include the founding of FEWS NET (1985) and decades of efforts to institutionalise early warning; Ethiopia's Productive Safety Net Programme (from 2005) is an example of a later shift towards predictable, pre-arranged social protection that has reduced drought mortality in subsequent crises.

1997–2009 The Millennium Drought, Southeastern Australia

The Millennium Drought (often dated 1997 or 2001 to 2009, ending with the strong La Niña of 2010–11) was the most severe recorded drought in southeastern Australia. Its most striking feature was the hydrological response: rainfall deficits of order 10–20 % produced streamflow deficits that were often several times larger, and Murray–Darling Basin inflows reached record lows, with 2006 the driest year on record for many catchments (van Dijk et al. 2013). The larger-than-expected runoff decline was attributed to the reduction in autumn rainfall that normally wets up catchments, the absence of wet years, higher temperatures, and reduced groundwater contributions, highlighting non-stationary rainfall–runoff relationships that models calibrated on earlier data failed to predict.

Large-scale drivers included a lack of La Niña and negative IOD events, which normally bring wet years, and a poleward shift and intensification of the subtropical ridge, with possible links to anthropogenic forcing. Impacts were wide-ranging: irrigated agriculture in the southern Murray–Darling Basin, especially rice and dairy, contracted sharply; the Lower Lakes at the river's mouth fell below sea level, exposing acid sulfate soils; and the drought set the stage for the catastrophic Black Saturday bushfires of February 2009 in Victoria. Policy responses were transformative: water trading expanded rapidly, the Water Act 2007 created the Murray–Darling Basin Authority and a Basin Plan with environmental water recovery, cities achieved large per-capita demand reductions (Melbourne's residential use fell to around its target of 155 litres per person per day), and major desalination plants were built for Perth, the Gold Coast, Sydney, Melbourne and Adelaide.

2012–2016 California Drought

California's drought of 2012–16 combined low precipitation with record temperatures. Diffenbaugh, Swain and Touma (2015) found that anthropogenic warming had increased the probability that low-precipitation years would coincide with warm years, and Williams et al. (2015) estimated that warming accounted for roughly 8–27 % of the 2012–14 drought anomaly. The persistent ridge over the northeastern Pacific in 2013–14 deflected winter storms. In 2014 the drought reached its greatest single-year severity in at least 1,200 years by tree-ring PDSI (Griffin and Anchukaitis 2014), and on 1 April 2015 the Sierra Nevada snowpack was about 5 % of average — the lowest in a record extending back to about 1950 and, by tree-ring reconstruction, probably the lowest in at least 500 years (Belmecheri et al. 2016).

With surface water allocations sharply cut, farmers turned to groundwater; GRACE and well data revealed rapid storage losses in the Central Valley, and subsidence locally approached 5 cm per month. Agricultural losses were estimated at about 2.2 billion US dollars in 2014 (Howitt et al.) with around 17,000 jobs lost, and about 2.7 billion dollars in 2015, though agricultural revenue overall proved resilient owing to groundwater pumping and shifts to high-value crops. Tree mortality across the Sierra Nevada exceeded 100 million trees. Governor Brown ordered a mandatory 25 % reduction in urban water use in April 2015, the first in the state's history, and the Sustainable Groundwater Management Act of 2014 required, for the first time, local agencies to bring overdrafted basins into sustainable balance over the following two decades. The drought ended abruptly with record wet atmospheric-river storms in the winter of 2016–17, an example of precipitation whiplash; Oroville Dam's spillway failure in February 2017 occurred during that subsequent wet winter.

2015–2018 Cape Town, South Africa

The Western Cape, with a Mediterranean winter-rainfall climate, experienced three consecutive dry winters in 2015, 2016 and 2017, with 2017 the driest in the record of several long-running gauges. The rainfall deficit was linked to a poleward shift of winter frontal systems and a strengthened South Atlantic high; Otto et al. (2018) estimated that anthropogenic climate change made such a rainfall deficit about three times more likely, with wide uncertainty. Estimates of the return period of the three-year deficit range from roughly a century to several centuries depending on the station and statistical method.

The Western Cape Water Supply System's major dams fell to around 20 % of capacity in early 2018, with the City of Cape Town announcing that municipal taps would be turned off — "Day Zero" — if combined storage reached 13.5 %. Level 6B restrictions in February 2018 limited residents to 50 litres per person per day, with severe agricultural curtailments and pressure management. City demand fell by more than half from its pre-drought level of about 1,100–1,200 megalitres per day to around 500–520 megalitres per day in early 2018, one of the largest and fastest urban demand reductions ever achieved. Day Zero was postponed repeatedly and then cancelled after winter rains returned in mid-2018. Lessons included the risks of reliance on a single, rain-fed surface water system, the value of clear public communication (though the Day Zero framing was also criticised for causing alarm and economic harm, especially to tourism), and the need for diversification into groundwater, reuse and desalination. The drought's unequal impacts, borne heavily by agriculture workers and lower-income households, were also widely discussed.

2000–2023 Southwestern North American Megadrought

Since 2000, southwestern North America has experienced a persistent drought that, by 2021, had become the driest 22-year period in at least 1,200 years (Williams, Cook and Smerdon 2022), surpassing the late-1500s megadrought. Precipitation has been below average, linked partly to a predominance of La Niña-like and negative PDO conditions, but anomalously high temperatures have been crucial: Williams et al. (2020) attributed roughly half of the 2000–2018 soil-moisture anomaly, and Williams, Cook and Smerdon (2022) about 42 % of the 2000–2021 anomaly, to anthropogenic warming. Colorado River flows over 2000–2014 were about 19 % below the twentieth-century average, with one-sixth to one-half of the loss attributed to warming (Udall and Overpeck 2017).

The combined storage of Lake Mead and Lake Powell, the two largest US reservoirs, fell to record lows. Lake Mead dropped to about 1,040 feet above sea level in July 2022, around a quarter of its capacity, exposing the "bathtub ring" of mineral deposits on canyon walls. In August 2021 the US Bureau of Reclamation declared the first-ever Tier 1 shortage on the Lower Colorado River for 2022, cutting Arizona's allocation, and deeper Tier 2a cuts followed for 2023. In 2023, Lower Basin states agreed to conserve about 3 million acre-feet through 2026 with federal compensation. A very wet winter of 2022–23 brought temporary relief, but it did not end the long-term deficit. The megadrought highlights the problem of allocation agreements based on a wet period: the 1922 Colorado River Compact assumed flows that the river now rarely provides, and negotiations for post-2026 operating guidelines are central to the region's water future.

2020–2023 Horn of Africa

Between late 2020 and early 2023, eastern Kenya, southern Ethiopia and Somalia experienced five consecutive failed rainy seasons — the October–December short rains of 2020, 2021 and 2022 and the March–May long rains of 2021 and 2022 — the longest sequence in the instrumental record for the region. The short-rains failures were strongly associated with a rare "triple-dip" La Niña (2020–23) in combination with negative IOD conditions; long-rains failures are part of a longer-term decline since the late 1990s. World Weather Attribution (Kimutai et al. 2023) found that the combination of low rainfall and high evaporative demand made the agricultural drought about 100 times more likely than in a pre-industrial climate.

The humanitarian impact was severe. More than 20 million people across the region faced acute food insecurity at the peak; millions of livestock died, devastating pastoral households; and more than a million people were displaced within Somalia alone. A study commissioned by the Somali government and UN agencies estimated about 43,000 excess deaths in Somalia in 2022, about half among children under five. Formal famine (IPC Phase 5) was projected for parts of Somalia in late 2022 but was not declared, partly owing to a scaled-up humanitarian response, though analysts noted that the absence of a declaration did not mean the absence of mass mortality. The crisis unfolded in a context of conflict, the economic shocks of the COVID-19 pandemic and surging global food prices in 2022, and comparisons with 2011 — when about 258,000 people died in southern and central Somalia (Checchi and Robinson 2013) — illustrate both the improvement in early action and the persistence of vulnerability.

═════════════════════════════════════════════
References
═════════════════════════════════════════════

  1. Allen, R. G., Pereira, L. S., Raes, D. and Smith, M. (1998). Crop Evapotranspiration: Guidelines for Computing Crop Water Requirements. FAO Irrigation and Drainage Paper 56. Food and Agriculture Organization of the United Nations, Rome.
  2. Cook, B. I., Miller, R. L. and Seager, R. (2009). Amplification of the North American "Dust Bowl" drought through human-induced land degradation. Proceedings of the National Academy of Sciences, 106, 4997–5001.
  3. Cook, E. R., Woodhouse, C. A., Eakin, C. M., Meko, D. M. and Stahle, D. W. (2004). Long-term aridity changes in the western United States. Science, 306, 1015–1018.
  4. Dai, A. (2011). Drought under global warming: a review. Wiley Interdisciplinary Reviews: Climate Change, 2, 45–65.
  5. Davis, M. (2001). Late Victorian Holocausts: El Niño Famines and the Making of the Third World. Verso, London.
  6. de Waal, A. (1991). Evil Days: Thirty Years of War and Famine in Ethiopia. Human Rights Watch / Africa Watch, New York.
  7. Giannini, A., Saravanan, R. and Chang, P. (2003). Oceanic forcing of Sahel rainfall on interannual to interdecadal time scales. Science, 302, 1027–1030.
  8. Griffin, D. and Anchukaitis, K. J. (2014). How unusual is the 2012–2014 California drought? Geophysical Research Letters, 41, 9017–9023.
  9. McCabe, G. J., Palecki, M. A. and Betancourt, J. L. (2004). Pacific and Atlantic Ocean influences on multidecadal drought frequency in the United States. Proceedings of the National Academy of Sciences, 101, 4136–4141.
  10. McKee, T. B., Doesken, N. J. and Kleist, J. (1993). The relationship of drought frequency and duration to time scales. Proceedings of the 8th Conference on Applied Climatology, American Meteorological Society, Anaheim, California, 179–184.
  11. Otkin, J. A., Svoboda, M., Hunt, E. D., Ford, T. W., Anderson, M. C., Hain, C. and Basara, J. B. (2018). Flash droughts: A review and assessment of the challenges imposed by rapid-onset droughts in the United States. Bulletin of the American Meteorological Society, 99, 911–919.
  12. Palmer, W. C. (1965). Meteorological Drought. Research Paper No. 45, US Weather Bureau, Washington, DC.
  13. Rodell, M., Velicogna, I. and Famiglietti, J. S. (2009). Satellite-based estimates of groundwater depletion in India. Nature, 460, 999–1002.
  14. Schubert, S. D., Suarez, M. J., Pegion, P. J., Koster, R. D. and Bacmeister, J. T. (2004). On the cause of the 1930s Dust Bowl. Science, 303, 1855–1859.
  15. Sen, A. (1981). Poverty and Famines: An Essay on Entitlement and Deprivation. Clarendon Press, Oxford.
  16. Seneviratne, S. I. and others (2021). Weather and climate extreme events in a changing climate. In: Climate Change 2021: The Physical Science Basis. Contribution of Working Group I to the Sixth Assessment Report of the Intergovernmental Panel on Climate Change, Chapter 11. Cambridge University Press.
  17. Sheffield, J., Wood, E. F. and Roderick, M. L. (2012). Little change in global drought over the past 60 years. Nature, 491, 435–438.
  18. Singh, D., Seager, R., Cook, B. I., Cane, M., Ting, M., Cook, E. and Davis, M. (2018). Climate and the Global Famine of 1876–78. Journal of Climate, 31, 9445–9467.
  19. Svoboda, M. and others (2002). The Drought Monitor. Bulletin of the American Meteorological Society, 83, 1181–1190.
  20. Udall, B. and Overpeck, J. (2017). The twenty-first century Colorado River hot drought and implications for the future. Water Resources Research, 53, 2404–2418.
  21. Van Loon, A. F. (2015). Hydrological drought explained. Wiley Interdisciplinary Reviews: Water, 2, 359–392.
  22. Vicente-Serrano, S. M., Beguería, S. and López-Moreno, J. I. (2010). A multiscalar drought index sensitive to global warming: the Standardized Precipitation Evapotranspiration Index. Journal of Climate, 23, 1696–1718.
  23. Wilhite, D. A. and Glantz, M. H. (1985). Understanding the drought phenomenon: the role of definitions. Water International, 10, 111–120.
  24. Williams, A. P., Cook, B. I. and Smerdon, J. E. (2022). Rapid intensification of the emerging southwestern North American megadrought in 2020–2021. Nature Climate Change, 12, 232–234.
  25. Williams, A. P. and others (2020). Large contribution from anthropogenic warming to an emerging North American megadrought. Science, 368, 314–318.

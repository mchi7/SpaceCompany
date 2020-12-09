// Solar System Tab

function getChemicalPlant(){
	if(metal >= chemicalPlantMetalCost && gem >= chemicalPlantGemCost && oil >= chemicalPlantOilCost){
		metal -= chemicalPlantMetalCost;
		gem -= chemicalPlantGemCost;
		oil -= chemicalPlantOilCost;
		chemicalPlant += 1;
		chemicalPlantOilCost = Math.floor(500 * Math.pow(1.1,chemicalPlant + 1));
		chemicalPlantGemCost = Math.floor(750 * Math.pow(1.1,chemicalPlant + 1));
		chemicalPlantMetalCost = Math.floor(1000 * Math.pow(1.1,chemicalPlant + 1));
		document.getElementById("chemicalPlant").innerHTML = chemicalPlant;
		document.getElementById("chemicalPlantMetalCost").innerHTML = commafy(chemicalPlantMetalCost);
		document.getElementById("chemicalPlantGemCost").innerHTML = commafy(chemicalPlantGemCost);
		document.getElementById("chemicalPlantOilCost").innerHTML = commafy(chemicalPlantOilCost);
        rocketFuelps += 1;
		refresh();
		refreshPerSec();
	}
}

function getRocket(){
	if(metal >= 1200 && gem >= 900 && oil >= 1000){
		metal -= 1200;
		gem -= 900;
		oil -= 1000;
		rocket = 1;
		document.getElementById("rocket").innerHTML = rocket;
		refresh();
	}
}

function launchRocket(){
	if(rocket >= 1 && rocketFuelps >= 2){
		rocket -= 1;
		document.getElementById("spaceRocket").className = "hidden";
		document.getElementById("collapseInner").className ="collapseInner";
		document.getElementById("moon").className = "inner";
		document.getElementById("mercury").className = "inner";
		document.getElementById("venus").className = "inner";
		document.getElementById("mars").className = "inner";
		document.getElementById("asteroidBelt").className = "inner";
		rocketLaunched = true;
	}
}

function exploreMoon(){
	if(rocketFuel >= 20){
		rocketFuel -= 20;
		document.getElementById("exploreMoon").className = "hidden";
		document.getElementById("collapseInnerPlanet").className = "collapseInnerPlanet";
		document.getElementById("spaceMetalNav").className = "other unlocked";
        document.getElementById("spaceMetalNav2").className = "other unlocked";
		resourcesUnlocked.push("spaceMetalNav", "collapseInnerPlanet");
		buttonsHidden.push("exploreMoon");
		explored.push("moon");
		placesExploredNum += 1;
		resourcesUnlockedNum += 1;
		refreshResources();
		newUnlock("resources");
	}
}

function exploreVenus(){
	if(rocketFuel >= 50){
		rocketFuel -= 50;
		document.getElementById("exploreVenus").className = "hidden";
		document.getElementById("methaneNav").className = "fuel unlocked";
        document.getElementById("methaneNav2").className = "fuel unlocked";
		document.getElementById("methanePower").className = "";
        document.getElementById("e3").className = "dot";
		resourcesUnlocked.push("methaneNav", "methanePower");
		buttonsHidden.push("exploreVenus");
		explored.push("venus");
		placesExploredNum += 1;
		resourcesUnlockedNum += 1;
		refreshResources();
		newUnlock("resources");
	}
}

function exploreMars(){
	if(rocketFuel >= 80){
		rocketFuel -= 80;
		document.getElementById("exploreMars").className = "hidden";
		document.getElementById("titaniumNav").className = "other unlocked";
        document.getElementById("titaniumNav2").className = "other unlocked";
		document.getElementById("siliconNav").className = "other unlocked";
        document.getElementById("siliconNav2").className = "other unlocked";
		resourcesUnlocked.push("titaniumNav", "siliconNav");
		buttonsHidden.push("exploreMars");
		explored.push("mars");
		placesExploredNum += 1;
		resourcesUnlockedNum += 2;
		refreshResources();
		newUnlock("resources");
	}
}

function exploreAsteroidBelt(){
	if(rocketFuel >= 200){
		rocketFuel -= 200;
		document.getElementById("exploreAsteroidBelt").className = "hidden";
		document.getElementById("wonderStation").className = "inner";
		document.getElementById("collapseOuter").className ="collapseOuter";
		document.getElementById("jupiter").className = "outer";
		document.getElementById("saturn").className = "outer";
		document.getElementById("uranus").className = "outer";
		document.getElementById("neptune").className = "outer";
		document.getElementById("pluto").className = "outer";
		document.getElementById("kuiperBelt").className = "outer";
		document.getElementById("goldNav").className = "other unlocked";
        document.getElementById("goldNav2").className = "other unlocked";
		document.getElementById("silverNav").className = "other unlocked";
        document.getElementById("silverNav2").className = "other unlocked";
		resourcesUnlocked.push("goldNav", "silverNav");
		buttonsHidden.push("exploreAsteroidBelt");
		explored.push("asteroidBelt");
		placesExploredNum += 1;
		resourcesUnlockedNum += 2;
		refreshResources();
		newUnlock("resources");
	}
}

function exploreWonderStation(){
	if(rocketFuel >= 500){
		rocketFuel -= 500;
		document.getElementById("wonderTab").className = "";
		document.getElementById("exploreWonderStation").className = "hidden";
		buttonsHidden.push("exploreWonderStation");
		explored.push("wonderStation");
		placesExploredNum += 1;
		tabsUnlocked.push("wonderTab");
		tabsUnlockedNum += 1;
		newUnlock("resources");
	}
}

function exploreJupiter(){
	if(rocketFuel >= 1000){
		rocketFuel -= 1000;
		document.getElementById("exploreJupiter").className = "hidden";
		document.getElementById("collapseOuterPlanet").className = "collapseOuterPlanet";
		document.getElementById("hydrogenNav").className = "fuel unlocked";
        document.getElementById("hydrogenNav2").className = "fuel unlocked";
		document.getElementById("fusionPower").className = "";
        document.getElementById("e6").className = "dot";
		resourcesUnlocked.push("hydrogenNav", "collapseOuterPlanet", "fusionPower");
		buttonsHidden.push("exploreJupiter");
		explored.push("jupiter");
		placesExploredNum += 1;
		resourcesUnlockedNum += 1;
		refreshResources();
		newUnlock("resources");
	}
}

function exploreSaturn(){
	if(rocketFuel >= 2000){
		rocketFuel -= 2000;
		document.getElementById("exploreSaturn").className = "hidden";
		document.getElementById("heliumNav").className = "fuel unlocked";
        document.getElementById("heliumNav2").className = "fuel unlocked";
		resourcesUnlocked.push("heliumNav");
		buttonsHidden.push("exploreSaturn");
		explored.push("saturn");
		placesExploredNum += 1;
		resourcesUnlockedNum += 1;
		refreshResources();
		newUnlock("resources");
	}
}

function explorePluto(){
	if(rocketFuel >= 5000){
		rocketFuel -= 5000;
		document.getElementById("explorePluto").className = "hidden";
		document.getElementById("iceNav").className = "other unlocked";
        document.getElementById("iceNav2").className = "other unlocked";
		resourcesUnlocked.push("iceNav");
		buttonsHidden.push("explorePluto");
		explored.push("pluto");
		placesExploredNum += 1;
		resourcesUnlockedNum += 1;
		refreshResources();
		newUnlock("resources");
	}
}

function exploreKuiperBelt(){
	if(rocketFuel >= 6000){
		rocketFuel -= 6000;
		document.getElementById("exploreKuiperBelt").className = "hidden";
		document.getElementById("solCenter").className = "outer";
		resourcesUnlocked.push("solCenter");
		buttonsHidden.push("exploreKuiperBelt");
		explored.push("kuiperBelt");
		placesExploredNum += 1;
		refreshResources();
	}
}

function exploreSolCenter(){
	if(rocketFuel >= 7000){
		rocketFuel -= 7000;
		document.getElementById("exploreSolCenter").className = "hidden";
		document.getElementById("solCenterTopTab").className = "";
		resourcesUnlocked.push("solCenterTopTab");
		buttonsHidden.push("exploreSolCenter");
		explored.push("solCenter");
		placesExploredNum += 1;
		refreshResources();
		newUnlock("solCenter");
	}
}
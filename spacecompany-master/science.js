// Research Tab

function buildLab(){
	if(wood >= labWoodCost && gem >= labGemCost && metal >= labMetalCost){
		wood -= labWoodCost;
		gem -= labGemCost;
		metal -= labMetalCost;
		lab += 1;
		labWoodCost = Math.floor(10 * Math.pow(1.1,lab + 1));
		labGemCost = Math.floor(15 * Math.pow(1.1,lab + 1));
		labMetalCost = Math.floor(20 * Math.pow(1.1,lab + 1));
		document.getElementById("lab").innerHTML = lab;
		document.getElementById("labWoodCost").innerHTML = commafy(labWoodCost);
		document.getElementById("labGemCost").innerHTML = commafy(labGemCost);
		document.getElementById("labMetalCost").innerHTML = commafy(labMetalCost);
		refresh();
		refreshPerSec();
	}
}


function unlockStorage(){
	if(science >= 5){
		science -= 5;
		document.getElementById("unlockStorage").className = "hidden";
		document.getElementById("oilStorageUpgrade").className = "";
		document.getElementById("metalStorageUpgrade").className = "";
		document.getElementById("gemStorageUpgrade").className = "";
		document.getElementById("charcoalStorageUpgrade").className = "";
		document.getElementById("woodStorageUpgrade").className = "";
		document.getElementById("unlockOil").className = "";
		available.push("unlockOil");
		researched.push("unlockStorage");
		techsResearchedNum += 1;
		newUnlock("resources");
	}
}

function unlockBasicEnergy(){
	if(science >= 20){
		science -= 20;
        
        $('#unlockenergymodal').modal('show');
        
        document.getElementById("collapseFuel").className = "collapseFuel";
        document.getElementById("collapseEnergy").className = "collapseEnergy";
		document.getElementById("charcoalNav").className = "fuel unlocked";
		document.getElementById("energyNav").className = "energy unlocked";
		//document.getElementById("collapseOther").style.border = "";
        
        document.getElementById("collapseFuel2").className = "collapseFuel";
        document.getElementById("collapseEnergy2").className = "collapseEnergy";
		document.getElementById("charcoalNav2").className = "fuel unlocked";
		document.getElementById("energyNav2").className = "energy unlocked";
		//document.getElementById("collapseOther2").style.border = "";
        
		document.getElementById("unlockBasicEnergy").className = "hidden";
		document.getElementById("unlockSolar").className = "";
		document.getElementById("unlockMachines").className = "";
		document.getElementById("upgradeEngineTech").className = "";
		resourcesUnlocked.push("energyNav", "charcoalNav");
		available.push("unlockSolar", "unlockMachines", "upgradeEngineTech");
		researched.push("unlockBasicEnergy");
		techsResearchedNum += 1;
		resourcesUnlockedNum += 2;
		refreshResources();
		newUnlock("resources");
	}
}

function unlockOil(){
	if(science >= 30){
		science -= 30;
		document.getElementById("unlockOil").className = "hidden";
		document.getElementById("oilNav").className = "other unlocked";
        document.getElementById("oilNav2").className = "other unlocked";
		refresh();
		resourcesUnlocked.push("oilNav");
		researched.push("unlockOil");
		techsResearchedNum += 1;
		resourcesUnlockedNum += 1;
		refreshResources();
		newUnlock("resources");
	}
}

function unlockSolar(){
	if(science >= 50){
		science -= 50;
		document.getElementById("unlockSolar").className = "hidden";
		document.getElementById("solarPower").className = "";
		document.getElementById("upgradeSolarTech").className = "";
		available.push("upgradeSolarTech");
		researched.push("unlockSolar");
		techsResearchedNum += 1;
		newUnlock("resources");
        document.getElementById("e2").className = "dot";
	}
}

function unlockMachines(){
	if(science >= 100){
		science -= 100;
		document.getElementById("unlockMachines").className = "hidden";
		document.getElementById("upgradeResourceTech").className = "";
		document.getElementById("oilMachine1").className = "";
		document.getElementById("metalMachine1").className = "";
		document.getElementById("gemMachine1").className = "";
		document.getElementById("charcoalMachine1").className = "";
		document.getElementById("woodMachine1").className = "";	
		document.getElementById("unlockSolarSystem").className = "";
		available.push("unlockSolarSystem", "upgradeResourceTech", "unlockDestruction");
		researched.push("unlockMachines");
		techsResearchedNum += 1;
		newUnlock("resources");
        
        document.getElementById("o2").className = "dot";
        document.getElementById("me2").className = "dot";
        document.getElementById("g2").className = "dot";
        document.getElementById("ch2").className = "dot";
        document.getElementById("w2").className = "dot";
	}
}

function upgradeResourceTech(){
	if(science >= 300){
		science -= 300;
		pumpjackOutput *= 2;
		heavyDrillOutput *= 2;
		advancedDrillOutput *= 2;
		furnaceWoodInput *= 2;
		furnaceOutput *= 2;
		laserCutterOutput *= 2;
		document.getElementById("upgradeResourceTech").className = "hidden";
		document.getElementById("pumpjackOutput").innerHTML = pumpjackOutput;
		document.getElementById("heavyDrillOutput").innerHTML = heavyDrillOutput;
		document.getElementById("advancedDrillOutput").innerHTML = advancedDrillOutput;
		document.getElementById("furnaceWoodInput").innerHTML = furnaceWoodInput;
		document.getElementById("furnaceOutput").innerHTML = furnaceOutput;
		document.getElementById("laserCutterOutput").innerHTML = laserCutterOutput;
		researched.push("upgradeResourceTech");
		techsResearchedNum += 1;
		newUnlock("resources");
	}
}

function unlockDestruction(){
	if(science >= 500){
		science -= 500;
		destructionUnlocked = true;
		document.getElementById("unlockDestruction").className = "hidden";
		for(var i = 0; i < document.getElementsByClassName("destroy").length; i++){
			document.getElementsByClassName("destroy")[i].className = "btn btn-default destroy";
		}
		researched.push("unlockDestruction");
		techsResearchedNum += 1;
		newUnlock("resources");
	}
}

function unlockSolarSystem(){
	if(science >= 500){
        $('#unlockspacemodal').modal('show');
		science -= 500;
		document.getElementById("unlockSolarSystem").className = "hidden";
		document.getElementById("solarSystemTab").className = "";
		tabsUnlockedNum += 1;
		tabsUnlocked.push("solarSystemTab");
		researched.push("unlockSolarSystem");
		techsResearchedNum += 1;
		newUnlock("solarSystem");
	}
}

function upgradeEngineTech(){
	if(science >= 1000){
		science -= 1000;
		document.getElementById("upgradeEngineTech").className = "hidden";
		charcoalEngineOutput = 4;
		document.getElementById("charcoalEngineOutput").innerHTML = charcoalEngineOutput;
		researched.push("upgradeEngineTech");
		techsResearchedNum += 1;
		newUnlock("resources");
	}
}

function upgradeSolarTech(){
	if(science >= 5000){
		science -= 5000;
		document.getElementById("upgradeSolarTech").className = "hidden";
		solarPanelOutput = 3;
		document.getElementById("solarPanelOutput").innerHTML = solarPanelOutput;
		researched.push("upgradeSolarTech");
		techsResearchedNum += 1;
		newUnlock("resources");
	}
}

function unlockPlasma(){
	if(science >= 40000){
		science -= 40000;
		document.getElementById("unlockPlasma").className = "hidden";
		document.getElementById("plasmaNav").className = "energy unlocked";
        document.getElementById("plasmaNav2").className = "energy unlocked";
		for(var i = 0; i < 4; i++){
			document.getElementById("energyNav" + [i]).style.border = "";
            document.getElementById("energyNav" + [i] + "2").style.border = "";
		}
		researched.push("unlockPlasma");
		techsResearchedNum += 1;
		noBorder.push("energyNav");
        noBorder.push("energyNav2");
		resourcesUnlocked.push("plasmaNav");
		newUnlock("resources");
	}
}

function unlockEmc(){
	if(science >= 60000){
		science -= 60000;
		document.getElementById("unlockEmc").className = "hidden";
		document.getElementById("emcPage").className = "";
		document.getElementById("unlockMeteorite").className = "";
		available.push("unlockMeteorite");
		researched.push("unlockEmc");
		techsResearchedNum += 1;
		resourcesUnlocked.push("emcPage");
		newUnlock("solCenter");

	}
}

function unlockMeteorite(){
	if(science >= 100000){
		science -= 100000;
		document.getElementById("unlockMeteorite").className = "hidden";
		document.getElementById("meteoriteNav").className = "other unlocked";
        document.getElementById("meteoriteNav2").className = "other unlocked";
		researched.push("unlockMeteorite");
		techsResearchedNum += 1;
		resourcesUnlockedNum += 1;
		resourcesUnlocked.push("meteoriteNav");
		newUnlock("resources");
	}
}

function unlockDyson(){
	if(science >= 100000){
		science -= 100000;
		document.getElementById("unlockDyson").className = "hidden";
		document.getElementById("dysonPage").className = "";
		researched.push("unlockDyson");
		techsResearchedNum += 1;
		resourcesUnlocked.push("dysonPage");
		newUnlock("solCenter");
	}
}
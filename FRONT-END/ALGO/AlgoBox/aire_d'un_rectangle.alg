<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="AFFICHER &quot;Calculons l'aire d'un rectangle&quot;" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2etat="inactif" F2defaut="" F2para="" F2lignes=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param epaisseurLigne="2" maxBoucle="500000" epaisseurPoint="2" nbDecimales="8" totalBoucles="5000000" totalAffichages="1000" arrondiAuto="vrai"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#long" algoitem="long EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#larg" algoitem="larg EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#resultat" algoitem="resultat EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="4#Calculons l'aire d'un rectangle#0" algoitem="AFFICHER &quot;Calculons l'aire d'un rectangle&quot;"/>
        <item code="2#long#pasliste" algoitem="LIRE long"/>
        <item code="2#larg#pasliste" algoitem="LIRE larg"/>
        <item code="5#resultat#long*larg#pasliste" algoitem="resultat PREND_LA_VALEUR long*larg"/>
        <item code="4#Le resultat est #0" algoitem="AFFICHER &quot;Le resultat est &quot;"/>
        <item code="20#resultat#0" algoitem="AFFICHERCALCUL resultat"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>

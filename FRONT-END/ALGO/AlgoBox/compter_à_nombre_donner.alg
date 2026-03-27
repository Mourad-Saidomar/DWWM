<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="POUR i ALLANT_DE 1 A nb" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2para="" F2lignes="" F2defaut="" F2etat="inactif"/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param arrondiAuto="vrai" totalBoucles="5000000" epaisseurLigne="2" epaisseurPoint="2" maxBoucle="500000" nbDecimales="8" totalAffichages="1000"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#nb" algoitem="nb EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#i" algoitem="i EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#x" algoitem="x EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="2#nb#pasliste" algoitem="LIRE nb"/>
        <item code="12#i#1#nb" algoitem="POUR i ALLANT_DE 1 A nb">
            <item code="13#debutpour" algoitem="DEBUT_POUR"/>
            <item code="5#x#x+1#pasliste" algoitem="x PREND_LA_VALEUR x+1"/>
            <item code="20#x#0" algoitem="AFFICHERCALCUL x"/>
            <item code="4# #1" algoitem="AFFICHER &quot; &quot;"/>
            <item code="14#finpour" algoitem="FIN_POUR"/>
        </item>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>

<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant=""/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2lignes="" F2etat="inactif" F2para="" F2defaut=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param epaisseurLigne="2" arrondiAuto="vrai" epaisseurPoint="2" maxBoucle="500000" totalBoucles="5000000" nbDecimales="8" totalAffichages="1000"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#LISTE#note" algoitem="note EST_DU_TYPE LISTE"/>
        <item code="1#NOMBRE#s_notes" algoitem="s_notes EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#m_notes" algoitem="m_notes EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#total_notes" algoitem="total_notes EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#compteur" algoitem="compteur EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="2#total_notes#pasliste" algoitem="LIRE total_notes"/>
        <item code="12#compteur#0#total_notes-1" algoitem="POUR compteur ALLANT_DE 0 A total_notes-1">
            <item code="13#debutpour" algoitem="DEBUT_POUR"/>
            <item code="2#note#compteur" algoitem="LIRE note[compteur]"/>
            <item code="103#commentaire" algoitem=""/>
            <item code="14#finpour" algoitem="FIN_POUR"/>
        </item>
        <item code="20#note[]#0" algoitem="AFFICHERCALCUL note[]"/>
        <item code="103#commentaire" algoitem=""/>
        <item code="103#commentaire" algoitem=""/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>

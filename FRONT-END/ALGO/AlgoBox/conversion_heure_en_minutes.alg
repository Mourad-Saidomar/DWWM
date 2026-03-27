<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="LIRE h"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2lignes="" F2etat="inactif" F2para="" F2defaut=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param totalAffichages="1000" nbDecimales="8" epaisseurLigne="2" totalBoucles="5000000" arrondiAuto="vrai" maxBoucle="500000" epaisseurPoint="2"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#h" algoitem="h EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#result" algoitem="result EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="4#Conversion heure en minutes#0" algoitem="AFFICHER &quot;Conversion heure en minutes&quot;"/>
        <item code="2#h#pasliste" algoitem="LIRE h"/>
        <item code="5#result#h*60#pasliste" algoitem="result PREND_LA_VALEUR h*60"/>
        <item code="20#h#0" algoitem="AFFICHERCALCUL h"/>
        <item code="4# heures fait #0" algoitem="AFFICHER &quot; heures fait &quot;"/>
        <item code="20#result#0" algoitem="AFFICHERCALCUL result"/>
        <item code="4# minutes. #0" algoitem="AFFICHER &quot; minutes. &quot;"/>
        <item code="103#commentaire" algoitem=""/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>

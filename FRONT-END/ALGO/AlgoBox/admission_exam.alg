<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="TANT_QUE (note&lt;0 OU note>20) FAIRE" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2para="" F2defaut="" F2etat="inactif" F2lignes=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param epaisseurLigne="2" nbDecimales="8" totalAffichages="1000" maxBoucle="500000" totalBoucles="5000000" arrondiAuto="vrai" epaisseurPoint="2"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="note EST_DU_TYPE NOMBRE" code="1#NOMBRE#note"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="AFFICHER &quot;Ta note est &quot;" code="4#Ta note est #0"/>
        <item algoitem="LIRE note" code="2#note#pasliste"/>
        <item algoitem="" code="103#commentaire"/>
        <item algoitem="TANT_QUE (note&lt;0 OU note>20) FAIRE" code="15#note&lt;0 OU note>20">
            <item algoitem="DEBUT_TANT_QUE" code="16#debuttantque"/>
            <item algoitem="LIRE note" code="2#note#pasliste"/>
            <item algoitem="FIN_TANT_QUE" code="17#fintantque"/>
        </item>
        <item algoitem="SI (note&lt;=9) ALORS" code="6#note&lt;=9">
            <item algoitem="DEBUT_SI" code="7#debutsi"/>
            <item algoitem="AFFICHER &quot;Non admis&quot;" code="4#Non admis#0"/>
            <item algoitem="FIN_SI" code="8#finsi"/>
            <item algoitem="SINON" code="9#sinon">
                <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                <item algoitem="AFFICHER &quot;Admis&quot;" code="4#Admis#0"/>
                <item algoitem="FIN_SINON" code="11#finsinon"/>
            </item>
        </item>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>

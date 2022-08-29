sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'sap/demo/fev4lrop/test/integration/pages/MainListReport' ,
        'sap/demo/fev4lrop/test/integration/pages/MainObjectPage',
        'sap/demo/fev4lrop/test/integration/OpaJourney'
    ],
    function(JourneyRunner, MainListReport, MainObjectPage, Journey) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('sap/demo/fev4lrop') + '/index.html'
        });

        JourneyRunner.run(
            {
                pages: { onTheMainPage: MainListReport, onTheDetailPage: MainObjectPage }
            },
            Journey.run
        );
    }
);
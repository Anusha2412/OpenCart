import cucumber.api.java.After;
import cucumber.api.java.Before;
import drivers.DriversFactory;



import cucumber.api.java.After;
        import cucumber.api.java.Before;
        import cucumber.api.java.cy_gb.A;
        import drivers.DriversFactory;

import org.apache.logging.log4j.LogManager;
import org.openqa.selenium.WebDriver;

import java.util.logging.Logger;


public class Hooks {

    DriversFactory df = new DriversFactory();





    @Before
    public void setUpBrowser(){




        df.openBrowser();
        df.maxBrowser();
        df.openUrl("https://demo.opencart.com/");
        df.applyImplicitWait();
    }




    @After
    public void tearDown(){
        df.closeBrowser();
    }

}

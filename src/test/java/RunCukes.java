import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(

        dryRun = false,
        features = "src/test/resources",
       // features = "src/test/resources/Login.feature",
        plugin = {"json:target/cucumber.json",
        "pretty", "html:reports/myreports.html",
        "rerun:target/rerun.txt"}

)

public class RunCukes {


}

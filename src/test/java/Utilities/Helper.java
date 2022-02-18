package Utilities;

import org.apache.commons.lang3.RandomStringUtils;

public class Helper {

    public String getRandomString(int x){
        return RandomStringUtils.randomAlphabetic(x);
    }

    public int getRandomNumeric(int x){
       String numeric = RandomStringUtils.randomNumeric(x);
       int randomNum =Integer.parseInt(numeric);
       return randomNum;

    }

    public String getRandomNumbers(int x){
        String numeric = RandomStringUtils.randomNumeric(x);
        return numeric;

    }

}

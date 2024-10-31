import java.util.Arrays;

public class Pyramid { 

    static String cellPattern = "*";
    static String emptyPattern = " ";
    public static void main(String[] args) {
        createPyramidWithNRows(5);
        createInvertedPyramidWithNRows(5);
    }

    static void createPyramidWithNRows(Integer numOfRows) {
        Integer totalSpace = numOfRows + numOfRows - 1;
        Integer midIndex = (int)(Math.ceil(totalSpace/2));
        String[] row = new String[totalSpace];

        Arrays.fill(row, emptyPattern);

        for(int i = 0; i< numOfRows; i++) {
            row[midIndex + i] = cellPattern;
            row[midIndex - i] = cellPattern;
            System.out.println(String.join("", row));
        }
    }

    static void createInvertedPyramidWithNRows(Integer numOfRows) {
        Integer totalSpace = numOfRows + numOfRows - 1;
        Integer midIndex = (int)(Math.ceil(totalSpace/2));
        String[] row = new String[totalSpace];

        Arrays.fill(row, cellPattern);

        for(int i = numOfRows - 1; i>=0; i--) {
            row[midIndex + i] = emptyPattern;
            row[midIndex - i] = emptyPattern;
            System.out.println(String.join("", row));
        }
    }
}

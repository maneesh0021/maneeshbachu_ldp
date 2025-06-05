package javaassignments.assignment8;

class ExceptionThrower {
    public void throwExceptions(int type) throws FirstCustomException, SecondCustomException, ThirdCustomException {
        switch (type) {
            case 1:
                throw new FirstCustomException("This is the FirstCustomException.");
            case 2:
                throw new SecondCustomException("This is the SecondCustomException.");
            case 3:
                throw new ThirdCustomException("This is the ThirdCustomException.");
            case 4:
                // This will throw a NullPointerException
                String s = null;
                System.out.println(s.length());
                break;
            default:
                System.out.println("No exception thrown.");
        }
    }
}
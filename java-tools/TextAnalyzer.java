public class TextAnalyzer {
    public static void main(String[] args) {
        if (args.length == 0) {
            System.out.println("{\"error\": \"No text provided.\"}");
            return;
        }

        String text = args[0];
        
        // Basic analysis
        int charCount = text.length();
        int wordCount = text.trim().isEmpty() ? 0 : text.trim().split("\\s+").length;
        
        // Simple sentence count approximation
        int sentenceCount = text.trim().isEmpty() ? 0 : text.split("[.!?]+").length;
        if (sentenceCount == 0 && wordCount > 0) sentenceCount = 1;

        // Output JSON for the Node.js backend to parse
        System.out.println("{");
        System.out.println("  \"success\": true,");
        System.out.println("  \"charCount\": " + charCount + ",");
        System.out.println("  \"wordCount\": " + wordCount + ",");
        System.out.println("  \"sentenceCount\": " + sentenceCount);
        System.out.println("}");
    }
}

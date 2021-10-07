package hometoogether.hometoogether.domain.file;

import lombok.*;

@Getter
@Setter
@ToString
@NoArgsConstructor
public class FileRequestDto {
    private String origFilename;
    private String filename;
    private String filePath;

    public File toEntity() {
        File build = File.builder()
                .origFilename(origFilename)
                .filename(filename)
                .filePath(filePath)
                .build();
        return build;
    }

    @Builder
    public FileRequestDto(String origFilename, String filename, String filePath) {
        this.origFilename = origFilename;
        this.filename = filename;
        this.filePath = filePath;
    }
}

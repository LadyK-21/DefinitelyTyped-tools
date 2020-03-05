import { ensureDir } from "fs-extra";
import { writeJson, joinPaths, readFileAndWarn } from "@definitelytyped/utils";
import { dataDirPath } from "./lib/settings";

export function readDataFile(generatedBy: string, fileName: string): Promise<object> {
  return readFileAndWarn(generatedBy, dataFilePath(fileName));
}

export async function writeDataFile(filename: string, content: {}, formatted = true): Promise<void> {
  await ensureDir(dataDirPath);
  await writeJson(dataFilePath(filename), content, formatted);
}

export function dataFilePath(filename: string): string {
  return joinPaths(dataDirPath, filename);
}

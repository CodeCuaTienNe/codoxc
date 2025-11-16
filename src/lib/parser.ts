export function parseCode(code: string): any {
  try {
    // Remove export statements
    let cleanCode = code.replace(/export\s+(const|let|var)\s+/g, "");

    // Try to extract the config object
    let configMatch = cleanCode.match(/documentConfig\s*=\s*({[\s\S]*})/);

    if (!configMatch) {
      // Try to find standalone object
      configMatch = cleanCode.match(/({[\s\S]*})/);
    }

    if (!configMatch) {
      throw new Error("Cannot find documentConfig object");
    }

    // Use Function constructor to safely evaluate the object
    const configStr = configMatch[1];
    const config = new Function(`return ${configStr}`)();

    // Validate config
    if (!config.sections || !Array.isArray(config.sections)) {
      throw new Error('Config must have a "sections" array');
    }

    return config;
  } catch (error: any) {
    throw new Error(`Parse error: ${error.message}`);
  }
}

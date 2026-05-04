import {
  settingsPath, closePath, minimizePath, addPath, editPath, menuPath,
  dragHandlePath, refreshPath, searchPath, expandMorePath, expandLessPath,
  checkPath, checkCirclePath, warningPath, errorPath, infoPath,
  playPath, pausePath, skipNextPath, skipPreviousPath, volumeUpPath,
  lightbulbOnPath, powerPath, brightnessPath, cameraPath, videocamPath,
  wifiPath, wifiOffPath, musicNotePath, fileDocumentPath, unknownPath,
} from './mdi-icons.js';

function createIcon(pathData, options = {}) {
  const {
    size = 24,
    className = '',
    color = 'currentColor',
    ariaLabel = '',
    title = '',
    viewBox = '0 0 24 24',
  } = options;

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', size);
  svg.setAttribute('height', size);
  svg.setAttribute('viewBox', viewBox);
  svg.setAttribute('fill', color);
  svg.setAttribute('class', `icon ${className}`.trim());

  if (ariaLabel) {
    svg.setAttribute('aria-label', ariaLabel);
    svg.setAttribute('role', 'img');
  } else {
    svg.setAttribute('aria-hidden', 'true');
  }

  if (title) {
    const titleElement = document.createElementNS('http://www.w3.org/2000/svg', 'title');
    titleElement.textContent = title;
    svg.appendChild(titleElement);
  }

  const paths = Array.isArray(pathData) ? pathData : [pathData];
  paths.forEach(d => {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', d);
    svg.appendChild(path);
  });

  return svg;
}

// Creates an SVG string (for innerHTML insertion) from an MDI path
function createIconSvgString(pathData, size = 20) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="${pathData}"/></svg>`;
}

const Icons = {
  // Window Controls
  close: (options) => createIcon(closePath, { ...options, ariaLabel: options?.ariaLabel || 'Close' }),
  minimize: (options) => createIcon(minimizePath, { ...options, ariaLabel: options?.ariaLabel || 'Minimize' }),

  // Navigation & Actions
  settings: (options) => createIcon(settingsPath, { ...options, ariaLabel: options?.ariaLabel || 'Settings' }),
  add: (options) => createIcon(addPath, { ...options, ariaLabel: options?.ariaLabel || 'Add' }),
  remove: (options) => createIcon(closePath, { ...options, ariaLabel: options?.ariaLabel || 'Remove' }),
  edit: (options) => createIcon(editPath, { ...options, ariaLabel: options?.ariaLabel || 'Edit' }),
  menu: (options) => createIcon(menuPath, { ...options, ariaLabel: options?.ariaLabel || 'Menu' }),
  dragHandle: (options) => createIcon(dragHandlePath, { ...options, ariaLabel: options?.ariaLabel || 'Drag to reorder' }),
  refresh: (options) => createIcon(refreshPath, { ...options, ariaLabel: options?.ariaLabel || 'Refresh' }),
  search: (options) => createIcon(searchPath, { ...options, ariaLabel: options?.ariaLabel || 'Search' }),
  expandMore: (options) => createIcon(expandMorePath, { ...options, ariaLabel: options?.ariaLabel || 'Expand' }),
  expandLess: (options) => createIcon(expandLessPath, { ...options, ariaLabel: options?.ariaLabel || 'Collapse' }),
  check: (options) => createIcon(checkPath, { ...options, ariaLabel: options?.ariaLabel || 'Check' }),

  // Media Controls
  play: (options) => createIcon(playPath, { ...options, ariaLabel: options?.ariaLabel || 'Play' }),
  pause: (options) => createIcon(pausePath, { ...options, ariaLabel: options?.ariaLabel || 'Pause' }),
  skipNext: (options) => createIcon(skipNextPath, { ...options, ariaLabel: options?.ariaLabel || 'Next' }),
  skipPrevious: (options) => createIcon(skipPreviousPath, { ...options, ariaLabel: options?.ariaLabel || 'Previous' }),
  volumeUp: (options) => createIcon(volumeUpPath, { ...options, ariaLabel: options?.ariaLabel || 'Volume' }),
  musicNote: (options) => createIcon(musicNotePath, { ...options, ariaLabel: options?.ariaLabel || 'Music' }),

  // State Icons
  lightbulb: (options) => createIcon(lightbulbOnPath, { ...options, ariaLabel: options?.ariaLabel || 'Light' }),
  power: (options) => createIcon(powerPath, { ...options, ariaLabel: options?.ariaLabel || 'Power' }),
  brightness: (options) => createIcon(brightnessPath, { ...options, ariaLabel: options?.ariaLabel || 'Brightness' }),

  // Camera
  camera: (options) => createIcon(cameraPath, { ...options, ariaLabel: options?.ariaLabel || 'Camera' }),
  videocam: (options) => createIcon(videocamPath, { ...options, ariaLabel: options?.ariaLabel || 'Video' }),

  // Alerts & Notifications
  warning: (options) => createIcon(warningPath, { ...options, ariaLabel: options?.ariaLabel || 'Warning' }),
  error: (options) => createIcon(errorPath, { ...options, ariaLabel: options?.ariaLabel || 'Error' }),
  checkCircle: (options) => createIcon(checkCirclePath, { ...options, ariaLabel: options?.ariaLabel || 'Success' }),
  info: (options) => createIcon(infoPath, { ...options, ariaLabel: options?.ariaLabel || 'Information' }),

  // Connectivity
  wifi: (options) => createIcon(wifiPath, { ...options, ariaLabel: options?.ariaLabel || 'Connected' }),
  wifiOff: (options) => createIcon(wifiOffPath, { ...options, ariaLabel: options?.ariaLabel || 'Disconnected' }),

  // Utility
  fileDocument: (options) => createIcon(fileDocumentPath, { ...options, ariaLabel: options?.ariaLabel || 'Logs' }),
  unknown: (options) => createIcon(unknownPath, { ...options, ariaLabel: options?.ariaLabel || 'Unknown' }),
};

function replaceWithIcon(element, iconName, options = {}) {
  if (!element || !Icons[iconName]) return;
  const icon = Icons[iconName](options);
  element.replaceWith(icon);
  return icon;
}

function setIconContent(element, iconName, options = {}) {
  if (!element || !Icons[iconName]) return;
  element.innerHTML = '';
  const icon = Icons[iconName](options);
  element.appendChild(icon);
  return icon;
}

export { createIcon, createIconSvgString, Icons, replaceWithIcon, setIconContent };

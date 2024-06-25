import { useRef, useEffect, useState } from 'react'
import WaveSurfer from 'wavesurfer'

import './../css/player.css'

const formWaveSurferOptions = (ref) => ({
	container: ref,
	waveColor: '#ccc',
	progressColor: '#f37a17',
	cursorColor: 'transparent',
	responsive: true,
	height: 80,
	normalize: true,
	backend: 'WebAudio',
	barWidth: 2,
	barGap: 3,
	hideScrollbar: true,
	autoScroll: true,
	autoCenter: true,
	mediaType: 'audio/mp3',
})

export default function Player(...audioFile) {
	const waveformRef = useRef(null)
	const wavesurfer = useRef(null)
	const [playing, setPlaying] = useState(false)
	const [volume, setVolume] = useState(0.5)
	const [muted, setMuted] = useState(false)

	useEffect(() => {
		const options = formWaveSurferOptions(waveformRef.current)
		wavesurfer.current = WaveSurfer.create(options)

		wavesurfer.current.load(audioFile)

		wavesurfer.current.on('ready', () => {
			setVolume(wavesurfer.current.getVolume())
		})

		return () => {
			wavesurfer.current.un('audioprogress')
			wavesurfer.current.un('ready')
			wavesurfer.current.destroy()
		}
	}, [audioFile])

	const handlePlayPause = () => {
		setPlaying(!playing)
		wavesurfer.current.playPause()
	}

	const handleVolumeChange = (newVolume) => {
		setVolume(newVolume)
		wavesurfer.current.setVolume(newVolume)
		setMuted(newVolume === 0)
	}

	const handleMute = () => {
		setMuted(!muted)
		wavesurfer.current.setVolume(muted ? volume : 0)
	}

	return (
		<div className='player'>
			<div
				id='waveform'
				ref={waveformRef}
				style={{ width: '80%' }}>
				<div className='controls'>
					{/* Mute / Unmute */}
					<button onClick={handleMute}>
						<box-icon
							size='lg'
							type='solid'
							color='#3d9be9'
							name={muted ? 'volume-mute' : 'volume'}></box-icon>
					</button>
					{/* Play / Pause */}
					<button onClick={handlePlayPause}>
						<box-icon
							size='lg'
							color='#3d9be9'
							name={playing ? 'pause' : 'play'}></box-icon>
					</button>
					<input
						type='range'
						id='volume'
						name='volume'
						min={0}
						max={1}
						step={0.05}
						value={muted ? 0 : volume}
						onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
					/>
				</div>
			</div>
		</div>
	)
}

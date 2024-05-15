<script lang="ts">
    export const day: Day = { date: new Date(),
    meals: [],
    felt: "",
    effort: 0,
    sleep: 0,
    lift: false,
    run: false,
    stretch: false,
    notes: "",
    }; 

</script>

    <div>
        <h1>{day.date.toDateString()}</h1>
        <h2>Felt</h2>
        <p>{day.felt}</p>
        <h2>Sleep</h2>
        <p>{day.sleep}</p>
        <h2>Lift</h2>
        <p>{day.lift}</p>
        <h2>Run</h2>
        <p>{day.run}</p>
        <h2>Stretch</h2>
        <p>{day.stretch}</p>
        <h2>Notes</h2>
        <p>{day.notes}</p>
    </div>